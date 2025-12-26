# Skill: Generate Product Phase

Generate Phase 1 documents: Brief and Discovery Synthesis.

## Trigger

Use when the user says:
- "generate product for [name]"
- "generate 01 product for [name]"
- "create brief for [name]"

## Required Inputs

Before generating, verify these inputs exist in `projects/[name]/inputs/`:

| Folder | Required | Contents |
|--------|----------|----------|
| `01-transcripts/` | Yes | Kickoff meeting transcript |
| `02-customer-evidence/` | Yes | At least 1 file (calls, tickets, surveys) |

If inputs are missing, tell the user what's needed and stop.

## Generation Process

### Step 1: Read All Context

1. **Company context** (from `company-context/`):
   - `COMPANY.md` - Strategy, metrics, priorities
   - `COMPETITIVE.md` - Competitor analysis
   - `PRODUCT.md` - Features, value prop
   - `PERSONAS.md` - User personas

2. **Generation rules** (from `generation-rules/01_Product/`):
   - `Brief.instructions.md` - How to fill the Brief
   - `Brief.md` - Template structure
   - `Discovery-Synthesis.instructions.md` - How to fill Discovery Synthesis
   - `Discovery-Synthesis.md` - Template structure

3. **Project inputs** (from `projects/[name]/inputs/`):
   - Read ALL files in `01-transcripts/`
   - Read ALL files in `02-customer-evidence/`
   - Read any relevant files in `04-references/`

### Step 2: Generate Documents

For each document:
1. Read the instructions file first
2. Read the template file
3. Fill in the template following the instructions exactly
4. Save to `projects/[name]/01_Product/[name]-[DocType].md`

### Step 3: Competitive Research (Optional)

Before completing the Brief, ask:
> "Would you like me to research how competitors handle [this specific feature]? I can search their websites and documentation."

If yes:
1. Research competitor websites, docs, G2 reviews
2. Save to `inputs/04-references/competitive-research-[feature].md`
3. Include summary in Brief's Competitive Context section

## Output Files

```
projects/[name]/01_Product/
├── [name]-Brief.md
└── [name]-Discovery-Synthesis.md
```

## Quality Checklist

Before finishing, verify:
- [ ] Problem statement is clear and specific
- [ ] Scope has both IN and OUT sections
- [ ] Success metrics have measurable targets
- [ ] No placeholder text like `{{brackets}}` remains
- [ ] "Generated from" lists all input files used
