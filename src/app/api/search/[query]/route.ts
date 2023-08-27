import { api } from '@/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
	request: NextRequest,
	{ params }: { params: { query: string } }
) {
	const query = params.query
	const res = await api.get(`/search/multi?query=${query}`)
	const data = res.data

	return NextResponse.json({ data })
}
