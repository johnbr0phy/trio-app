import { NextRequest, NextResponse } from 'next/server';
import { saveUploadedFile } from '@/lib/projects';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const projectId = formData.get('projectId') as string;
    const folder = formData.get('folder') as string;
    const files = formData.getAll('files') as File[];

    if (!projectId || !folder) {
      return NextResponse.json(
        { error: 'projectId and folder are required' },
        { status: 400 }
      );
    }

    if (files.length === 0) {
      return NextResponse.json({ error: 'No files provided' }, { status: 400 });
    }

    const uploaded: string[] = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());
      saveUploadedFile(projectId, folder, file.name, buffer);
      uploaded.push(file.name);
    }

    return NextResponse.json({ uploaded });
  } catch (error) {
    console.error('Error uploading files:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Upload failed' },
      { status: 500 }
    );
  }
}
