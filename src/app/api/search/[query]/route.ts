import { NextRequest, NextResponse } from 'next/server'

import { getData } from '@/api'

export async function GET(
	request: NextRequest,
	{ params }: { params: { query: string } }
) {
	const query = params.query
	const res = await getData(`/search/multi?query=${query}`)
	const data = {
		...res,
		results: res.results.filter(
			(item: any) => item.media_type === 'tv' || item.media_type === 'movie'
		),
	}

	return NextResponse.json({ data })
}
