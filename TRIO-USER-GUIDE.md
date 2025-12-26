# Trio Workspace - Complete User Guide

**For Product Managers, Designers, and Engineers**

This guide explains how to use the Trio Workspace to streamline product development from discovery through post-launch. No prior experience with Claude Code or Obsidian required.

---

## Table of Contents

1. [What is This Workspace?](#what-is-this-workspace)
2. [What You Need to Know](#what-you-need-to-know)
3. [Getting Started](#getting-started)
4. [The Trio Workflow](#the-trio-workflow)
5. [Phase-by-Phase Guide](#phase-by-phase-guide)
6. [Day-to-Day Usage](#day-to-day-usage)
7. [Tips and Best Practices](#tips-and-best-practices)
8. [Troubleshooting](#troubleshooting)

---

## What is This Workspace?

The Trio Workspace is a collaborative system that helps Product Managers, Designers, and Engineers work together efficiently throughout the product development lifecycle.

### The Problem It Solves

Without this system, product development documentation is often:
- Scattered across multiple tools (Slack, Google Docs, Figma, Jira, Notion)
- Inconsistently formatted
- Missing key decisions or context
- Created reactively instead of systematically
- Hard to find when you need it

### The Solution

This workspace provides:
- **One central location** for all project documentation
- **Automated documentation generation** from your meeting notes and files
- **Consistent templates** that ensure nothing gets missed
- **AI assistance** that does the heavy lifting of synthesis and writing

---

## What You Need to Know

### About Claude Code

**Claude Code** is an AI assistant that runs in your terminal (command line) and helps with software development tasks. In this workspace, we're using Claude Code in a unique way: to **generate product documentation** automatically.

**What it does for you:**
- Reads all your meeting transcripts, customer feedback, and design files
- Synthesizes information across multiple sources
- Generates comprehensive, well-structured documents
- Follows consistent templates every time
- Saves you hours of manual documentation work

**What it's NOT:**
- Not a chatbot you need to ask questions (though you can)
- Not replacing your thinking - it's capturing and organizing it
- Not making product decisions for you - it's documenting decisions you've made

**How you'll interact with it:**
- Through simple commands like `/generate-01-product project-name`
- Or natural language like "generate the Brief for feature-xyz"
- It responds with clear confirmations and shows you what it created

### About Obsidian

**Obsidian** is a note-taking and knowledge management app. Think of it as a powerful text editor that helps you organize and link documents.

**Why we use it:**
- All files are plain text (markdown), so they're future-proof and portable
- You can see all your projects in a folder structure on the left
- It's fast and works offline
- You can open multiple documents side-by-side
- Great search functionality

**Basic Obsidian concepts:**
- **Vault**: The main folder containing all your notes (this workspace is a vault)
- **Markdown**: Simple text formatting (# for headers, - for bullets, etc.)
- **File explorer**: Left sidebar showing all your folders and files
- **Editor**: Main area where you edit documents

**You don't need to be an Obsidian expert** - you just need to:
1. Open files
2. Add your meeting notes or transcripts
3. View the documents Claude generates

---

## Getting Started

### First Time Setup

**Step 1: Access the workspace**
1. Navigate to your trio-workspace folder
2. Make sure you have write access

**Step 2: Install Obsidian (if needed)**
1. Go to https://obsidian.md
2. Download and install for your operating system
3. Open Obsidian
4. Click "Open folder as vault"
5. Navigate to your trio-workspace folder
6. Click "Open"

**Step 3: Familiarize yourself with the structure**

In Obsidian's left sidebar, you'll see:
```
trio-workspace/
├── company-context/           ← Company info (optional)
├── generation-rules/          ← Templates (read-only)
├── projects/                  ← YOUR WORK HAPPENS HERE
│   ├── example-feature-1/
│   ├── example-feature-2/
│   └── ...
└── CLAUDE.md, TRIO-USER-GUIDE.md, etc.
```

**Step 4: Understanding Your Role**

You'll primarily work in **one folder per project** under `projects/`.

Each project folder looks like this:
```
project-name/
├── inputs/                    ← YOU ADD FILES HERE
│   ├── CHECKLIST.md          ← Track what you've added
│   ├── 01-transcripts/       ← Meeting transcripts
│   ├── 02-customer-evidence/ ← Feedback, research
│   ├── 03-designs/           ← Design files, screenshots
│   └── 04-references/        ← Anything else
│
├── 01_Product/               ← CLAUDE GENERATES THESE
├── 02_Ship/
├── 03_Launch/
├── 04_Post-Launch/
└── 99_Archive/
```

**Your job:** Add files to `inputs/`
**Claude's job:** Generate polished docs in the numbered folders

---

## The Trio Workflow

Here's how a typical project flows through the system:

### Phase 1: Product (Discovery)
**Who leads:** PM
**What happens:** Discovery, customer research, defining the problem

**Your actions:**
1. After kickoff meeting, add transcript to `inputs/01-transcripts/`
2. Add any customer feedback to `inputs/02-customer-evidence/`
3. Update `inputs/CHECKLIST.md` to track what you've added
4. Tell Claude to generate: `/generate-01-product project-name`

**What Claude generates:**
- Product Brief
- Discovery Synthesis

### Phase 2: Ship (Design + Specs)
**Who leads:** Designer + Engineer
**What happens:** Design explorations, technical specs, implementation planning

**Your actions:**
1. Add design files/screenshots to `inputs/03-designs/`
2. Add design review transcript to `inputs/01-transcripts/`
3. Add any technical research to `inputs/04-references/`
4. Tell Claude to generate: `/generate-02-ship project-name`

**What Claude generates:**
- Design Document
- Technical Specs

### Phase 3: Launch
**Who leads:** PM + Designer
**What happens:** Preparing release notes, enablement, documentation

**Your actions:**
1. Add enablement session transcript to `inputs/01-transcripts/`
2. Add release details to `inputs/04-references/`
3. Tell Claude to generate: `/generate-03-launch project-name`

**What Claude generates:**
- Release Notes
- Enablement Guide
- User-facing Documentation

### Phase 4: Post-Launch
**Who leads:** PM
**What happens:** Analyzing results, gathering feedback, retrospective

**Your actions:**
1. Add results data to `inputs/04-references/`
2. Add post-launch customer feedback to `inputs/02-customer-evidence/`
3. Add retro transcript to `inputs/01-transcripts/`
4. Tell Claude to generate: `/generate-04-post-launch project-name`

**What Claude generates:**
- Results Summary
- Follow-up Action Items
- Retrospective Document

---

## Phase-by-Phase Guide

### Starting a New Project

**When to do this:** After a project gets greenlit but before kickoff

**How to do it:**

**Option 1: Using Claude Code (recommended)**
1. Open terminal
2. Navigate to workspace directory
3. Type: `/new-project project-name`
4. Claude creates the full folder structure for you

**Option 2: Manual (if Claude isn't available)**
1. In Obsidian, find `projects/_template/`
2. Right-click and copy the entire folder
3. Paste it in `projects/`
4. Rename it to your project name (use kebab-case: `my-project-name`)

**Naming convention:**
- Use lowercase
- Use hyphens, not spaces
- Be specific but concise
- Examples: `feature-carousels`, `ai-assistant`, `template-builder-v2`

---

### Phase 1: Generating Product Docs

**When:** After discovery kickoff and initial customer research

**Prerequisites:**
- Kickoff meeting has happened
- Some customer evidence exists (interviews, feedback, support tickets, etc.)

**Step-by-step:**

**1. Add your kickoff transcript**
- Get transcript from Otter.ai, Zoom, or Google Meet
- Copy the text
- Create a new file in `inputs/01-transcripts/`
- Name it something like: `kickoff-2024-12-18.md`
- Paste the transcript
- Add a header at the top with context:
  ```markdown
  # Project Kickoff - [Project Name]
  **Date:** December 18, 2024
  **Attendees:** [Names]
  **Purpose:** Discovery kickoff

  [paste transcript below]
  ```

**2. Add customer evidence**
- Create files in `inputs/02-customer-evidence/`
- Can include:
  - Customer interview transcripts
  - Support ticket summaries
  - User research findings
  - Sales feedback
  - Analytics insights
- Name files descriptively: `interview-customer-a.md`, `support-tickets-summary.md`

**3. Update the checklist**
- Open `inputs/CHECKLIST.md`
- Check off what you've added:
  ```markdown
  - [x] Kickoff transcript
  - [x] Customer interviews (3)
  - [ ] Design explorations (not yet)
  ```

**4. Generate the docs**

**Using Claude Code:**
1. Open terminal in the workspace folder
2. Type: `/generate-01-product project-name`
3. Or say: "generate 01_Product for project-name"
4. Claude will:
   - Read all files in your inputs folder
   - Offer to do competitive research (say yes or no)
   - Generate the Brief and Discovery Synthesis
   - Save them in `01_Product/`

**5. Review what Claude generated**
- Open `01_Product/project-name-Brief.md`
- Open `01_Product/project-name-Discovery-Synthesis.md`
- Check that:
  - All key insights from your transcripts are captured
  - Customer evidence is properly cited
  - Strategic context makes sense
  - Nothing is missing or misrepresented

**6. Make edits if needed**
- You can edit the generated files directly
- Claude won't overwrite your changes
- If you add more inputs later, you can regenerate (Claude will ask before overwriting)

---

### Phase 2: Generating Ship Docs

**When:** After design explorations and when ready to spec engineering work

**Prerequisites:**
- Phase 1 docs exist (Brief and Discovery Synthesis)
- Design explorations are done
- Design review has happened

**Step-by-step:**

**1. Add design files**
- Export designs as images (PNG or JPG)
- Save them in `inputs/03-designs/`
- Name them clearly: `carousel-concept-v1.png`, `mobile-flow.png`
- OR: Add links to Figma in a markdown file

**2. Add design review transcript**
- Get transcript from your design review meeting
- Save it in `inputs/01-transcripts/`
- Name it: `design-review-2024-12-20.md`
- Include context at the top (date, attendees, purpose)

**3. Add technical references (if any)**
- If you researched technical approaches, add notes to `inputs/04-references/`
- Examples: `library-research.md`, `api-considerations.md`

**4. Generate the docs**
1. Open terminal in workspace
2. Type: `/generate-02-ship project-name`
3. Claude will:
   - Read all files (including Phase 1 inputs)
   - Generate Design doc and Specs doc
   - Save them in `02_Ship/`

**5. Review and refine**
- Check `02_Ship/project-name-Design.md` for design rationale
- Check `02_Ship/project-name-Specs.md` for technical accuracy
- Engineers: verify the specs match your implementation plan
- Edit directly as needed

---

### Phase 3: Generating Launch Docs

**When:** Feature is built and ready to launch

**Prerequisites:**
- Feature is complete (or nearly complete)
- Enablement session has happened
- You know the launch details (date, rollout plan, etc.)

**Step-by-step:**

**1. Add enablement transcript**
- Get transcript from your enablement session with CS/Sales
- Save in `inputs/01-transcripts/`
- Name it: `enablement-2024-01-10.md`

**2. Add launch details**
- Create a file in `inputs/04-references/`
- Name it: `launch-details.md`
- Include:
  ```markdown
  # Launch Details

  **Launch Date:** January 15, 2025
  **Rollout:** All customers
  **Feature Flag:** feature_enabled
  **Release Version:** 2.5.0

  ## What's Shipping
  - Feature A
  - Feature B

  ## What's NOT Shipping
  - Feature C (deferred to next release)
  ```

**3. Generate the docs**
1. Type: `/generate-03-launch project-name`
2. Claude generates:
   - Release Notes (customer-facing)
   - Enablement Guide (for CS/Sales)
   - Documentation (help center content)

**4. Distribute**
- Share Release Notes with marketing/comms
- Share Enablement Guide with CS/Sales teams
- Share Docs with whoever maintains help center

---

### Phase 4: Generating Post-Launch Docs

**When:** 2-4 weeks after launch, after collecting results

**Prerequisites:**
- Feature has been live for a while
- You have usage data
- Retrospective meeting has happened

**Step-by-step:**

**1. Add results data**
- Create a file in `inputs/04-references/`
- Name it: `launch-results.md`
- Include metrics:
  ```markdown
  # Launch Results - [Feature Name]

  ## Usage Metrics (First 30 Days)
  - Customers using feature: 245 (52% of target)
  - Total uses: 1,200+
  - Average per customer: 4.9

  ## Support Impact
  - Tickets: 12 (lower than expected)
  - Common issues: Bug X (fixed in hotfix)

  ## Customer Feedback
  - 8/10 average satisfaction score
  - Top request: Enhancement Y (logged as follow-up)
  ```

**2. Add post-launch customer feedback**
- Add any new feedback to `inputs/02-customer-evidence/`
- Examples: `post-launch-feedback-customer-a.md`, `feature-request-summary.md`

**3. Add retro transcript**
- After your retrospective meeting, add transcript to `inputs/01-transcripts/`
- Name it: `retro-2025-02-15.md`

**4. Generate the docs**
1. Type: `/generate-04-post-launch project-name`
2. Claude generates:
   - Results Summary
   - Follow-up Action Items
   - Retrospective Document

**5. Action the follow-ups**
- Review the Follow-ups document
- Create tickets for next iteration
- Share Retro with leadership

---

## Day-to-Day Usage

### Adding Meeting Notes

**After any project meeting:**

1. Get the transcript (Otter, Zoom, Meet, or manual notes)
2. Open Obsidian
3. Navigate to your project's `inputs/01-transcripts/`
4. Create a new note (Cmd+N or Ctrl+N)
5. Add a descriptive header:
   ```markdown
   # [Meeting Type] - [Project Name]
   **Date:** [Date]
   **Attendees:** [Names]
   **Purpose:** [Why did you meet?]

   [Paste transcript or notes]
   ```
6. Save with a clear name: `sync-2024-12-19.md`

**Don't worry about:**
- Perfect formatting
- Cleaning up "um"s and "uh"s
- Speaker labels (Claude can handle messy transcripts)

**Do include:**
- Date and attendees (helps Claude understand context)
- What type of meeting it was
- Any links or references mentioned

### Adding Customer Feedback

**When you hear something from a customer:**

1. Open `inputs/02-customer-evidence/`
2. Create a new note
3. Structure it like this:
   ```markdown
   # Customer Feedback - [Customer Name]
   **Date:** December 19, 2024
   **Source:** Sales call / Support ticket / User interview
   **Customer:** Example Corp
   **Contact:** Jane Smith (jane@example.com)

   ## Context
   Enterprise customer, 500+ users

   ## Feedback
   "We really need [feature]. Right now we're
   working around it by [workaround]..."

   ## Priority
   High - blocking their Q1 needs
   ```

4. Save it: `feedback-customer-name-feature.md`

### Checking What's Missing

**Before generating docs, check if you have everything:**

**Option 1: Look at the checklist**
- Open `inputs/CHECKLIST.md` in your project
- See what's checked off and what's missing

**Option 2: Ask Claude**
1. Open terminal
2. Type: `/whats-missing project-name`
3. Claude will tell you what inputs are missing for the current phase

Example response:
```
For Phase 1 (Product), you're missing:
- Customer evidence (no files in 02-customer-evidence/)

You have:
- Kickoff transcript (kickoff-2024-12-18.md)
```

### Viewing Generated Docs

**In Obsidian:**
1. Navigate to the numbered folder (01_Product, 02_Ship, etc.)
2. Click on any document to open it
3. Use "Reading mode" (book icon) for clean viewing
4. Use "Editing mode" (pencil icon) to make changes

**Sharing with others:**
- Export as PDF: Right-click document → Export to PDF
- Copy to Google Docs: Select all (Cmd+A / Ctrl+A) → Copy → Paste into Docs
- Share link if workspace is in shared location

---

## Tips and Best Practices

### For Product Managers

**Discovery tips:**
- Add customer feedback as you get it, don't wait
- Include both what customers say AND the underlying need
- Note customer segment/size (helps with prioritization context)
- Link to related tickets/research in your notes

**Brief generation:**
- Let Claude do competitive research - it's thorough
- Review the Discovery Synthesis for missing insights
- The Brief should be shareable with leadership as-is

**Launch tips:**
- Add launch details early, even if tentative
- Update CHECKLIST.md to track enablement completion
- Post-launch: add results data as soon as you have it

### For Designers

**Design documentation tips:**
- Export key screens/flows as images, not just design tool links
- Add design decision notes in a markdown file (why you chose this approach)
- Include mobile and desktop if both are important
- Screenshot error states, empty states, edge cases

**Design review:**
- Capture ALL feedback in the transcript, even if you disagree
- Note what decisions were made vs. still open
- Include any technical constraints discussed

### For Engineers

**Specs generation:**
- Add technical research to inputs/04-references/ BEFORE generating
- If you've prototyped, add notes about what you learned
- Review generated specs carefully - add implementation details Claude can't know
- Link to relevant code/APIs/libraries in your notes

**Post-implementation:**
- Add any "gotchas" or learnings to a file in 04-references/
- This helps with retros and future similar projects

### General Best Practices

**File naming:**
- Use descriptive names: `customer-interview-example-corp.md` not `notes-1.md`
- Include dates when relevant: `sync-2024-12-19.md`
- Use lowercase and hyphens

**Transcript quality:**
- Claude handles messy transcripts, but cleaner is better
- If you're taking manual notes, use bullet points
- Include action items and decisions prominently

**Update as you go:**
- Don't wait until phase end to add everything
- Add files as soon as you have them
- Regenerate docs if you add substantial new info

**Review generated docs:**
- Claude is very good, but not perfect
- Check for accuracy, especially on technical details
- Fill in gaps Claude couldn't infer

**Don't overthink inputs:**
- Just put files in the right folder
- Claude will figure out what they contain
- Better to have too much context than too little

---

## Troubleshooting

### "Claude Code isn't working"

**Solution:**
1. Check that terminal is in the right directory: `pwd` (should show workspace path)
2. Try typing `claude` to see if it responds
3. If command not found, Claude Code may not be installed
4. Try the natural language version instead of slash commands

### "Claude generated incorrect information"

**Solution:**
1. Remember: Claude reads what you give it - check your input files
2. Edit the generated document directly to fix it
3. If regenerating, Claude will ask before overwriting your edits
4. Add more context to inputs if Claude keeps getting something wrong

### "I added files but Claude says inputs are missing"

**Solution:**
1. Check you put files in the right subfolder of `inputs/`
2. Make sure files are actually markdown (.md) or text format
3. PDFs and images work for some content (designs) but transcripts should be text
4. Check that files actually have content (not empty)

### "The generated doc is missing information I provided"

**Solution:**
1. Check that your input file is in the correct folder
2. Make sure the information is clearly written (not buried deep or unclear)
3. Try regenerating - Claude might catch it the second time
4. If it's still missing, just add it manually to the generated doc

### "I don't know which phase I'm in"

**Solution:**
1. Look at what folders have content in them
2. Ask Claude: `/whats-missing project-name`
3. Check with your PM about project status
4. Phases are flexible - you can generate later phase docs if you have the inputs

### "Can I reorganize the folder structure?"

**Short answer:** No.

**Long answer:** The structure is designed to work with Claude's generation rules. If you change it, Claude won't know where to find inputs or where to put outputs. Stick with the template structure.

### "Can multiple people work on this at the same time?"

**Yes, but with caveats:**
- If using a shared folder (Google Drive, Dropbox, etc.), changes sync
- BUT: Obsidian doesn't handle real-time collaboration well
- If two people edit the same file simultaneously, last save wins
- Best practice: Coordinate about who's adding what
- For generated docs, one person should review/edit at a time

---

## Quick Reference

### Slash Commands

| Command | What it does |
|---------|--------------|
| `/new-project [name]` | Create new project folder structure |
| `/generate-01-product [name]` | Generate Brief + Discovery Synthesis |
| `/generate-02-ship [name]` | Generate Design + Specs |
| `/generate-03-launch [name]` | Generate Release Notes + Enablement + Docs |
| `/generate-04-post-launch [name]` | Generate Results + Follow-ups + Retro |
| `/whats-missing [name]` | Show what inputs are missing for current phase |

### Folder Structure Quick Reference

```
project-name/
├── inputs/                           ← YOUR FILES GO HERE
│   ├── CHECKLIST.md                 ← Track your progress
│   ├── 01-transcripts/              ← All meeting transcripts
│   ├── 02-customer-evidence/        ← Feedback, research, interviews
│   ├── 03-designs/                  ← Design files, screenshots
│   └── 04-references/               ← Tech research, launch details, data
│
├── 01_Product/                       ← PHASE 1: CLAUDE GENERATES
│   ├── [project]-Brief.md
│   └── [project]-Discovery-Synthesis.md
│
├── 02_Ship/                          ← PHASE 2: CLAUDE GENERATES
│   ├── [project]-Design.md
│   └── [project]-Specs.md
│
├── 03_Launch/                        ← PHASE 3: CLAUDE GENERATES
│   ├── [project]-Release-Notes.md
│   ├── [project]-Enablement.md
│   └── [project]-Docs.md
│
├── 04_Post-Launch/                   ← PHASE 4: CLAUDE GENERATES
│   ├── [project]-Results.md
│   ├── [project]-Follow-ups.md
│   └── [project]-Retro.md
│
└── 99_Archive/                       ← OLD VERSIONS (optional)
```

### What Goes Where

| I have... | Put it in... |
|-----------|--------------|
| Meeting transcript | `inputs/01-transcripts/` |
| Customer interview | `inputs/02-customer-evidence/` |
| Support ticket summary | `inputs/02-customer-evidence/` |
| User research findings | `inputs/02-customer-evidence/` |
| Design mockups | `inputs/03-designs/` |
| Design tool links | `inputs/03-designs/` (in a .md file) |
| Technical research | `inputs/04-references/` |
| Competitive analysis | `inputs/04-references/` |
| Launch details | `inputs/04-references/` |
| Usage metrics | `inputs/04-references/` |
| Anything else | `inputs/04-references/` |

### Phase Checklist

**Phase 1 - Product:**
- [ ] Kickoff transcript added
- [ ] Customer evidence added (at least 2-3 sources)
- [ ] CHECKLIST.md updated
- [ ] Run `/generate-01-product`
- [ ] Review Brief and Discovery Synthesis

**Phase 2 - Ship:**
- [ ] Design files added
- [ ] Design review transcript added
- [ ] Technical research added (if any)
- [ ] Run `/generate-02-ship`
- [ ] Review Design and Specs docs

**Phase 3 - Launch:**
- [ ] Enablement transcript added
- [ ] Launch details documented
- [ ] Run `/generate-03-launch`
- [ ] Review Release Notes, Enablement, and Docs
- [ ] Share with relevant teams

**Phase 4 - Post-Launch:**
- [ ] Results data added
- [ ] Post-launch feedback added
- [ ] Retro transcript added
- [ ] Run `/generate-04-post-launch`
- [ ] Review and action Follow-ups

---

## Appendix: Why This System Exists

### The Documentation Problem

Most product teams struggle with documentation because:
1. **No time** - Sprinting to ship, docs are last priority
2. **Context scattered** - Info spread across tools
3. **No template** - Everyone documents differently
4. **Forgetting** - Key decisions lost in chat history
5. **Handoffs** - Hard to bring people up to speed

### The Trio Philosophy

Product development works best when PM, Designer, and Engineer work closely together throughout:
- **Discovery:** Understanding the problem together
- **Design:** Co-creating solutions
- **Build:** Staying aligned during implementation
- **Launch:** Coordinating rollout
- **Learn:** Reflecting on results together

This workspace supports that collaboration by:
- Making it easy to share context (everyone sees the same inputs)
- Creating consistent artifacts at each phase
- Reducing documentation burden (Claude does synthesis)
- Preserving decisions and rationale

### The AI-Assisted Documentation Approach

Instead of manual documentation:
1. **You focus on the work** - meetings, research, design, building
2. **Claude synthesizes** - reads everything, finds patterns, generates docs
3. **You refine** - review for accuracy, add missing context, edit as needed

Result: Better docs, less time spent, more consistent quality.

---

## Final Thoughts

This system is designed to **get out of your way** while ensuring documentation happens systematically.

**Remember:**
- You don't need to be a Claude Code expert
- You don't need to be an Obsidian power user
- You just need to: add your files → run a command → review the output

**The system handles:**
- Reading all your inputs
- Synthesizing across sources
- Following templates consistently
- Generating polished documents

**You handle:**
- Doing the actual product work
- Capturing transcripts and notes
- Reviewing for accuracy
- Making product decisions

Start with one project. Get comfortable with the workflow. It'll become second nature quickly.

**Now go build something great and let Claude handle the docs.**
