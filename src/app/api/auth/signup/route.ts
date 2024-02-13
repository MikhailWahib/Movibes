import { NextResponse } from "next/server"
import { generateToken } from "../../lib/generateToken"
import { sql } from "@vercel/postgres"

export async function POST(req: Request, res: Response) {
	const { email, password, firstName, lastName } = await req.json()

	const { rows: rowsExists } =
		await sql`SELECT * FROM users WHERE email=${email};`

	if (rowsExists.length > 0) {
		return NextResponse.json(
			{ message: "User already exists" },
			{ status: 409 }
		)
	}

	const { rows } =
		await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (${firstName}, ${lastName}, ${email}, ${password}) RETURNING *;`

	const user = rows[0] as any

	generateToken(user)
	return NextResponse.json({ data: user })
}
