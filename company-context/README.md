# Company Context Files

This folder contains your company-specific strategic context that Claude uses when generating product documentation.

## Purpose

When Claude generates briefs and other documents, it references these files to:
- Align features with company strategy
- Include relevant competitive context
- Match product decisions to company priorities
- Connect work to user personas

## Files to Create

Create these four files with your own company information:

### 1. COMPANY.md
**Contains:** Company strategy, metrics, priorities, goals

**Example sections:**
- Company background and mission
- Current strategic priorities
- Key performance indicators
- Market position
- Product philosophy

### 2. COMPETITIVE.md
**Contains:** Competitor analysis and market positioning

**Example sections:**
- Market overview
- Competitive matrix (key competitors)
- Detailed competitor analysis
- Your differentiation
- Win/loss patterns

### 3. PRODUCT.md
**Contains:** Your product features and value proposition

**Example sections:**
- Product overview
- Core features
- Key differentiators
- Target customers
- Product philosophy

### 4. PERSONAS.md
**Contains:** User personas for your product

**Example sections:**
- Primary user personas (3-5 personas)
- Goals and motivations
- Pain points
- How they use your product
- What they care about

## How to Use These Files

1. **Create your own versions** - Don't leave these blank. Claude relies on this context.
2. **Keep them updated** - Review quarterly or when strategy changes.
3. **Be specific** - Vague context produces vague documentation.
4. **Focus on what matters** - Include information that's actually useful for product decisions.

## Template Examples

You can find example templates for each file type in this repository's examples folder, or create your own structure that fits your company's needs.

## Privacy Note

These files contain your company's strategic information. If you plan to share your workspace:
- Keep company-context/ in .gitignore
- Or create sanitized versions for sharing
- Never commit proprietary data to public repositories
