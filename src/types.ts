export interface ShowDetails {
	adult: boolean
	backdrop_path: string
	belongs_to_collection?: any
	budget?: number
	genres: Genre[]
	homepage: string
	id: number
	imdb_id?: string
	original_language: string
	original_title?: string
	overview: string
	popularity: number
	poster_path: string
	production_companies: Productioncompany[]
	production_countries: Productioncountry[]
	release_date?: string
	revenue?: number
	runtime?: number
	spoken_languages: Spokenlanguage[]
	status: string
	tagline: string
	title?: string
	video?: boolean
	vote_average: number
	vote_count: number
	credits: Credits
	videos: Videos

	// FOR THE TV SHOWS
	created_by: Createdby[]
	episode_run_time?: any[]
	first_air_date?: string
	in_production?: boolean
	languages?: string[]
	last_air_date?: string
	last_episode_to_air?: Lastepisodetoair
	name?: string
	next_episode_to_air?: Lastepisodetoair
	networks?: Network[]
	number_of_episodes?: number
	number_of_seasons?: number
	origin_country?: string[]
	original_name?: string
	seasons?: Season[]
	type?: string
}

export interface Videos {
	results: Result[]
}

export interface Result {
	iso_639_1: string
	iso_3166_1: string
	name: string
	key: string
	site: string
	size: number
	type: string
	official: boolean
	published_at: string
	id: string
}

export interface Credits {
	cast: Cast[]
	crew: Crew[]
}

export interface Crew {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path?: string
	credit_id: string
	department: string
	job: string
}

export interface Cast {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	original_name: string
	popularity: number
	profile_path?: string
	cast_id?: number
	character?: string
	credit_id: string
	order?: number

	// FOR THE TV SHOWS
	department?: string
	job?: string
}

export interface Spokenlanguage {
	english_name: string
	iso_639_1: string
	name: string
}

export interface Productioncountry {
	iso_3166_1: string
	name: string
}

export interface Productioncompany {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

export interface Genre {
	id: number
	name: string
}

export interface Season {
	air_date: string
	episode_count: number
	id: number
	name: string
	overview: string
	poster_path: string
	season_number: number
	vote_average: number
}

export interface Network {
	id: number
	logo_path: string
	name: string
	origin_country: string
}

export interface Lastepisodetoair {
	id: number
	name: string
	overview: string
	vote_average: number
	vote_count: number
	air_date: string
	episode_number: number
	episode_type: string
	production_code: string
	runtime: number
	season_number: number
	show_id: number
	still_path: string
}

export interface Createdby {
	id: number
	credit_id: string
	name: string
	gender: number
	profile_path: string
}

export interface ShowDiscover {
	adult?: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title?: string
	overview: string
	popularity: number
	poster_path: string
	release_date?: string
	title?: string
	video?: boolean
	vote_average: number
	vote_count: number

	// FOR THE TV SHOWS
	first_air_date?: string
	name?: string
	origin_country?: string[]
	original_name?: string
}

export type ApiDiscoverResponse = {
	page: number
	results: ShowDiscover[]
	total_pages: number
	total_results: number
}
