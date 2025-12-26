# Skill: New Project

Create a new project from the template.

## Trigger

Use when the user says:
- "create new project [name]"
- "start a new project called [name]"
- "set up project [name]"

## Instructions

1. **Validate the project name**
   - Convert to kebab-case (lowercase, hyphens instead of spaces)
   - Check that `projects/[name]` doesn't already exist

2. **Copy the template**
   ```bash
   cp -r projects/_project-template projects/[name]
   ```

3. **Clean up template files**
   - Remove any `.gitkeep` files (only needed in template)
   - Update any placeholder text in template files if present

4. **Confirm creation**
   - List the created folder structure
   - Remind user what inputs are needed for Phase 1 (Product):
     - Kickoff transcript → `inputs/01-transcripts/`
     - Customer evidence → `inputs/02-customer-evidence/`

## Output

```
Created project: [name]

projects/[name]/
├── inputs/
│   ├── 01-transcripts/      ← Add kickoff transcript here
│   ├── 02-customer-evidence/ ← Add customer calls, tickets, etc.
│   ├── 03-designs/
│   └── 04-references/
├── 01_Product/
├── 02_Ship/
├── 03_Launch/
├── 04_Post-Launch/
└── 99_Archive/

Next step: Add your inputs, then run "generate product for [name]"
```
