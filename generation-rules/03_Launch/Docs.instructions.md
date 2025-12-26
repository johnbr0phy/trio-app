# Generation Instructions: Docs.md

## Purpose

Documentation is the user-facing help content. It explains how to use the feature in detail, including all options, best practices, and troubleshooting. This may be adapted for the help center or knowledge base.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `04-references/` | Find launch details, feature specs | Recommended |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains. Extract documentation-relevant information regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `02_Ship/Design.md` | Yes |
| `02_Ship/Specs.md` | Yes |
| `01_Product/Brief.md` | For context |

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `PRODUCT.md` | Consistent terminology |

---

## Section-by-Section Instructions

### Header Block
```
**Last Updated:** Current date
**Status:** Draft (change to Published when live)
```

### Overview
- 2-3 sentences explaining what the feature is
- Focus on what users can DO with it
- Don't assume prior knowledge

### Getting Started
- **Prerequisites:** What users need before starting
- **Adding the component:** Numbered steps from zero to working feature
- Keep steps simple and atomic
- Include screenshots or describe what user should see

### Component Sections (repeat for each component)

#### What is [Component]?
- Plain language description
- When to use this component
- Example use cases

#### Variants
- For each variant:
  - Description and best use case
  - Content fields table (field name, required?, description)
- Pull from Design.md component overview

#### Configuration Options
- Table of all settings
- Include: option name, description, default value
- Explain what each option does in plain language

#### Best Practices
- 3-5 tips for getting the best results
- Pull from design decisions and edge cases
- Help users avoid common mistakes

### Responsive Behavior
- How feature works on Desktop, Tablet, Mobile
- Any differences users should know about
- Pull from Design.md responsive sections

### Accessibility
- What accessibility features are built in
- Keep non-technical but reassuring
- Important for enterprise customers in regulated industries

### Email Sync
- What happens when landing page syncs to email
- Set expectations for static fallback behavior
- Pull from Design.md email fallback section

### Troubleshooting
- Common issues and solutions
- Format: Symptom → Solution
- Pull from anticipated issues based on edge cases

### FAQs
- Frequently asked questions
- Pull from enablement session if available
- Include questions users are likely to search for

### Generated From
- List all input files used

---

## Writing Guidelines

**Tone:**
- Helpful and patient
- Assume the reader is new to the feature
- Never condescending

**Structure:**
- Use headers liberally (scannable)
- Use numbered lists for steps
- Use bullet lists for options/features
- Use tables for reference information

**Language:**
- "Click" not "Click on"
- "Select" not "Choose"
- Use consistent terminology throughout

---

## Quality Checklist

Before saving, verify:
- [ ] Getting Started section works for complete beginners
- [ ] All configuration options documented
- [ ] Best practices included for each component
- [ ] Troubleshooting covers likely issues
- [ ] Language is consistent throughout
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/03_Launch/[project-name]-Docs.md`

Example: `projects/lp-carousels-accordions/03_Launch/lp-carousels-accordions-Docs.md`
