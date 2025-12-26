'use client';

import Link from 'next/link';
import { Project, INPUT_FOLDERS } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const totalInputs = INPUT_FOLDERS.reduce(
    (sum, folder) => sum + project.inputs[folder.id].length,
    0
  );

  const hasInputs = totalInputs > 0;
  const hasGeneratedDocs = project.generatedDocs.length > 0;

  // Calculate progress (simple: has inputs = 50%, has docs = 100%)
  const progress = hasGeneratedDocs ? 100 : hasInputs ? 50 : 0;

  return (
    <Link href={`/project/${project.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <h3 className="font-medium text-gray-900 truncate">{project.name}</h3>

        {/* Progress bar */}
        <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status */}
        <div className="mt-2 text-sm text-gray-500">
          {hasGeneratedDocs ? (
            <span className="text-green-600">✓ Docs generated</span>
          ) : hasInputs ? (
            <span>{totalInputs} input{totalInputs !== 1 ? 's' : ''}</span>
          ) : (
            <span className="text-gray-400">No inputs yet</span>
          )}
        </div>
      </div>
    </Link>
  );
}
