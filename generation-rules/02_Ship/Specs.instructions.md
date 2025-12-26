# Generation Instructions: Specs.md

## Purpose

The Technical Specifications document provides engineering with everything needed to build the feature. It includes data models, technical requirements, accessibility specs, performance targets, and testing requirements.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `01-transcripts/` | Find design review transcript and any engineering discussions | Yes |
| `03-designs/` | Read all design files for component specifications | Yes |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (design review, kickoff, engineering discussion, etc.). Extract technical requirements, constraints, and specifications regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `01_Product/Brief.md` | Yes (for constraints) |
| `02_Ship/Design.md` | Yes (for specifications) |

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `PRODUCT.md` | Align with platform architecture patterns |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Engineer:** Get from design review transcript or Brief.md
**Status:** Set to "Ready for Development"
**Last Updated:** Use current date
```

### Overview
- 2-3 sentences describing what is being built from a technical perspective
- Reference the Design.md for visual/UX details

### Component Sections (repeat for each component)

#### Data Model
- Define TypeScript interfaces for the component
- Include all properties with types
- Add comments explaining non-obvious fields
- Pull property names from Design.md configuration options
- Example structure:
```typescript
interface ComponentName {
  id: string;
  type: 'component-type';
  variant: 'variant1' | 'variant2';
  config: { /* configuration options */ };
  items: ComponentItem[];
}
```

#### Constraints
- Table of limits (min/max items, character limits, file sizes)
- Pull from design review and kickoff discussions
- Common constraints: max slides, max sections, max content length

#### Technical Requirements
- Group by category (Animation, Image Handling, Touch, Keyboard, etc.)
- Be specific about implementation approach
- Include DO and DO NOT guidance
- Pull from design review engineering discussions

#### Accessibility (WCAG 2.1 AA)
- Required ARIA attributes
- Keyboard navigation requirements
- Screen reader behavior
- Include example HTML markup structure
- This is non-negotiable for YourCompany's enterprise customers

### Builder Integration
- How component registers with the builder
- Element palette configuration
- Properties panel implementation notes

### Email Fallback
- Technical implementation of fallback
- Include pseudo-code or function signatures
- Coordination needed with email team

### Performance Requirements
- Table of performance targets
- Include: FCP, LCP, TTI, bundle size
- Optimization strategies

### Testing Requirements
- **Unit Tests:** What to test at component level
- **Accessibility Tests:** axe-core, screen reader testing
- **Integration Tests:** Builder integration, email sync
- **Manual Testing:** Touch devices, edge cases

### Dependencies
- Table of dependencies on other teams/systems
- Include purpose and status (Existing, Needed, Blocked)

### Timeline Estimate
- Engineering phases with duration estimates
- Pull from design review if discussed
- Include total estimate

### Open Questions
- List any unresolved technical questions
- Mark resolved questions with strikethrough and answer
- Keep this updated as questions are resolved

### Generated From
- List all input files used

---

## Quality Checklist

Before saving, verify:
- [ ] Data models defined for all components
- [ ] Accessibility requirements fully specified
- [ ] Performance targets included
- [ ] Testing requirements cover all areas
- [ ] Technical requirements are specific (not vague)
- [ ] Timeline estimate provided
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/02_Ship/[project-name]-Specs.md`

Example: `projects/lp-carousels-accordions/02_Ship/lp-carousels-accordions-Specs.md`
