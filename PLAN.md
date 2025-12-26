# Trio App Frontend - Build Plan

## Vision

A Kanban-style web app where product trios can:
- See all projects as cards moving through phases
- Drag & drop files to upload inputs
- One-click document generation via Claude API
- Track what's complete vs what's missing

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                    │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐    │
│  │ Product │→ │  Ship   │→ │ Launch  │→ │  Post   │    │
│  │         │  │         │  │         │  │ Launch  │    │
│  │ [card]  │  │ [card]  │  │         │  │         │    │
│  │ [card]  │  │         │  │         │  │         │    │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘    │
│                                                         │
│  Drop zone: transcripts | evidence | designs | refs     │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   API Routes (Next.js)                   │
│  /api/projects     - CRUD projects                      │
│  /api/upload       - Handle file uploads                │
│  /api/generate     - Call Claude API                    │
│  /api/status       - Check generation status            │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                      Claude API                          │
│  - Reads templates from generation-rules/               │
│  - Reads inputs from project folder                     │
│  - Generates documents                                  │
└─────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| **Framework** | Next.js 14 (App Router) | React + API routes, easy Vercel deploy |
| **Styling** | Tailwind CSS | Fast, utility-first, good for dashboards |
| **Drag & Drop** | @hello-pangea/dnd | Maintained fork of react-beautiful-dnd |
| **File Upload** | react-dropzone | Battle-tested, accessible |
| **State** | Zustand | Simple, lightweight |
| **AI** | Anthropic SDK | Official Claude API client |
| **Database** | SQLite → Postgres | Start simple, scale later |
| **Auth** | NextAuth.js | When team access needed |

---

## Phase 1: MVP (Local, Single User)

### What we build:
1. **Kanban Board** - 4 columns (Product → Ship → Launch → Post-Launch)
2. **Project Cards** - Show project name, phase, completion status
3. **Project Detail View** - See inputs, generated docs, what's missing
4. **File Drop Zones** - Drag files into the right input folder
5. **Generate Button** - One-click to generate docs for current phase
6. **Generation Progress** - Show status while Claude is working

### File Structure:
```
trio-app/
├── app/                      # Next.js app router
│   ├── page.tsx              # Kanban board
│   ├── project/[id]/page.tsx # Project detail
│   ├── api/
│   │   ├── projects/route.ts # Project CRUD
│   │   ├── upload/route.ts   # File upload
│   │   └── generate/route.ts # Claude generation
│   └── layout.tsx
├── components/
│   ├── KanbanBoard.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectDetail.tsx
│   ├── FileDropZone.tsx
│   ├── GenerateButton.tsx
│   └── StatusIndicator.tsx
├── lib/
│   ├── claude.ts             # Claude API wrapper
│   ├── projects.ts           # Project file operations
│   └── templates.ts          # Template loading
├── projects/                 # Existing project data
├── generation-rules/         # Existing templates
└── company-context/          # Existing context
```

---

## Phase 2: Team Features

When ready for EPD team access:

1. **Authentication** - Google/SSO via NextAuth
2. **Database** - Move from file system to Postgres
3. **Multi-user** - See who's working on what
4. **Comments** - Discuss on project cards
5. **Notifications** - When docs are generated
6. **Permissions** - Who can generate vs view

---

## Phase 3: Polish

1. **Real-time updates** - See changes as they happen
2. **Version history** - Track doc changes over time
3. **Templates** - Custom templates per team
4. **Integrations** - Slack, Linear, Figma links
5. **Analytics** - How long in each phase, bottlenecks

---

## UI Mockup (ASCII)

```
┌──────────────────────────────────────────────────────────────────────┐
│  TRIO WORKSPACE                                    [+ New Project]   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRODUCT          SHIP             LAUNCH          POST-LAUNCH       │
│  ─────────        ─────────        ─────────       ─────────         │
│  ┌──────────┐    ┌──────────┐                                        │
│  │ Feature A│    │ Feature B│                                        │
│  │ ██████░░ │    │ ████████ │                                        │
│  │ 2 inputs │    │ Ready ✓  │                                        │
│  └──────────┘    └──────────┘                                        │
│  ┌──────────┐                                                        │
│  │ Feature C│                                                        │
│  │ ██░░░░░░ │                                                        │
│  │ 1 input  │                                                        │
│  └──────────┘                                                        │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

Click on card → Opens detail view:

┌──────────────────────────────────────────────────────────────────────┐
│  ← Back                              FEATURE A                       │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PHASE: Product (Discovery)                    [Generate Docs]       │
│                                                                      │
│  INPUTS                              GENERATED DOCS                  │
│  ─────────────────────────           ─────────────────────────       │
│  ┌─ Transcripts ──────────┐          ┌─ 01_Product ───────────┐      │
│  │ ┌─────────────────────┐│          │                        │      │
│  │ │ Drop files here     ││          │  ⏳ Not yet generated  │      │
│  │ │                     ││          │                        │      │
│  │ └─────────────────────┘│          └────────────────────────┘      │
│  │ • kickoff-dec-18.md ✓ │                                           │
│  └────────────────────────┘                                          │
│  ┌─ Customer Evidence ────┐                                          │
│  │ • acme-feedback.md ✓  │                                           │
│  │ • beta-survey.md ✓    │                                           │
│  └────────────────────────┘                                          │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Key Decisions to Confirm

| Question | Options | Recommendation |
|----------|---------|----------------|
| **Start local or hosted?** | Local first, deploy later | Start local, add Vercel when ready for team |
| **How to store projects?** | File system vs DB | File system for MVP (keeps git workflow) |
| **API key management?** | Env var vs user input | Env var for MVP, user settings later |
| **Styling approach?** | Tailwind vs component lib | Tailwind + shadcn/ui components |

---

## Next Steps

Once you approve this plan:

1. Initialize Next.js project with Tailwind
2. Set up basic routing (board + project detail)
3. Build Kanban board with static data
4. Add file upload functionality
5. Wire up Claude API for generation
6. Test end-to-end flow

---

## Questions for You

1. **Does this scope feel right for MVP?**
2. **Any features missing that are must-haves?**
3. **Preference on UI style?** (minimal, colorful, corporate)
4. **Should projects live in git or separate storage?**

Let me know and we'll start building!
