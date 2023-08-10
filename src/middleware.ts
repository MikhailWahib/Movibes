import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	let cookie = request.cookies.get('jwt')

	if (!cookie && request.nextUrl.pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', request.url))
	} else if (cookie && request.nextUrl.pathname !== '/') {
		return NextResponse.redirect(new URL('/', request.url))
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/', '/login', '/signup'],
}