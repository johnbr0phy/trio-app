# Generation Instructions: Brief.md

## Purpose

The Brief is the single-page summary of what we're building and why. It's the source of truth for the project that anyone can read to understand scope, goals, and constraints.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `01-transcripts/` | Find the kickoff meeting transcript (may be named anything) | Yes |
| `02-customer-evidence/` | Read all files - customer calls, tickets, surveys, etc. | Yes (at least 1 file) |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (kickoff transcript, customer call, support tickets, etc.). Use your judgment to extract relevant information regardless of how files are named.

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `PERSONAS.md` | Match "Who's affected" to user personas |
| `COMPANY.md` | Align success metrics with strategic pillars |
| `COMPETITIVE.md` | Reference competitors if relevant to scope decisions |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**PM:** Get from kickoff transcript attendees
**Designer:** Get from kickoff transcript attendees
**Engineer:** Get from kickoff transcript attendees
**Status:** Set to "Discovery Complete" when generating
```

### Problem Statement
- Pull directly from kickoff transcript - look for "what's broken" or "problem" discussion
- Keep to 2-3 sentences max
- Include WHO is affected and WHAT is broken
- Add business impact bullets from customer evidence (support tickets, lost deals, workarounds)

### Solution
- Summarize from kickoff transcript scope discussion
- List components/features being built
- For each component: purpose, variants (if any), key behaviors
- Keep high-level - details go in Design.md

### Scope
- **In Scope:** Pull from kickoff "what we're building" discussion
- **Out of Scope:** Pull from kickoff "what we're NOT building" discussion
- Be specific - vague scope causes problems later

### Success Metrics
- Pull from kickoff transcript "success" or "how will we know" discussion
- Each metric needs: metric name, target number, how it's measured
- Align with strategic pillars from COMPANY.md where possible

### Constraints
- Pull from kickoff transcript - look for "concerns", "constraints", "must have"
- Common categories: Performance, Accessibility, Security, Compliance, Dependencies

### Timeline
- Pull dates from kickoff transcript
- Include: Kickoff, Design complete, Engineering start, Engineering complete, QA & Launch
- If dates aren't mentioned, leave as TBD

### Key Decisions
- Pull from kickoff transcript "Key Decisions" section if present
- Or extract decisions made during discussion
- Format: Decision + brief rationale

### Risks
- Synthesize from kickoff discussion
- Include likelihood (Low/Med/High), impact (Low/Med/High), and mitigation
- Common risks: scope creep, dependencies, technical complexity, timeline

### Customer Evidence Summary
- Summarize from `02-customer-evidence/` files
- Include: number of tickets/requests, customers affected, 1-2 key quotes or insights
- This validates the problem is real

### Competitive Context

**BEFORE FILLING THIS SECTION:**

1. Read `company-context/COMPETITIVE.md` for general competitive positioning
2. **Offer to do web research** - Ask the user:
   > "Would you like me to research how competitors (competitors) handle [this specific feature]? I can search their websites, documentation, and recent announcements to get current competitive intel."

3. If user says yes, research:
   - Competitor websites and feature pages
   - Competitor documentation/help centers
   - Recent blog posts or announcements
   - G2/Capterra reviews mentioning this feature area
   - Search queries like "[competitor] + [feature name]"

4. **Save research to file:**
   - Save full research to `inputs/04-references/competitive-research-[feature].md`
   - Include: sources, quotes, screenshots descriptions, links
   - This preserves the research for future reference

5. Summarize research into the section below

**Section Content:**
- **How Competitors Handle This:**
  - Table comparing how competitors solve this problem
  - Include: Knak, Stripo, Native ESP Builders (most relevant)
  - Focus on THIS feature area, not general competitive positioning
  - Include specifics from research (not just COMPETITIVE.md)
- **Our Differentiation:**
  - How will our approach be better?
  - Align with strategic pillars (Speed to Value, Quality & Compliance, etc.)
  - Be specific - not just "we're better"
- **Competitive Risks:**
  - Could a competitor ship this first?
  - Will customers compare to native ESP functionality?
  - Any positioning risks?

### Generated From
- List all input files used
- Format: `inputs/01-transcripts/kickoff-2024-12-15.md`, etc.

---

## Quality Checklist

Before saving, verify:
- [ ] Problem statement is clear and specific
- [ ] Scope has both IN and OUT sections
- [ ] Success metrics have measurable targets
- [ ] Competitive context references COMPETITIVE.md and is feature-specific
- [ ] Our differentiation aligns with strategic pillars
- [ ] All sections filled (or marked N/A if truly not applicable)
- [ ] No placeholder text like {{brackets}} remains
- [ ] Trio names are correct

---

## Output Location

Save to: `projects/[project-name]/01_Product/[project-name]-Brief.md`

Example: `projects/lp-carousels-accordions/01_Product/lp-carousels-accordions-Brief.md`
