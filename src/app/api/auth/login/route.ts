import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import users from '../users.json'

export async function POST(req: Request, res: Response) {
	const { email, password } = await req.json()
	const user = users.find((user) => user.email === email)
	if (!user || user.password !== password) {
		return NextResponse.json({ message: 'Invalid email or password' }, {status: 401});
	}
	const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!)
	cookies().set('jwt', token)
	return NextResponse.json({ data: user })
}
