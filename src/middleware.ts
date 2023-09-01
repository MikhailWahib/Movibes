import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	let jwt = request.cookies.get('jwt')

	if (!jwt && request.nextUrl.pathname !== '/login') {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/home', request.url))
	}

	if (jwt && request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/home', request.url))
	}
}

export const config = {
	matcher: ['/', '/home', '/movies', '/tv-shows', '/login'],
}
