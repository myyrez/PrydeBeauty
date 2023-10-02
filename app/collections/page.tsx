import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import prisma from "@/db";

export default async function CollectionsPage() {
  const products = await prisma.product.findMany()
  return (
    <div className="relative text-zinc-900 h-screen flex gap-36 items-center flex-col">

      <Navbar />

      <div className="h-fit w-[90%] z-10">
        <h1 className="text-4xl mt-24 text-zinc-900">
          <span className="italic font-serif">Cheeks Out Freestyle</span>
        </h1>
        <div className="flex justify-between py-10">
          {products.filter(product => product.collection == 'Cheeks Out Freestyle').map(product => (
            <ProductCard key={product.id} {...{ 
              addMarginTop: false, 
              imagePath: "/images/shade2.png",
              id: product.id,
              name: product.name,
              collection: product.collection,
              discountPercentage: product.discountPercentage,
              listPrice: product.listPrice,
              listPriceCents: product.listPriceCents,
              unitsRemaining: product.unitsRemaining,
            }} />
          ))}
        </div>
        <div className="flex justify-between py-10">

        </div>

        <h1 className="text-4xl mt-24 text-zinc-900">
          <span className="italic font-serif">Golden Hour</span>
        </h1>
        <div className="flex justify-between py-10">
          {products.filter(product => product.collection == 'Golden Hour').map(product => (
            <ProductCard key={product.id} {...{ 
              addMarginTop: false, 
              imagePath: "/images/shade2.png",
              id: product.id,
              name: product.name,
              collection: product.collection,
              discountPercentage: product.discountPercentage,
              listPrice: product.listPrice,
              listPriceCents: product.listPriceCents,
              unitsRemaining: product.unitsRemaining,
            }} />
          ))}
        </div>

        <h1 className="text-4xl mt-24 text-zinc-900">
          <span className="italic font-serif">Mother Nature's Blessing</span>
        </h1>
        <div className="flex justify-around py-10">
          {products.filter(product => product.collection == "Mother Nature's Blessing").map(product => (
            <ProductCard key={product.id} {...{ 
              addMarginTop: false, 
              imagePath: "/images/shade2.png",
              id: product.id,
              name: product.name,
              collection: product.collection,
              discountPercentage: product.discountPercentage,
              listPrice: product.listPrice,
              listPriceCents: product.listPriceCents,
              unitsRemaining: product.unitsRemaining,
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
