import prisma from "@/db";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "test_"
                },
                password: {
                    label: "Password:",
                    type: "password",
                }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                const user = await prisma.user.findUnique({
                    where: { username: credentials.email }
                })

                if (!user) {
                    return null
                }

                const isPasswordValid = await compare(credentials.password, user.password)

                if (!isPasswordValid) {
                    return null
                }

                return {
                    id: user.id + '',
                    email: user.username,
                    name: user.name,
                    randomKey: 'oi'
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        session: ({ session, token }) => {
            console.log('session callback', {session, token})
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    email: token.email,
                    randomKey: token.randomKey
                }
            }
        },
        jwt: ({ token, user }) => {
            console.log('jwt callback', {token, user})
            if (user) {
                const u = user as unknown as any
                return {
                    ...token,
                    id: u.id,
                    email: u.email,
                    randomKey: u.randomKey
                }
            }
            return token
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }