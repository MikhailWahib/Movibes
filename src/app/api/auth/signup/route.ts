import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import users from '../users.json'
import fs from 'fs'
import path from 'path'

export async function POST(req: Request, res: Response) {
	const { email, password, firstName, lastName } = await req.json()
	const checkUser = users.find((user) => user.email === email)
	if (checkUser) {
		return NextResponse.json({ error: 'User already exists' })
	}
	const user = {
		id: users.length + 1,
		email,
		password,
	}
	users.push(user)
	// update users json file
	fs.writeFileSync(
		path.join(process.cwd(), 'src', 'app', 'api', 'auth', 'users.json'),
		JSON.stringify(users, null, 2)
	)
	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)
	cookies().set('jwt', token)
	return NextResponse.json({ data: user })
}
