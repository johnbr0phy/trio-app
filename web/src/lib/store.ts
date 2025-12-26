import { create } from 'zustand';
import { Project, Phase } from './types';

interface AppState {
  projects: Project[];
  loading: boolean;
  error: string | null;

  // Actions
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  moveProject: (id: string, phase: Phase) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  projects: [],
  loading: false,
  error: null,

  setProjects: (projects) => set({ projects }),

  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),

  updateProject: (id, updates) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, ...updates } : p
      ),
    })),

  moveProject: (id, phase) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.id === id ? { ...p, phase, updatedAt: new Date().toISOString() } : p
      ),
    })),

  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
