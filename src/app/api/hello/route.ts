import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from the Serene API!',
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  return NextResponse.json({
    message: `Hello ${body.name || 'Anonymous'}!`,
    timestamp: new Date().toISOString(),
  })
} 