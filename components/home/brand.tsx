import Image from "next/image";
import { AppContainer, Spacer } from "../global";
import { FC } from "react";
interface Brands {
    title?: string
    image?: string
}
const brands:Brands[] = [
    {image: '/images/brand_img1.png'},
    {image: '/images/brand_img2.png'},
    {image: '/images/brand_img3.png'},
    {image: '/images/brand_img4.png'},
    {image: '/images/brand_img5.png'},
    {image: '/images/brand_img6.png'},
] 
export const Brands:FC = () => {
    return ( <div>
        <AppContainer className="grid justify-center items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
            {brands && brands.length > 0 && brands.map((brand) => 
            <Image key={brand.image} src={brand.image ?? '/logo-light.png'} height={100} width={100} alt="Brand image" className="mx-auto w-auto h-auto" />
            )}
        </AppContainer>
        <Spacer small />
        <div><Image src={'/yacht-image.jpg'} alt="Place image" height={1000} width={1000} className="w-full" /></div>
    </div> );
}