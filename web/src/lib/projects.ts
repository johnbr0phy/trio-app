import fs from 'fs';
import path from 'path';
import { Project, Phase, INPUT_FOLDERS, PHASES } from './types';

// Path to projects directory (relative to workspace root)
const PROJECTS_DIR = path.join(process.cwd(), '..', 'projects');

// Ensure projects directory exists
function ensureProjectsDir() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    fs.mkdirSync(PROJECTS_DIR, { recursive: true });
  }
}

// Create slug from project name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Read all projects from file system
export function getAllProjects(): Project[] {
  ensureProjectsDir();

  const entries = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true });
  const projects: Project[] = [];

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      const project = getProject(entry.name);
      if (project) {
        projects.push(project);
      }
    }
  }

  return projects.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

// Get a single project by ID
export function getProject(id: string): Project | null {
  const projectDir = path.join(PROJECTS_DIR, id);

  if (!fs.existsSync(projectDir)) {
    return null;
  }

  // Read inputs
  const inputs: Project['inputs'] = {
    transcripts: [],
    'customer-evidence': [],
    designs: [],
    references: [],
  };

  for (const folder of INPUT_FOLDERS) {
    const folderPath = path.join(projectDir, 'inputs', folder.folder);
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath).filter((f) => !f.startsWith('.'));
      inputs[folder.id] = files.map((f) => ({
        name: f,
        path: path.join(folderPath, f),
        folder: folder.id,
      }));
    }
  }

  // Read generated docs
  const generatedDocs: Project['generatedDocs'] = [];
  for (const phase of PHASES) {
    const phasePath = path.join(projectDir, phase.folder);
    if (fs.existsSync(phasePath)) {
      const files = fs.readdirSync(phasePath).filter((f) => !f.startsWith('.'));
      for (const file of files) {
        generatedDocs.push({
          name: file,
          path: path.join(phasePath, file),
          phase: phase.id,
        });
      }
    }
  }

  // Read metadata if exists
  const metaPath = path.join(projectDir, '.trio-meta.json');
  let meta = {
    phase: 'product' as Phase,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (fs.existsSync(metaPath)) {
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    } catch {
      // Use defaults
    }
  }

  return {
    id,
    name: id,
    phase: meta.phase,
    inputs,
    generatedDocs,
    createdAt: meta.createdAt,
    updatedAt: meta.updatedAt,
  };
}

// Create a new project
export function createProject(name: string): Project {
  ensureProjectsDir();

  const id = createSlug(name);
  const projectDir = path.join(PROJECTS_DIR, id);

  if (fs.existsSync(projectDir)) {
    throw new Error(`Project "${id}" already exists`);
  }

  // Copy from template
  const templateDir = path.join(PROJECTS_DIR, '_project-template');

  if (fs.existsSync(templateDir)) {
    copyDir(templateDir, projectDir);
  } else {
    // Create structure manually
    fs.mkdirSync(projectDir, { recursive: true });
    for (const folder of INPUT_FOLDERS) {
      fs.mkdirSync(path.join(projectDir, 'inputs', folder.folder), {
        recursive: true,
      });
    }
    for (const phase of PHASES) {
      fs.mkdirSync(path.join(projectDir, phase.folder), { recursive: true });
    }
    fs.mkdirSync(path.join(projectDir, '99_Archive'), { recursive: true });
  }

  // Create metadata
  const meta = {
    phase: 'product' as Phase,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  fs.writeFileSync(
    path.join(projectDir, '.trio-meta.json'),
    JSON.stringify(meta, null, 2)
  );

  return getProject(id)!;
}

// Update project metadata
export function updateProject(id: string, updates: { phase?: Phase }): Project {
  const projectDir = path.join(PROJECTS_DIR, id);
  const metaPath = path.join(projectDir, '.trio-meta.json');

  if (!fs.existsSync(projectDir)) {
    throw new Error(`Project "${id}" not found`);
  }

  let meta = {
    phase: 'product' as Phase,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  }

  if (updates.phase) {
    meta.phase = updates.phase;
  }
  meta.updatedAt = new Date().toISOString();

  fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));

  return getProject(id)!;
}

// Helper to copy directory recursively
function copyDir(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Save uploaded file to project
export function saveUploadedFile(
  projectId: string,
  folder: string,
  fileName: string,
  content: Buffer
): void {
  const folderInfo = INPUT_FOLDERS.find((f) => f.id === folder);
  if (!folderInfo) {
    throw new Error(`Invalid folder: ${folder}`);
  }

  const projectDir = path.join(PROJECTS_DIR, projectId);
  const targetDir = path.join(projectDir, 'inputs', folderInfo.folder);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(path.join(targetDir, fileName), content);

  // Update metadata timestamp
  const metaPath = path.join(projectDir, '.trio-meta.json');
  if (fs.existsSync(metaPath)) {
    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
    meta.updatedAt = new Date().toISOString();
    fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2));
  }
}
