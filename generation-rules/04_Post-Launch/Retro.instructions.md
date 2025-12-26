# Generation Instructions: Retro.md

## Purpose

The Retrospective captures what the team learned from the project. It documents what went well, what didn't, and process improvements for future projects. It's a learning document, not a blame document.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `01-transcripts/` | Find the retrospective meeting transcript | Yes |

**Instructions:** Read every file in this folder. Analyze each to determine what type of content it contains (retro transcript, etc.). The retro transcript may have any filename - look for content discussing what went well, what didn't, and process improvements.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `01_Product/Brief.md` | Yes (for timeline comparison) |
| `04_Post-Launch/Results.md` | Yes (for outcome) |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Retro Date:** Date of retrospective meeting
**Facilitator:** Who ran the retro
**Attendees:** Who participated
```

### Project Summary
- **Duration:** Start to end date, total weeks
- **Scope:** Brief summary of what was built
- **Outcome:** Shipped / Partially shipped / Delayed
- Pull dates from Brief.md timeline

### Timeline Review
- Table comparing planned vs actual dates
- Include: Kickoff, Design complete, Engineering start, Engineering complete, Launch
- Calculate delta (+ or - days)
- Pull planned dates from Brief.md, actuals from retro discussion

### What Went Well
- Group by category (Collaboration, Process, Technical, etc.)
- 2-4 items per category
- Pull directly from retro transcript
- These are things to KEEP doing

### What Didn't Go Well
- Group by category
- 2-4 items per category
- Pull directly from retro transcript
- Be honest but constructive
- Focus on process, not people

### What We Learned
- 3-5 key learnings from the project
- Each learning: title + description
- These should be actionable insights
- Pull from retro discussion

### Process Improvements
- **Keep Doing:** Practices that worked well
- **Start Doing:** New practices to adopt
- **Stop Doing:** Practices to abandon
- Pull from retro discussion
- These inform how we run the next project

### Shoutouts
- Team members who went above and beyond
- Specific recognition for contributions
- Pull from retro discussion
- Important for team morale

### Action Items for Next Project
- Table of specific actions to implement
- Include: action, owner, priority
- These are the concrete changes we'll make
- Pull from "Start Doing" and learnings

### Final Thoughts
- 1-2 sentences reflecting on the project overall
- End on a constructive note

### Generated From
- List all input files used

---

## Facilitation Notes

If generating this from a retro transcript, look for:
- "What went well" or "wins" discussion
- "What could be better" or "challenges" discussion
- "Action items" or "next time" discussion
- Specific praise for team members

---

## Quality Checklist

Before saving, verify:
- [ ] Timeline comparison is accurate
- [ ] Both positives and negatives captured fairly
- [ ] Learnings are actionable, not vague
- [ ] Process improvements are specific
- [ ] Shoutouts included (if mentioned in retro)
- [ ] Action items have owners
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/04_Post-Launch/[project-name]-Retro.md`

Example: `projects/lp-carousels-accordions/04_Post-Launch/lp-carousels-accordions-Retro.md`
