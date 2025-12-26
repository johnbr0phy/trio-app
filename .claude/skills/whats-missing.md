# Skill: What's Missing

Check what inputs are missing for the current or next phase of a project.

## Trigger

Use when the user says:
- "what's missing for [name]"
- "check inputs for [name]"
- "what do I need for [name]"
- "is [name] ready"

## Instructions

### Step 1: Determine Current Phase

Check which phase documents exist:

```
01_Product/ has Brief + Discovery-Synthesis? → Phase 1 complete
02_Ship/ has Design + Specs?                 → Phase 2 complete
03_Launch/ has Release-Notes + Enablement?   → Phase 3 complete
04_Post-Launch/ has Results + Retro?         → Phase 4 complete
```

### Step 2: Check Required Inputs for Next Phase

**For Phase 1 (Product):**
| Required | Check |
|----------|-------|
| Kickoff transcript | `inputs/01-transcripts/` has files |
| Customer evidence | `inputs/02-customer-evidence/` has files |

**For Phase 2 (Ship):**
| Required | Check |
|----------|-------|
| Design files | `inputs/03-designs/` has files |
| Design review transcript | `inputs/01-transcripts/` has design review |

**For Phase 3 (Launch):**
| Required | Check |
|----------|-------|
| Launch details | `inputs/04-references/` has release info |
| Enablement transcript | `inputs/01-transcripts/` has enablement session |

**For Phase 4 (Post-Launch):**
| Required | Check |
|----------|-------|
| Results data | `inputs/04-references/` has metrics/analytics |
| Customer feedback | `inputs/02-customer-evidence/` has post-launch feedback |
| Retro transcript | `inputs/01-transcripts/` has retro notes |

### Step 3: Report Status

## Output Format

```
Project: [name]
Current phase: [X] (Phase Y complete)
Next phase: [Z]

Ready to generate:
- [Document type] ← has required inputs

Missing for next phase:
- [ ] [Input type] → add to [folder]
- [ ] [Input type] → add to [folder]

Tip: [Helpful suggestion based on what's missing]
```

## Example Output

```
Project: lp-carousels
Current phase: Product (Phase 1 complete)
Next phase: Ship

Ready to generate:
- None ← missing required inputs

Missing for Ship phase:
- [ ] Design files → add to inputs/03-designs/
- [ ] Design review transcript → add to inputs/01-transcripts/

Tip: Upload your Figma designs or screenshots to 03-designs/,
then add the design review meeting notes to 01-transcripts/.
```
