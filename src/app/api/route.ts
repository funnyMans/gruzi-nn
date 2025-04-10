import { NextResponse } from 'next/server';

async function handler() {
  return NextResponse.json({ success: false }, { status: 400 });
}

export { handler as GET, handler as POST };
