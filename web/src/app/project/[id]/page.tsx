'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Project, INPUT_FOLDERS, PHASES } from '@/lib/types';
import { FileDropZone } from '@/components/FileDropZone';
import { GenerateButton } from '@/components/GenerateButton';

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchProject = useCallback(async () => {
    try {
      const response = await fetch(`/api/projects?id=${params.id}`);
      if (!response.ok) throw new Error('Failed to fetch project');
      const data = await response.json();
      setProject(data.project);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load project');
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  const handleFileDrop = async (folder: string, files: File[]) => {
    if (!project) return;

    setUploading(folder);

    try {
      const formData = new FormData();
      formData.append('projectId', project.id);
      formData.append('folder', folder);
      files.forEach((file) => formData.append('files', file));

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      // Refresh project data
      await fetchProject();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(null);
    }
  };

  const handlePhaseChange = async (newPhase: string) => {
    if (!project) return;

    try {
      const response = await fetch('/api/projects', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: project.id, phase: newPhase }),
      });

      if (!response.ok) throw new Error('Failed to update phase');
      await fetchProject();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">{error || 'Project not found'}</p>
      </div>
    );
  }

  const currentPhase = PHASES.find((p) => p.id === project.phase);
  const phaseGeneratedDocs = project.generatedDocs.filter(
    (doc) => doc.phase === project.phase
  );

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-gray-700 mb-2"
          >
            ← Back to Board
          </button>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
            <select
              value={project.phase}
              onChange={(e) => handlePhaseChange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md bg-white"
            >
              {PHASES.map((phase) => (
                <option key={phase.id} value={phase.id}>
                  {phase.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Inputs Column */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Inputs</h2>
            <div className="space-y-4">
              {INPUT_FOLDERS.map((folder) => (
                <FileDropZone
                  key={folder.id}
                  label={folder.label}
                  files={project.inputs[folder.id]}
                  onDrop={(files) => handleFileDrop(folder.id, files)}
                  uploading={uploading === folder.id}
                />
              ))}
            </div>
          </div>

          {/* Generated Docs Column */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Generated Docs ({currentPhase?.label})
            </h2>

            {phaseGeneratedDocs.length > 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {phaseGeneratedDocs.map((doc) => (
                    <li
                      key={doc.path}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="text-green-500">✓</span>
                      {doc.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center text-gray-500">
                No docs generated yet for this phase
              </div>
            )}

            {/* Generate Button */}
            <div className="mt-6">
              <GenerateButton
                projectId={project.id}
                phase={project.phase}
                onSuccess={fetchProject}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
