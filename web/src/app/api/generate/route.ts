import { NextRequest, NextResponse } from 'next/server';
import { generateDocs } from '@/lib/claude';
import { Phase } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, phase } = body as { projectId: string; phase: Phase };

    if (!projectId || !phase) {
      return NextResponse.json(
        { error: 'projectId and phase are required' },
        { status: 400 }
      );
    }

    const validPhases: Phase[] = ['product', 'ship', 'launch', 'post-launch'];
    if (!validPhases.includes(phase)) {
      return NextResponse.json({ error: 'Invalid phase' }, { status: 400 });
    }

    const result = await generateDocs(projectId, phase);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Generation failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ docs: result.docs });
  } catch (error) {
    console.error('Error generating docs:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Generation failed' },
      { status: 500 }
    );
  }
}
