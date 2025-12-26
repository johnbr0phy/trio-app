# Skill: Generate Launch Phase

Generate Phase 3 documents: Release Notes, Enablement, and Docs.

## Trigger

Use when the user says:
- "generate launch for [name]"
- "generate 03 launch for [name]"
- "create release notes for [name]"
- "create enablement for [name]"

## Prerequisites

Phases 1-2 should be complete:
- `01_Product/[name]-Brief.md` exists
- `02_Ship/[name]-Design.md` exists
- `02_Ship/[name]-Specs.md` exists

## Required Inputs

Verify these inputs exist in `projects/[name]/inputs/`:

| Folder | Required | Contents |
|--------|----------|----------|
| `01-transcripts/` | Recommended | Enablement session transcript |
| `04-references/` | Yes | Launch details (what shipped, when, release info) |

## Generation Process

### Step 1: Read All Context

1. **Previous phase outputs**:
   - `01_Product/[name]-Brief.md`
   - `02_Ship/[name]-Design.md`
   - `02_Ship/[name]-Specs.md`

2. **Generation rules** (from `generation-rules/03_Launch/`):
   - `Release-Notes.instructions.md` + `Release-Notes.md`
   - `Enablement.instructions.md` + `Enablement.md`
   - `Docs.instructions.md` + `Docs.md`

3. **Project inputs** (from `projects/[name]/inputs/`):
   - Read enablement transcripts from `01-transcripts/`
   - Read launch details from `04-references/`

### Step 2: Generate Documents

For each document:
1. Read the instructions file first
2. Read the template file
3. Fill in the template following the instructions exactly
4. Save to `projects/[name]/03_Launch/[name]-[DocType].md`

## Output Files

```
projects/[name]/03_Launch/
├── [name]-Release-Notes.md
├── [name]-Enablement.md
└── [name]-Docs.md
```

## Quality Checklist

Before finishing, verify:
- [ ] Release notes are customer-facing appropriate
- [ ] Enablement includes key talking points for CS/Sales
- [ ] Docs are ready for help center
- [ ] No placeholder text remains
- [ ] "Generated from" lists all input files used
