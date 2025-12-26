# Generation Instructions: Discovery-Synthesis.md

## Purpose

The Discovery Synthesis is a deep analysis of all customer evidence. It identifies patterns, extracts key quotes, and derives requirements from real customer needs. This document justifies WHY we're building what the Brief describes.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `02-customer-evidence/` | Read all files - identify customer calls, support tickets, survey responses, etc. | Yes (at least 1 file) |
| `01-transcripts/` | Find the kickoff meeting transcript for project context | Yes |

**Instructions:** Read every file in these folders. Analyze each to determine what type of evidence it contains (customer call transcript, support ticket summary, survey data, etc.). Categorize and extract insights regardless of how files are named.

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `COMPANY.md` | Strategic Alignment section - map to pillars |
| `PERSONAS.md` | Identify which personas are represented in evidence |
| `COMPETITIVE.md` | Note if customers mention competitors |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Synthesis Date:** Use current date (Month YYYY)
```

### Executive Summary
- 3-4 sentences only
- Summarize: What did we learn? What's the pattern? What should we do?
- Write this LAST after completing all other sections

### Evidence Sources
- List every input file used
- Include: source name, type (Customer call, Support tickets, Survey), date
- This establishes credibility of the synthesis

### Problem Themes
- Identify 2-4 major themes from the evidence
- For each theme:
  - Give it a clear, descriptive title
  - Write 1-2 sentences explaining the theme
  - Include 2-3 direct quotes with attribution
  - Identify the pattern (what does this evidence tell us?)
- Themes should be distinct, not overlapping
- Common themes: "Too slow", "Going outside platform", "Compliance risk", "Mobile experience"

### Use Case Analysis
- Group use cases by category (e.g., "Carousel requests", "Accordion requests")
- Include frequency counts where available
- List typical needs for each category
- Use tables for clarity

### Customer Segments
- Which customer segments appear in the evidence?
- Reference PERSONAS.md - are these Jennifer, David, or Rachel customers?
- Count how many customers per segment

### Key Quotes
- Pull the most powerful quotes from customer evidence
- Organize by topic: "On the Problem", "On Current Workarounds", "On Desired Solution"
- Include full attribution (name, company)
- These quotes will be used in stakeholder communications

### Requirements Derived from Evidence
- Translate customer needs into requirements
- **Must Have (P0):** Mentioned by multiple customers, blocking issue
- **Should Have (P1):** Mentioned by some customers, important but not blocking
- **Won't Have (v1):** Explicitly deprioritized, with reason why
- Every requirement should trace back to customer evidence

### Strategic Alignment
- Map the project to YourCompany's four strategic pillars:
  - Trust & Reliability
  - Speed to Value
  - Quality & Compliance
  - Enterprise Fit
- Be specific about how this project aligns (not just "it aligns")

### Recommendation
- Clear 2-3 sentence recommendation
- What should we build based on this evidence?
- Include 3 key points supporting the recommendation

### Generated From
- List all input files used

---

## Quality Checklist

Before saving, verify:
- [ ] At least 2 problem themes identified with evidence
- [ ] Direct quotes included with proper attribution
- [ ] Requirements clearly labeled as P0/P1/Won't Have
- [ ] Strategic alignment is specific, not generic
- [ ] Executive summary written last and reflects full synthesis
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/01_Product/[project-name]-Discovery-Synthesis.md`

Example: `projects/lp-carousels-accordions/01_Product/lp-carousels-accordions-Discovery-Synthesis.md`
