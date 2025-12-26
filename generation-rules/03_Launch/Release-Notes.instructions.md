# Generation Instructions: Release-Notes.md

## Purpose

Release Notes are customer-facing documentation announcing what shipped. They should be clear, benefit-focused, and help customers understand how to use the new feature.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `04-references/` | Find launch details, release info, what shipped | Yes |
| `01-transcripts/` | Find enablement session transcript if available | Recommended |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (launch details, enablement session, etc.). Extract release information regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `01_Product/Brief.md` | Yes |
| `02_Ship/Design.md` | Yes |
| `02_Ship/Specs.md` | For limitations |

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `PRODUCT.md` | Use consistent product terminology |

---

## Section-by-Section Instructions

### Header Block
```
**Release Date:** Actual release date
**Version:** Version number if applicable
```

### Summary
- 2-3 sentences max
- Focus on customer value, not technical details
- Answer: "What can I do now that I couldn't before?"

### What's New
- For each feature/component:
  - Brief description (1-2 sentences)
  - Key capabilities as bullet list
  - Variants available (if applicable)
- Write for customers, not internal teams
- Use benefit-focused language

### How to Use
- **Getting Started:** Simple numbered steps to start using the feature
- **Configuration Options:** Table of settings customers can change
- Pull from Design.md builder experience section
- Keep instructions simple and scannable

### Known Limitations
- Be honest about what's NOT included in v1
- Pull from Brief.md "Out of Scope" section
- Frame positively where possible ("Coming soon" vs "Not supported")

### Coming Soon
- Features planned for future releases
- Only include if confident they're coming
- Pull from Brief.md out of scope or design review discussions

### Need Help?
- Links to documentation
- Support channels
- Feedback channels

### Generated From
- List all input files used

---

## Writing Guidelines

**Tone:**
- Friendly and professional
- Customer-focused, not technical
- Confident but not overpromising

**Language:**
- Use "you" and "your" (customer perspective)
- Active voice ("You can now..." not "It is now possible to...")
- Simple words (not jargon)

**Examples:**
- Good: "Create engaging carousels to showcase multiple products"
- Bad: "Carousel component with configurable slide transitions implemented"

---

## Quality Checklist

Before saving, verify:
- [ ] Summary is benefit-focused, not feature-focused
- [ ] Instructions are simple enough for any user
- [ ] Known limitations are honest but not discouraging
- [ ] No internal jargon or technical terms unexplained
- [ ] Links are included (or placeholders for them)
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/03_Launch/[project-name]-Release-Notes.md`

Example: `projects/lp-carousels-accordions/03_Launch/lp-carousels-accordions-Release-Notes.md`
