import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { Phase, PHASES, INPUT_FOLDERS } from './types';

const WORKSPACE_ROOT = path.join(process.cwd(), '..');
const PROJECTS_DIR = path.join(WORKSPACE_ROOT, 'projects');
const GENERATION_RULES_DIR = path.join(WORKSPACE_ROOT, 'generation-rules');
const COMPANY_CONTEXT_DIR = path.join(WORKSPACE_ROOT, 'company-context');

// Map phases to their doc types
const PHASE_DOCS: Record<Phase, { name: string; file: string }[]> = {
  product: [
    { name: 'Brief', file: 'Brief' },
    { name: 'Discovery Synthesis', file: 'Discovery-Synthesis' },
  ],
  ship: [
    { name: 'Design', file: 'Design' },
    { name: 'Specs', file: 'Specs' },
  ],
  launch: [
    { name: 'Release Notes', file: 'Release-Notes' },
    { name: 'Enablement', file: 'Enablement' },
    { name: 'Docs', file: 'Docs' },
  ],
  'post-launch': [
    { name: 'Results', file: 'Results' },
    { name: 'Follow-ups', file: 'Follow-ups' },
    { name: 'Retro', file: 'Retro' },
  ],
};

function readFileIfExists(filePath: string): string | null {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  } catch {
    // Ignore
  }
  return null;
}

function readDirFiles(dirPath: string): { name: string; content: string }[] {
  const files: { name: string; content: string }[] = [];
  try {
    if (fs.existsSync(dirPath)) {
      const entries = fs.readdirSync(dirPath).filter((f) => !f.startsWith('.'));
      for (const entry of entries) {
        const content = readFileIfExists(path.join(dirPath, entry));
        if (content) {
          files.push({ name: entry, content });
        }
      }
    }
  } catch {
    // Ignore
  }
  return files;
}

export async function generateDocs(
  projectId: string,
  phase: Phase
): Promise<{ success: boolean; docs: string[]; error?: string }> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return { success: false, docs: [], error: 'ANTHROPIC_API_KEY not configured' };
  }

  const client = new Anthropic({ apiKey });
  const projectDir = path.join(PROJECTS_DIR, projectId);
  const phaseInfo = PHASES.find((p) => p.id === phase)!;
  const docsToGenerate = PHASE_DOCS[phase];

  // Gather inputs
  const inputs: Record<string, { name: string; content: string }[]> = {};
  for (const folder of INPUT_FOLDERS) {
    inputs[folder.id] = readDirFiles(
      path.join(projectDir, 'inputs', folder.folder)
    );
  }

  // Read company context
  const companyContext: Record<string, string> = {};
  for (const file of ['COMPANY.md', 'COMPETITIVE.md', 'PRODUCT.md', 'PERSONAS.md']) {
    const content = readFileIfExists(path.join(COMPANY_CONTEXT_DIR, file));
    if (content) {
      companyContext[file] = content;
    }
  }

  const generatedDocs: string[] = [];

  // Generate each doc for this phase
  for (const doc of docsToGenerate) {
    const templatePath = path.join(
      GENERATION_RULES_DIR,
      phaseInfo.folder,
      `${doc.file}.md`
    );
    const instructionsPath = path.join(
      GENERATION_RULES_DIR,
      phaseInfo.folder,
      `${doc.file}.instructions.md`
    );

    const template = readFileIfExists(templatePath);
    const instructions = readFileIfExists(instructionsPath);

    if (!template) {
      console.log(`Skipping ${doc.name}: no template found at ${templatePath}`);
      continue;
    }

    // Build prompt
    const prompt = buildPrompt(
      projectId,
      doc.name,
      template,
      instructions,
      inputs,
      companyContext
    );

    try {
      const response = await client.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 8192,
        messages: [{ role: 'user', content: prompt }],
      });

      const content = response.content[0];
      if (content.type === 'text') {
        // Save generated doc
        const outputDir = path.join(projectDir, phaseInfo.folder);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        const outputPath = path.join(outputDir, `${projectId}-${doc.file}.md`);
        fs.writeFileSync(outputPath, content.text);
        generatedDocs.push(`${projectId}-${doc.file}.md`);
      }
    } catch (error) {
      console.error(`Error generating ${doc.name}:`, error);
      return {
        success: false,
        docs: generatedDocs,
        error: `Failed to generate ${doc.name}`,
      };
    }
  }

  // Update metadata
  const metaPath = path.join(projectDir, '.trio-meta.json');
  if (fs.existsSync(metaPath)) {
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    meta.updatedAt = new Date().toISOString();
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  }

  return { success: true, docs: generatedDocs };
}

function buildPrompt(
  projectId: string,
  docName: string,
  template: string,
  instructions: string | null,
  inputs: Record<string, { name: string; content: string }[]>,
  companyContext: Record<string, string>
): string {
  let prompt = `You are generating a ${docName} document for project "${projectId}".\n\n`;

  // Add instructions if available
  if (instructions) {
    prompt += `## Instructions\n\n${instructions}\n\n`;
  }

  // Add template
  prompt += `## Template (follow this structure exactly)\n\n${template}\n\n`;

  // Add company context
  const contextKeys = Object.keys(companyContext);
  if (contextKeys.length > 0) {
    prompt += `## Company Context\n\n`;
    for (const key of contextKeys) {
      prompt += `### ${key}\n\n${companyContext[key]}\n\n`;
    }
  }

  // Add inputs
  prompt += `## Project Inputs\n\n`;

  for (const [folder, files] of Object.entries(inputs)) {
    if (files.length > 0) {
      prompt += `### ${folder}\n\n`;
      for (const file of files) {
        prompt += `#### ${file.name}\n\n${file.content}\n\n`;
      }
    }
  }

  prompt += `\n## Instructions\n\n`;
  prompt += `Generate the ${docName} document following the template structure exactly. `;
  prompt += `Use the inputs provided above to fill in the content. `;
  prompt += `Replace all {{placeholders}} with actual content from the inputs. `;
  prompt += `Keep all section headers and table structures from the template. `;
  prompt += `Output only the final document in Markdown format, nothing else.`;

  return prompt;
}
