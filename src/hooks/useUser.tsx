import { useEffect, useState } from 'react'

export const useUser = () => {
	const [user, setUser] = useState(null)
	useEffect(() => {
		const localStorageUser = localStorage.getItem('user')

		if (localStorageUser) {
			setUser(JSON.parse(localStorageUser))
		}
	}, [])

	const logout = () => {
		localStorage.removeItem('user')
		setUser(null)
	}

	return { user, logout }
}
