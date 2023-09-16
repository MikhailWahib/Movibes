export const getData = async (url: string, options?: any): Promise<any> => {
	try {
		const res = await fetch(`${process.env.API_URL}${url}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${process.env.API_TOKEN}`,
			},
			...options,
		})
		const data = await res.json()
		return data
	} catch (error) {
		console.log(error)
	}
}
