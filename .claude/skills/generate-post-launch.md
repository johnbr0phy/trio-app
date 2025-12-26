# Skill: Generate Post-Launch Phase

Generate Phase 4 documents: Results, Follow-ups, and Retro.

## Trigger

Use when the user says:
- "generate post-launch for [name]"
- "generate 04 post-launch for [name]"
- "create results for [name]"
- "create retro for [name]"

## Prerequisites

Phases 1-3 should be complete:
- `01_Product/[name]-Brief.md` exists
- `02_Ship/[name]-Design.md` exists
- `03_Launch/[name]-Release-Notes.md` exists

## Required Inputs

Verify these inputs exist in `projects/[name]/inputs/`:

| Folder | Required | Contents |
|--------|----------|----------|
| `04-references/` | Yes | Results data, metrics, analytics |
| `02-customer-evidence/` | Recommended | Post-launch customer feedback |
| `01-transcripts/` | Recommended | Retro meeting transcript |

## Generation Process

### Step 1: Read All Context

1. **Previous phase outputs**:
   - `01_Product/[name]-Brief.md` (for success metrics to compare)
   - `03_Launch/[name]-Release-Notes.md` (for what shipped)

2. **Generation rules** (from `generation-rules/04_Post-Launch/`):
   - `Results.instructions.md` + `Results.md`
   - `Follow-ups.instructions.md` + `Follow-ups.md`
   - `Retro.instructions.md` + `Retro.md`

3. **Project inputs** (from `projects/[name]/inputs/`):
   - Read results data from `04-references/`
   - Read post-launch feedback from `02-customer-evidence/`
   - Read retro transcript from `01-transcripts/`

### Step 2: Generate Documents

For each document:
1. Read the instructions file first
2. Read the template file
3. Fill in the template following the instructions exactly
4. Save to `projects/[name]/04_Post-Launch/[name]-[DocType].md`

## Output Files

```
projects/[name]/04_Post-Launch/
├── [name]-Results.md
├── [name]-Follow-ups.md
└── [name]-Retro.md
```

## Quality Checklist

Before finishing, verify:
- [ ] Results compare actual vs target metrics from Brief
- [ ] Follow-ups are prioritized and assigned
- [ ] Retro has clear learnings and action items
- [ ] No placeholder text remains
- [ ] "Generated from" lists all input files used

## Project Completion

After generating Post-Launch docs:
1. Consider archiving completed inputs to `99_Archive/`
2. Summarize the project journey for the trio
