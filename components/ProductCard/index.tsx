import Image from "next/image"
import { CiHeart } from "react-icons/ci"
import ShopButton from "../shared/shopButton"

type CardProps = {
    odd: boolean;
}

const ProductCard: React.FunctionComponent<CardProps> = (props) => {
    const { odd } = props;

    return (
        <div className={`${odd ? 'mt-11' : 'mt-0'} relative flex flex-col gap-1 w-56 text-zinc-900`}>

            <div className="absolute flex justify-center items-center bg-stone-50/10 backdrop-blur right-3 top-3 h-14 w-14 rounded-full">
                <CiHeart className="text-3xl text-stone-50 justify-center" />
            </div>
            
            <Image src='/images/heroImg1.png' height={400} width={300} alt='product card image' />
            <p className="text-sm font-bold uppercase">new shade</p>
            <p className="text-sm font-semibold uppercase">cheeks out freestyle cream blush</p>
            <p className="text-sm">X units remaining</p>
            <ShopButton />
        </div>
    )
}
export default ProductCard;