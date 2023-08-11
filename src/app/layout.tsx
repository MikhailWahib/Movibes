import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
	title: 'Movibes',
	description: 'The best place for movies lovers.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>{children}</body>
		</html>
	)
}
