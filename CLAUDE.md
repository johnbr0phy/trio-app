# Trio Workspace

**Purpose:** Product trio workspace for collaborative product development

---

## How This Workspace Works

**Trio gathers inputs → Claude generates docs**

```
project/
├── inputs/                     ← Trio fills this
│   ├── CHECKLIST.md
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

## Commands

Use slash commands or natural language:

| Slash Command | Natural Language | What it does |
|---------------|------------------|--------------|
| `/new-project [name]` | `create new project [name]` | Copy template, set up folder |
| `/generate-01-product [name]` | `generate 01_Product for [name]` | Brief + Discovery Synthesis |
| `/generate-02-ship [name]` | `generate 02_Ship for [name]` | Design + Specs |
| `/generate-03-launch [name]` | `generate 03_Launch for [name]` | Release Notes + Enablement + Docs |
| `/generate-04-post-launch [name]` | `generate 04_Post-Launch for [name]` | Results + Follow-ups + Retro |
| `/whats-missing [name]` | `what's missing for [name]` | Show gaps in current phase |

---

## Workflow

### Phase 1: Product (Discovery)

**Inputs needed:**
- Kickoff transcript → `01-transcripts/`
- Customer evidence → `02-customer-evidence/`

**Command:** `generate 01_Product for [project]`

**Generates:**
- `01_Product/[project]-Brief.md`
- `01_Product/[project]-Discovery-Synthesis.md`

---

### Phase 2: Ship (Design + Specs)

**Inputs needed:**
- Design files → `03-designs/`
- Design review transcript → `01-transcripts/`

**Command:** `generate 02_Ship for [project]`

**Generates:**
- `02_Ship/[project]-Design.md`
- `02_Ship/[project]-Specs.md`

---

### Phase 3: Launch

**Inputs needed:**
- Enablement session transcript → `01-transcripts/`
- Launch details (what shipped, when) → `04-references/`

**Command:** `generate 03_Launch for [project]`

**Generates:**
- `03_Launch/[project]-Release-Notes.md`
- `03_Launch/[project]-Enablement.md`
- `03_Launch/[project]-Docs.md`

---

### Phase 4: Post-Launch

**Inputs needed:**
- Results data → `04-references/`
- Customer feedback post-launch → `02-customer-evidence/`
- Retro transcript → `01-transcripts/`

**Command:** `generate 04_Post-Launch for [project]`

**Generates:**
- `04_Post-Launch/[project]-Results.md`
- `04_Post-Launch/[project]-Follow-ups.md`
- `04_Post-Launch/[project]-Retro.md`

---

## Rules

1. **DO NOT create new folders.** Use the template structure.
2. **Trio only touches `inputs/`.** Everything else is generated.
3. **One project = one folder.** No exceptions.
4. **When in doubt, don't add.** Ask first.
5. **ALWAYS follow templates exactly.** See below.

---

## Generation Rules

**Location:** `generation-rules/` at workspace root

Each document type has TWO files:
- **Template** (e.g., `Brief.md`) - The structure to follow
- **Instructions** (e.g., `Brief.instructions.md`) - How to fill it in

### Generation Files

```
generation-rules/
├── 01_Product/
│   ├── Brief.md + Brief.instructions.md
│   └── Discovery-Synthesis.md + Discovery-Synthesis.instructions.md
├── 02_Ship/
│   ├── Design.md + Design.instructions.md
│   └── Specs.md + Specs.instructions.md
├── 03_Launch/
│   ├── Release-Notes.md + Release-Notes.instructions.md
│   ├── Enablement.md + Enablement.instructions.md
│   └── Docs.md + Docs.instructions.md
└── 04_Post-Launch/
    ├── Results.md + Results.instructions.md
    ├── Follow-ups.md + Follow-ups.instructions.md
    └── Retro.md + Retro.instructions.md
```

### How to Generate Docs

1. Read the **instructions file** first (tells you what inputs to read, what to look for)
2. Read the **template file** (the structure to follow)
3. Read **all files** in the relevant input folders (don't rely on specific filenames)
4. Analyze each file to determine what type of content it contains
5. Fill in the template structure with content from inputs
6. Keep formatting consistent across all projects

### Generation Rules

When generating docs, **follow the template structure exactly**:
- Keep all section headers as-is
- Keep all table structures as-is
- Replace `{{placeholders}}` with actual content
- Remove sections only if no relevant data exists
- Never add new sections not in the template

---

## Company Context

**Location:** `company-context/` at workspace root

Use these files when generating briefs to include strategic context:

- `COMPANY.md` - Strategy, metrics, priorities
- `COMPETITIVE.md` - Competitor analysis
- `PRODUCT.md` - Features, value prop
- `PERSONAS.md` - User personas

### Competitive Research for Briefs

When generating a Brief, Claude will:
1. Read `COMPETITIVE.md` for general positioning
2. **Offer to do web research** on how competitors handle the specific feature
3. If yes, research competitor websites, docs, G2 reviews
4. **Save research** to `inputs/04-references/competitive-research-[feature].md`
5. Summarize in the Brief's Competitive Context section

---

## File Naming

### Input Files (what you add)

**No strict naming required** - Claude will read all files in input folders and figure out what they contain.

Suggested (but not required) patterns:
- `kickoff-2024-12-18.md`
- `design-review-2024-12-20.md`
- `customer-call-acme-corp.md`

But these also work fine:
- `Dec 15 meeting notes.md`
- `Call with Acme.md`
- `feedback from sarah.md`

**Just put files in the right folder** - that's what matters:
- Transcripts → `01-transcripts/`
- Customer evidence → `02-customer-evidence/`
- Designs → `03-designs/`
- Other references → `04-references/`

### Generated Files (what Claude creates)

Generated files include the project name for easy identification:

```
[project-name]-[DocType].md
```

**Example for project `feature-xyz`:**
- `feature-xyz-Brief.md`
- `feature-xyz-Discovery-Synthesis.md`
- `feature-xyz-Design.md`
- `feature-xyz-Specs.md`
- `feature-xyz-Release-Notes.md`
- `feature-xyz-Enablement.md`
- `feature-xyz-Docs.md`
- `feature-xyz-Results.md`
- `feature-xyz-Follow-ups.md`
- `feature-xyz-Retro.md`
