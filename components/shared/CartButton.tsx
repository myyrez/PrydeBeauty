import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CartButton() {
  const session = await getServerSession(authOptions)
  const userIdToString: string = session?.user.id + ''

  const carts = await prisma.userCarted.findMany({
    where: {
        userId: parseInt(userIdToString)
    },
  })

  return (
    <Link href="/cart">
      <div className="relative bg-zinc-900 rounded-full h-10 w-10 flex justify-center items-center">
        <CiShoppingCart className="text-2xl text-stone-50" />
        {carts.length > 0
          ? <div className="absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 flex justify-center items-center">
              <p className="text-zinc-50 text-xs">{carts.length}</p>
            </div>

          : null
        }
        
      </div>
    </Link>
  );
}
