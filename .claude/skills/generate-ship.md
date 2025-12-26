# Skill: Generate Ship Phase

Generate Phase 2 documents: Design and Specs.

## Trigger

Use when the user says:
- "generate ship for [name]"
- "generate 02 ship for [name]"
- "create specs for [name]"
- "create design doc for [name]"

## Prerequisites

Phase 1 (Product) should be complete:
- `01_Product/[name]-Brief.md` exists
- `01_Product/[name]-Discovery-Synthesis.md` exists

## Required Inputs

Verify these inputs exist in `projects/[name]/inputs/`:

| Folder | Required | Contents |
|--------|----------|----------|
| `03-designs/` | Yes | Design files, Figma links, screenshots |
| `01-transcripts/` | Recommended | Design review meeting transcript |

If design files are missing, tell the user what's needed and stop.

## Generation Process

### Step 1: Read All Context

1. **Previous phase outputs**:
   - `01_Product/[name]-Brief.md`
   - `01_Product/[name]-Discovery-Synthesis.md`

2. **Generation rules** (from `generation-rules/02_Ship/`):
   - `Design.instructions.md` + `Design.md`
   - `Specs.instructions.md` + `Specs.md`

3. **Project inputs** (from `projects/[name]/inputs/`):
   - Read ALL files in `03-designs/`
   - Read design review transcripts from `01-transcripts/`
   - Read any technical references from `04-references/`

### Step 2: Generate Documents

For each document:
1. Read the instructions file first
2. Read the template file
3. Fill in the template following the instructions exactly
4. Save to `projects/[name]/02_Ship/[name]-[DocType].md`

## Output Files

```
projects/[name]/02_Ship/
├── [name]-Design.md
└── [name]-Specs.md
```

## Quality Checklist

Before finishing, verify:
- [ ] Design doc references all design files/Figma links
- [ ] Specs include acceptance criteria for each feature
- [ ] Technical constraints from Brief are addressed
- [ ] No placeholder text remains
- [ ] "Generated from" lists all input files used
