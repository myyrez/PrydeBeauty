import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export default function ShopButton() {
  return (
    <Link href="/cart">
      <div className="relative bg-zinc-900 rounded-full h-10 w-10 flex justify-center items-center">
        <CiShoppingCart className="text-2xl text-stone-50" />

        <div className="absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 flex justify-center items-center">
          <p className="text-zinc-50 text-xs">3</p>
        </div>
      </div>
    </Link>
  );
}
