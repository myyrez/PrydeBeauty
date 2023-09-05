import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";

export default function ShopButton() {
  return (
    <Link href="/cart">
      <div className="bg-zinc-900 rounded-full h-10 w-10 flex justify-center items-center">
        <CiShoppingCart className="text-2xl text-stone-50" />
      </div>
    </Link>
  );
}
