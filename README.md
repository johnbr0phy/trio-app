# Trio Workspace

**AI-assisted product documentation system for product trios (PM, Designer, Engineer)**

Transform your meeting transcripts and project artifacts into comprehensive, well-structured product documentation automatically using Claude Code.

---

## What is This?

Trio Workspace is a structured system that helps product teams document their work throughout the entire product development lifecycle - from discovery through post-launch - using AI-assisted generation.

Instead of spending hours writing documentation manually, you:
1. **Add your inputs** (meeting transcripts, customer feedback, designs) to a folder
2. **Run a command** (like `/generate-01-product project-name`)
3. **Get polished documentation** (briefs, specs, release notes, etc.) automatically generated

## Why Use This?

**The Problem:**
- Product documentation is scattered across tools (Slack, Docs, Jira, Notion)
- Inconsistent formatting and missing context
- Created reactively, not systematically
- Takes too much time to write and maintain

**The Solution:**
- **One central location** for all project documentation
- **Consistent templates** across all projects
- **AI synthesis** from your actual work artifacts
- **Save hours** on documentation while improving quality

## How It Works

```
You provide inputs          Claude generates docs          You review and refine
┌──────────────────┐       ┌──────────────────────┐       ┌────────────────────┐
│ • Transcripts    │  -->  │ • Product Briefs     │  -->  │ • Edit as needed   │
│ • Customer data  │       │ • Discovery Synthesis│       │ • Fill in gaps     │
│ • Design files   │       │ • Design docs        │       │ • Share with team  │
│ • Research notes │       │ • Technical specs    │       │                    │
│ • Launch data    │       │ • Release notes      │       │                    │
│                  │       │ • Retrospectives     │       │                    │
└──────────────────┘       └──────────────────────────┘       └────────────────────┘
```

## Features

- **4-Phase Structure**: Product → Ship → Launch → Post-Launch
- **Template-Driven**: Consistent format across all projects
- **AI-Powered**: Claude Code reads all inputs and synthesizes docs
- **Source Control**: Plain text markdown files, git-friendly
- **Flexible Inputs**: No strict naming - just put files in the right folder
- **Privacy-First**: Your data stays local, nothing sent to external services beyond Claude API

## Quick Start

### Prerequisites

