# Trio Workspace

**Purpose:** Product trio workspace for collaborative product development

---

## How This Workspace Works

**Trio gathers inputs → Claude generates docs**

```
project/
├── inputs/                     ← Trio fills this
│   ├── 01-transcripts/
│   ├── 02-customer-evidence/
│   ├── 03-designs/
│   └── 04-references/
│
├── 01_Product/                 ← Claude generates
├── 02_Ship/                    ← Claude generates
├── 03_Launch/                  ← Claude generates
├── 04_Post-Launch/             ← Claude generates
└── 99_Archive/
```

---

## Skills

Skills are defined in `.claude/skills/`. Use natural language to invoke them:

| Skill | Trigger | What it does |
|-------|---------|--------------|
| `new-project` | "create new project [name]" | Copy template, set up folder |
| `generate-product` | "generate product for [name]" | Brief + Discovery Synthesis |
| `generate-ship` | "generate ship for [name]" | Design + Specs |
| `generate-launch` | "generate launch for [name]" | Release Notes + Enablement + Docs |
| `generate-post-launch` | "generate post-launch for [name]" | Results + Follow-ups + Retro |
| `whats-missing` | "what's missing for [name]" | Show gaps in current phase |

---

## Quick Reference

### Workflow Phases

| Phase | Inputs Needed | Outputs |
|-------|--------------|---------|
| 1. Product | Kickoff transcript, Customer evidence | Brief, Discovery Synthesis |
| 2. Ship | Design files, Design review transcript | Design, Specs |
| 3. Launch | Enablement transcript, Launch details | Release Notes, Enablement, Docs |
| 4. Post-Launch | Results data, Feedback, Retro transcript | Results, Follow-ups, Retro |

### Input Folders

| Folder | What goes here |
|--------|----------------|
| `01-transcripts/` | Meeting notes, call transcripts |
| `02-customer-evidence/` | Customer calls, tickets, surveys |
| `03-designs/` | Figma links, screenshots, mockups |
| `04-references/` | Data, research, external docs |

---

## Rules

1. **DO NOT create new folders.** Use the template structure.
2. **Trio only touches `inputs/`.** Everything else is generated.
3. **One project = one folder.** No exceptions.
4. **ALWAYS follow templates exactly.** See `generation-rules/`.

---

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `projects/` | All project folders live here |
| `projects/_project-template/` | Template for new projects |
| `generation-rules/` | Templates + instructions for each doc type |
| `company-context/` | Strategic context (COMPANY.md, PERSONAS.md, etc.) |
| `.claude/skills/` | Skill definitions for this workspace |

---

## Generation Rules

Each document type has two files in `generation-rules/`:
- **Template** (e.g., `Brief.md`) - The structure to follow
- **Instructions** (e.g., `Brief.instructions.md`) - How to fill it in

When generating:
- Follow template structure exactly
- Replace `{{placeholders}}` with content
- List all input files used in "Generated from" section
