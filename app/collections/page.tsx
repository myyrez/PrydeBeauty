import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function CollectionsPage() {
  return (
    <div className="relative text-zinc-900 h-screen flex gap-36 items-center flex-col">

      <Navbar />

      <div className="h-fit w-[90%] z-10">
        <h1 className="text-4xl mt-24 text-zinc-900">
           <span className="italic font-serif">Cheeks Out Freestyle</span>
        </h1>
        <div className="flex justify-between py-10">
          <ProductCard {...{ odd: true, imagePath: "/images/shade1.png" }} />
          <ProductCard {...{ odd: false, imagePath: "/images/shade2.png" }} />
          <ProductCard {...{ odd: true, imagePath: "/images/shade3.png" }} />
        </div>
        <div className="flex justify-between py-10">
          <ProductCard {...{ odd: false, imagePath: "/images/shade1.png" }} />
          <ProductCard {...{ odd: true, imagePath: "/images/shade2.png" }} />
          <ProductCard {...{ odd: false, imagePath: "/images/shade3.png" }} />
        </div>

        <h1 className="text-4xl mt-24 text-zinc-900">
           <span className="italic font-serif">Golden Hour</span>
        </h1>
        <div className="flex justify-between py-10">
          <ProductCard {...{ odd: true, imagePath: "/images/shade1.png" }} />
          <ProductCard {...{ odd: false, imagePath: "/images/shade2.png" }} />
          <ProductCard {...{ odd: true, imagePath: "/images/shade3.png" }} />
        </div>

        <h1 className="text-4xl mt-24 text-zinc-900">
           <span className="italic font-serif">Mother Nature's Blessing</span>
        </h1>
        <div className="flex justify-around py-10">
          <ProductCard {...{ odd: false, imagePath: "/images/shade2.png" }} />
          <ProductCard {...{ odd: false, imagePath: "/images/shade3.png" }} />
        </div>
      </div>
    </div>
  );
}