1. [Claude Code](https://github.com/anthropics/claude-code) installed
2. [Obsidian](https://obsidian.md) (optional but recommended for viewing/editing)

### Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/trio-workspace.git
   cd trio-workspace
   ```

2. **Customize company context** (optional but recommended)
   - See `company-context/README.md` for instructions
   - Add your company strategy, competitors, personas

3. **Create your first project**
   ```bash
   claude
   /new-project my-first-project
   ```

4. **Add your inputs**
   - Put meeting transcript in `projects/my-first-project/inputs/01-transcripts/`
   - Put customer feedback in `projects/my-first-project/inputs/02-customer-evidence/`

5. **Generate documentation**
   ```bash
   /generate-01-product my-first-project
   ```

6. **Review the generated docs**
   - Open `projects/my-first-project/01_Product/`
   - Review Brief and Discovery Synthesis
   - Edit as needed

## Workflow

### Phase 1: Product (Discovery)
**Inputs:** Kickoff transcript, customer evidence
**Generates:** Product Brief, Discovery Synthesis
**Command:** `/generate-01-product [project-name]`

### Phase 2: Ship (Design + Specs)
**Inputs:** Design files, design review transcript, technical research
**Generates:** Design Document, Technical Specs
**Command:** `/generate-02-ship [project-name]`

### Phase 3: Launch
**Inputs:** Enablement transcript, launch details
**Generates:** Release Notes, Enablement Guide, User Documentation
**Command:** `/generate-03-launch [project-name]`

### Phase 4: Post-Launch
**Inputs:** Results data, post-launch feedback, retro transcript
**Generates:** Results Summary, Follow-ups, Retrospective
**Command:** `/generate-04-post-launch [project-name]`

## Project Structure

```
trio-workspace/
├── README.md                    ← You are here
├── CLAUDE.md                    ← Instructions for Claude Code
├── TRIO-USER-GUIDE.md          ← Complete user guide
│
├── company-context/             ← Your company-specific context
│   ├── README.md               ← How to set this up
│   ├── COMPANY.md              ← (Create this) Strategy, priorities
│   ├── COMPETITIVE.md          ← (Create this) Competitors
│   ├── PRODUCT.md              ← (Create this) Your product
│   └── PERSONAS.md             ← (Create this) User personas
│
├── generation-rules/            ← Templates and generation instructions
│   ├── 01_Product/
│   ├── 02_Ship/
│   ├── 03_Launch/
│   └── 04_Post-Launch/
│
└── projects/                    ← Your projects go here
    ├── _project-template/      ← Template for new projects
    │   ├── inputs/
    │   │   ├── CHECKLIST.md
    │   │   ├── 01-transcripts/
    │   │   ├── 02-customer-evidence/
    │   │   ├── 03-designs/
    │   │   └── 04-references/
    │   ├── 01_Product/
    │   ├── 02_Ship/
    │   ├── 03_Launch/
    │   ├── 04_Post-Launch/
    │   └── 99_Archive/
    │
    └── your-project-name/       ← Copy of template for each project
```

## Documentation

- **[TRIO-USER-GUIDE.md](TRIO-USER-GUIDE.md)** - Complete guide for day-to-day usage
- **[CLAUDE.md](CLAUDE.md)** - Instructions that Claude Code reads
- **company-context/README.md** - How to set up your company context

## Commands Reference

| Command | Description |
|---------|-------------|
| `/new-project [name]` | Create new project from template |
| `/generate-01-product [name]` | Generate Product Brief + Discovery Synthesis |
| `/generate-02-ship [name]` | Generate Design Doc + Technical Specs |
| `/generate-03-launch [name]` | Generate Release Notes + Enablement + Docs |
| `/generate-04-post-launch [name]` | Generate Results + Follow-ups + Retro |
| `/whats-missing [name]` | Check what inputs are missing for current phase |

Or use natural language:
- "create new project feature-x"
- "generate the product docs for feature-x"
- "what's missing for feature-x"

## Tips for Success

1. **Add inputs as you go** - Don't wait until the end of a phase
2. **Don't overthink file naming** - Claude figures out what each file contains
3. **Review generated docs** - Claude is good but not perfect; add details it can't know
4. **Regenerate freely** - If you add more inputs, just regenerate (Claude asks before overwriting)
5. **Customize templates** - The generation-rules/ folder contains templates you can modify

## Examples

The original version of this workspace was used at a SaaS company for over 6 months to document features including:
- Interactive landing page components (carousels, accordions)
- AI-powered content generation features
- Platform integrations

Generated documentation included:
- Product briefs that were shared with leadership as-is
- Technical specs that went directly to engineering
- Release notes that were published to customers
- Post-launch retros that informed the roadmap

## Privacy & Security

- All data stays local on your machine
- Claude Code uses the Anthropic API (see their [privacy policy](https://www.anthropic.com/legal/privacy))
- No data is sent to any other external services
- Company-specific context files should NOT be committed to public repos

## Contributing

Contributions are welcome! Areas for improvement:
- Additional document templates
- Integration with other tools (Jira, Linear, etc.)
- Support for other workflows beyond the 4-phase model
- Example company-context files

## License

MIT License - see LICENSE file for details

## Credits

Created to solve real product documentation challenges in a fast-moving SaaS environment. Generalized and open-sourced for the wider product community.

**Built with:**
- [Claude Code](https://github.com/anthropics/claude-code) by Anthropic
- [Obsidian](https://obsidian.md) for markdown editing (optional)

---

**Questions or feedback?** Open an issue or start a discussion!
