import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function CartButton() {
  return (
    <Link href="/cart">
      <div className="relative bg-zinc-900 rounded-full h-10 w-10 flex justify-center items-center">
        <CiShoppingCart className="text-2xl text-stone-50" />
      </div>
    </Link>
  );
}
