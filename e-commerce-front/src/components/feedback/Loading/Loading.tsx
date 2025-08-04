import type { TLoading } from "@customTypes/shared"
import CategoriesSkeletons from "./Skeletones/CategoriesSkeletones/CategoriesSkeletons";
import CartSkeleton from "./Skeletones/CartSkeletone/CartSkeletone";
import ProductSkeleton from "./Skeletones/ProductsSkeletone/ProductsSkeletone";
import LottieHandler from "../Lottie/LottieHandler";

const skeletonTypes = {
    category: CategoriesSkeletons,
    cart: CartSkeleton,
    product: ProductSkeleton,
}

// the next line that mean, get all keys of the object
// keyof typeof skeletonTypes
type LoadingProps = {
    status: TLoading;
    error: null | string;
    children: React.ReactNode;
    type?: keyof typeof skeletonTypes
}

// Here you  can handle any kind of error about 
// page,network, component level, etc...

const Loading = ({error,status , children,type = "cart"}:LoadingProps) => {
    
    const Component = skeletonTypes[type];

    if(status === "pending"){
        return <Component />
    }
    if(status === "failed"){
        return <LottieHandler type="Error" message={error as string}/>
    }

    return <> {children} </>
}

export default Loading