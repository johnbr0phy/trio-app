'use client';

import { Project, PHASES, Phase } from '@/lib/types';
import { ProjectCard } from './ProjectCard';

interface KanbanBoardProps {
  projects: Project[];
}

export function KanbanBoard({ projects }: KanbanBoardProps) {
  const getProjectsByPhase = (phase: Phase) =>
    projects.filter((p) => p.phase === phase);

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {PHASES.map((phase) => (
        <div
          key={phase.id}
          className="flex-shrink-0 w-72 bg-gray-50 rounded-lg p-4"
        >
          {/* Column header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-700">{phase.label}</h2>
            <span className="text-sm text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">
              {getProjectsByPhase(phase.id).length}
            </span>
          </div>

          {/* Cards */}
          <div className="space-y-3">
            {getProjectsByPhase(phase.id).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {getProjectsByPhase(phase.id).length === 0 && (
              <div className="text-center py-8 text-gray-400 text-sm">
                No projects
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
