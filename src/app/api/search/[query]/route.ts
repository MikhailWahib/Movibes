import { NextRequest, NextResponse } from 'next/server'

import { api } from '@/api'

export async function GET(
	request: NextRequest,
	{ params }: { params: { query: string } }
) {
	const query = params.query
	const res = await api.get(`/search/multi?query=${query}`)
	const data = {
		...res.data,
		results: res.data.results.filter(
			(item: any) => item.media_type === 'tv' || item.media_type === 'movie'
		),
	}

	return NextResponse.json({ data })
}
