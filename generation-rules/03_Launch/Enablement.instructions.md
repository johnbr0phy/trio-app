# Generation Instructions: Enablement.md

## Purpose

The Enablement Guide helps internal teams (CS, Sales, Support) understand, demo, and support the new feature. It includes talking points, demo steps, common questions, and objection handling.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `01-transcripts/` | Find enablement session transcript | Yes |
| `04-references/` | Find launch details, release info | Recommended |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (enablement session, launch details, etc.). Extract training and positioning information regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `01_Product/Brief.md` | Yes |
| `01_Product/Discovery-Synthesis.md` | Yes (for customer quotes) |
| `02_Ship/Design.md` | Yes |

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `PERSONAS.md` | Target customer section |
| `COMPETITIVE.md` | Competitive positioning section |
| `COMPANY.md` | Strategic alignment messaging |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Last Updated:** Current date
**Audience:** CS, Sales, Support (or specific teams)
```

### Overview
- **What We Built:** 2-3 sentences in plain language (no jargon)
- **Why It Matters:** Customer value and business impact
- **Target Customers:** Which customer segments benefit most (reference Personas)

### Key Talking Points
- **Problem We Solved:** 1-2 sentence problem statement for customer conversations
- **Solution:** 1-2 sentence solution statement
- **Customer Benefits:** 3 benefits with descriptions
- Pull from Brief.md and Discovery-Synthesis.md
- These should be memorizable for Sales/CS

### Feature Walkthrough
- For each feature/component:
  - What it does (plain language)
  - How to demo (numbered steps)
  - Key configurations to show
- Pull from Design.md and enablement transcript
- Focus on what's most impressive to show

### Common Questions
- Q&A format
- Pull questions from enablement session if available
- Include questions CS/Sales are likely to hear
- Answers should be concise and confident

### Objection Handling
- Common objections customers might raise
- Scripted responses
- Pull from competitive concerns in Discovery Synthesis
- Common objections: "We can do this in our ESP", "Is this accessible?", "What about email?"

### What's NOT Included (v1)
- List features not in v1
- Explain why or when coming
- Arm CS/Sales to set proper expectations
- Pull from Brief.md out of scope

### Competitive Positioning
- How we compare vs key competitors
- Reference COMPETITIVE.md
- Focus on features relevant to this release
- Give Sales ammunition for competitive deals

### Resources
- Links to demo environment
- Links to documentation
- Links to release notes
- Links to designs

### Generated From
- List all input files used

---

## Quality Checklist

Before saving, verify:
- [ ] Talking points are concise and memorizable
- [ ] Demo steps are clear and tested
- [ ] Common questions cover likely scenarios
- [ ] Objection handling gives confident responses
- [ ] Competitive positioning is accurate and current
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/03_Launch/[project-name]-Enablement.md`

Example: `projects/lp-carousels-accordions/03_Launch/lp-carousels-accordions-Enablement.md`
