import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

type User =
	| {
			id: number
			email: string
			password: string
	  }
	| undefined

export const generateToken = (user: User) => {
	const token = jwt.sign({ id: user?.id }, process.env.JWT_SECRET!, {
		expiresIn: "7d",
	})
	cookies().set({
		name: "jwt",
		value: token,
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7, // 7 days
	})
}
