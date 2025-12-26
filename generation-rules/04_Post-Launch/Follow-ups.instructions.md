# Generation Instructions: Follow-ups.md

## Purpose

The Follow-ups document tracks all work identified after launch: bug fixes, enhancement requests, v2 candidates, and documentation updates. It's the backlog for post-launch improvements.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `02-customer-evidence/` | Find post-launch feedback, support tickets, enhancement requests | Yes |
| `04-references/` | Find results data, bug reports, issues list | Recommended |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (customer feedback, support tickets, bug reports, etc.). Extract follow-up items and enhancement requests regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `04_Post-Launch/Results.md` | Yes (for issues) |
| `01_Product/Brief.md` | Yes (for deferred items) |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Created:** Current date
**Status:** Active (change to Complete when all items resolved)
```

### Overview
- Brief description of what follow-up work was identified
- How many items total across all categories

### Bug Fixes
- **Critical:** Table of bugs that need immediate attention
- **High Priority:** Important bugs to fix soon
- **Low Priority:** Nice-to-fix bugs
- Each row: Bug ID/name, description, status, owner, target date
- Pull from Results.md issues section and support tickets

### Enhancement Requests
- **From Customer Feedback:** Requests customers explicitly made
- **From Internal Review:** Things the team identified
- Each row: Request, customer(s), priority (P0/P1/P2), status
- Pull from post-launch feedback

### v2 Scope Candidates
- Items deferred from v1 that should be considered for v2
- Include: item, original reason for deferral, priority
- Pull from Brief.md out of scope section
- Add new items from customer feedback

### Documentation Updates Needed
- Checklist of docs that need updating
- Could include: help articles, enablement guides, release notes
- Pull from customer questions and feedback

### Training/Enablement Updates Needed
- Checklist of training materials that need updating
- Pull from CS/Support feedback

### Action Items
- Master table of all follow-up actions
- Include: action, owner, due date, status
- This is the working list the team tracks

### Generated From
- List all input files used

---

## Quality Checklist

Before saving, verify:
- [ ] All bugs from Results.md captured
- [ ] Enhancement requests have customer attribution
- [ ] v2 candidates pulled from original Brief out of scope
- [ ] Action items have owners assigned
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/04_Post-Launch/[project-name]-Follow-ups.md`

Example: `projects/lp-carousels-accordions/04_Post-Launch/lp-carousels-accordions-Follow-ups.md`
