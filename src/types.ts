export interface Movie {
	title: string
	year: string
	rate: string
	duration: string
	desc: string
	genre: string[]
	actors: string[]
	director: string
	writers: string[]
	rateOutOf10: string
	thumbnail: string
	poster: string
	trailer: string
}

export interface User {
	id: string
	firstName: string
	lastName: string
	favorites: string[]
}
