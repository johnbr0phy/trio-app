# Generation Instructions: Results.md

## Purpose

The Results document captures how the feature performed after launch. It compares actual metrics to targets, summarizes customer feedback, documents issues, and provides recommendations for next steps.

---

## Required Inputs

Read ALL files from these folders in `projects/[project-name]/inputs/`:

| Folder | What to Look For | Required |
|--------|------------------|----------|
| `04-references/` | Find results data, metrics, analytics | Yes |
| `02-customer-evidence/` | Find post-launch feedback, support tickets, customer reactions | Yes |

**Instructions:** Read every file in these folders. Analyze each to determine what type of content it contains (results data, customer feedback, support tickets, etc.). Extract performance metrics and customer reactions regardless of how files are named.

Also read from `projects/[project-name]/`:

| File | Required |
|------|----------|
| `01_Product/Brief.md` | Yes (for success metrics) |

---

## Company Context to Include

Read these files from `company-context/`:

| File | Use For |
|------|---------|
| `COMPANY.md` | Business impact alignment |

---

## Section-by-Section Instructions

### Header Block
```
**Project:** Use exact project folder name
**Launch Date:** When feature launched
**Report Date:** Date of this report
**Days Since Launch:** Calculate from launch to report date
```

### Executive Summary
- 2-3 sentences summarizing overall results
- Did we hit our goals? What's the headline?
- Write this LAST after completing all sections

### Success Metrics
- Table comparing targets to actuals
- Pull targets from Brief.md success metrics section
- Pull actuals from results data input
- Status: Met / Not Met / Partially Met
- Be honest - don't spin misses

### Adoption
- **Usage Overview:** Total users, active users, projects using feature
- **Adoption by Segment:** Break down by customer segment
- **Top Customers:** Highlight 3-5 customers with notable usage
- Pull from results data

### Customer Feedback
- **Positive Feedback:** Direct quotes from happy customers
- **Constructive Feedback:** Direct quotes with improvement suggestions
- **Sentiment Summary:** Count of positive/neutral/negative
- Pull from post-launch customer evidence

### Issues & Bugs
- **Critical Issues:** Table with issue, status, resolution
- **Minor Issues:** Table of lower priority issues
- **Support Ticket Volume:** Count and common themes
- Pull from support tickets and results data

### Business Impact
- **Revenue Impact:** Any impact on deals, expansion, retention
- **Retention Impact:** Did this reduce churn risk?
- **Competitive Wins:** Deals won because of this feature
- Pull from results data and CS feedback

### What's Working
- 3-5 things that are working well
- Evidence-based, not assumptions

### What Needs Improvement
- 3-5 things that need work
- Be specific and actionable

### Recommendations
- **Immediate (Next 2 Weeks):** Urgent fixes or improvements
- **Short-term (Next Quarter):** Important enhancements
- **Long-term (Future Releases):** Bigger items for roadmap
- Base recommendations on evidence, not wishes

### Generated From
- List all input files used

---

## Quality Checklist

Before saving, verify:
- [ ] Success metrics compared to original targets
- [ ] Customer feedback includes direct quotes
- [ ] Issues are documented honestly
- [ ] Recommendations are specific and prioritized
- [ ] Executive summary reflects the full picture
- [ ] No placeholder text like {{brackets}} remains

---

## Output Location

Save to: `projects/[project-name]/04_Post-Launch/[project-name]-Results.md`

Example: `projects/lp-carousels-accordions/04_Post-Launch/lp-carousels-accordions-Results.md`
