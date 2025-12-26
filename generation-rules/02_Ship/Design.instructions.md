# Generation Instructions: Design.md

## Purpose

The Design document captures all design decisions, component specifications, and UX details. It's the reference for engineering to build from and for stakeholders to understand how the feature will look and behave.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `01-transcripts/` | Find the design review transcript (may be named anything) | Yes |
| `03-designs/` | Read all files - design specs, Figma links, design documentation | Yes |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (design review transcript, kickoff transcript, design spec, etc.). Extract design decisions, component specs, and UX details regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `01_Product/Brief.md` | Yes (for scope reference) |

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `PRODUCT.md` | Ensure design aligns with product philosophy |
| `PERSONAS.md` | Reference user needs when explaining design decisions |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Designer:** Get from design review transcript or Brief.md
**Status:** Set to "Design Complete, Ready for Engineering"
**Last Updated:** Use date of design review
```

### Design Files
- Include Figma link from `03-designs/` input
- Link should be clickable

### Component Overview
- List each component being designed
- For each component:
  - Brief description of purpose
  - Table of variants with use cases and content structure
- Pull from design files and design review transcript

### Component Design Details (repeat for each component)
- **Visual Design:** Describe layout per breakpoint (Desktop, Tablet, Mobile)
- **States:** Table of all states (Default, Hover, Active, Disabled, Loading, etc.)
- **Interaction/Navigation:** How users interact (clicks, swipes, keyboard)
- **Animation:** Timing and easing for any motion (e.g., "300ms ease-out")
- **Behavior Options:** Configurable settings (e.g., loop on/off, single vs multi-expand)

Pull all details from:
- Design review transcript (look for discussions of behavior)
- Figma design documentation
- Key decisions made in the review

### Builder Experience
- How do users add and configure this component in the YourCompany builder?
- **Adding Components:** Steps to add from element panel
- **Empty States:** What shows when component has no content
- **Configuration:** Properties panel options with defaults

### Brand Integration
- How components inherit from brand book
- Colors, typography, spacing rules
- This is critical for YourCompany's governed creation approach

### Email Fallback
- How each component degrades when synced to email
- Email clients can't handle interactivity - what static version shows?
- Common patterns: carousel → first slide, accordion → all expanded

### Design Decisions
- Table of key decisions made during design review
- Include decision and rationale
- Pull from "Key Decisions" section of design review transcript

### Edge Cases
- Table of edge cases and how design handles them
- Pull from design review discussion
- Common edge cases: empty content, very long content, single item, max items

### Generated From
- List all input files used

---

## Quality Checklist

Before saving, verify:
- [ ] All component variants documented
- [ ] All states covered (including error/empty states)
- [ ] Responsive behavior specified for all breakpoints
- [ ] Animation timing specified where applicable
- [ ] Email fallback behavior documented
- [ ] Edge cases addressed
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/02_Ship/[project-name]-Design.md`

Example: `projects/lp-carousels-accordions/02_Ship/lp-carousels-accordions-Design.md`
