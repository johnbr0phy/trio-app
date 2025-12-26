'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileDropZoneProps {
  label: string;
  files: { name: string; path: string }[];
  onDrop: (files: File[]) => void;
  uploading?: boolean;
}

export function FileDropZone({ label, files, onDrop, uploading }: FileDropZoneProps) {
  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropCallback,
    accept: {
      'text/markdown': ['.md'],
      'text/plain': ['.txt'],
      'application/pdf': ['.pdf'],
    },
  });

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h4 className="font-medium text-gray-700 mb-3">{label}</h4>

      {/* Drop zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}
          ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <input {...getInputProps()} disabled={uploading} />
        {uploading ? (
          <p className="text-sm text-gray-500">Uploading...</p>
        ) : isDragActive ? (
          <p className="text-sm text-blue-600">Drop files here</p>
        ) : (
          <p className="text-sm text-gray-500">
            Drag & drop files here, or click to select
          </p>
        )}
      </div>

      {/* File list */}
      {files.length > 0 && (
        <ul className="mt-3 space-y-1">
          {files.map((file) => (
            <li
              key={file.path}
              className="text-sm text-gray-600 flex items-center gap-2"
            >
              <span className="text-green-500">✓</span>
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
