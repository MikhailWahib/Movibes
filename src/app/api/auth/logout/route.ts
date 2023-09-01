import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET() {
	cookies().delete('jwt')
	return NextResponse.json({ message: 'Logged out' })
}
