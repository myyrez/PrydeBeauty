import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

async function main() {
    const password = await hash('abc123', 10)
    const user = await prisma.user.upsert({
        where: { id: 1 },
        update: {
            name: 'matheus',
            username: 'test@test.com',
            password: password
        },
        create: {
            name: 'matheus',
            username: 'test@test.com',
            password: password
        }
    })
    console.log({ user })
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })