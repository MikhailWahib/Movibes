import axios from 'axios'

axios.defaults.headers.get.Accept = 'application/json'
axios.defaults.headers.get.Authorization = `Bearer ${process.env.API_TOKEN}`

export const api = axios.create({
	baseURL: process.env.API_URL,
})
