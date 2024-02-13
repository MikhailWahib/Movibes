import { NextResponse } from "next/server"
import users from "../users.json"
import { generateToken } from "../../lib/generateToken"
import { sql } from "@vercel/postgres"

export async function POST(req: Request, res: Response) {
	const { email, password } = await req.json()

	const { rows } = await sql`SELECT * FROM users WHERE email=${email};`

	const user = rows[0] as any

	if (!user || user.password !== password) {
		return NextResponse.json(
			{ message: "Invalid email or password" },
			{ status: 401 }
		)
	}
	generateToken(user)
	return NextResponse.json({ data: user })
}
