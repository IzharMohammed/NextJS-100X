import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return Response.json({ username: 'izhar', email: 'izhar@gmail.com' })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log('body',body);
    

    return NextResponse.json({ username: body.username, password: body.password })
}