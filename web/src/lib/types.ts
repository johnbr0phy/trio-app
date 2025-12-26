export type Phase = 'product' | 'ship' | 'launch' | 'post-launch';

export interface ProjectInput {
  name: string;
  path: string;
  folder: 'transcripts' | 'customer-evidence' | 'designs' | 'references';
}

export interface GeneratedDoc {
  name: string;
  path: string;
  phase: Phase;
}

export interface Project {
  id: string;
  name: string;
  phase: Phase;
  inputs: {
    transcripts: ProjectInput[];
    'customer-evidence': ProjectInput[];
    designs: ProjectInput[];
    references: ProjectInput[];
  };
  generatedDocs: GeneratedDoc[];
  createdAt: string;
  updatedAt: string;
}

export const PHASES: { id: Phase; label: string; folder: string }[] = [
  { id: 'product', label: 'Product', folder: '01_Product' },
  { id: 'ship', label: 'Ship', folder: '02_Ship' },
  { id: 'launch', label: 'Launch', folder: '03_Launch' },
  { id: 'post-launch', label: 'Post-Launch', folder: '04_Post-Launch' },
];

export const INPUT_FOLDERS = [
  { id: 'transcripts', label: 'Transcripts', folder: '01-transcripts' },
  { id: 'customer-evidence', label: 'Customer Evidence', folder: '02-customer-evidence' },
  { id: 'designs', label: 'Designs', folder: '03-designs' },
  { id: 'references', label: 'References', folder: '04-references' },
] as const;
