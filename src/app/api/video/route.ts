// app/api/video/route.js
import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    const filePath = path.join(process.cwd(), 'public', '10.mp4');
    try {
        const videoBuffer = await fs.readFile(filePath);
        return new NextResponse(videoBuffer, {
            headers: {
                'Content-Type': 'video/mp4',
            },
        });
    } catch (error) {
        return new NextResponse(`Video not found ${error}`, { status: 404 });
    }
}
