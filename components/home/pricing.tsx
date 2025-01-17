import { AppContainer, Spacer } from "../global";
import { FC } from "react";
import { HeadingBox } from "./heading-box";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
interface Price {
  title?: string;
  price?: string;
  benefits?: string[];
  isSelected?: boolean
}
const list: Price[] = [
{ title: "standar", price: "1200", benefits: ["Lorem ipsum dolor sit amet, adipiscing elit ligula", "Lorem ipsum dolor sit amet, adipiscing elit ligula", "Lorem ipsum dolor sit amet, adipiscing elit ligula"] },
  { title: "deluxe", price: "2300", isSelected: true, benefits: ["Lorem ipsum dolor sit amet, adipiscing elit ligula", "Lorem ipsum dolor sit amet, adipiscing elit ligula", "Lorem ipsum dolor sit amet, adipiscing elit ligula"] },
  { title: "premium", price: "1600", benefits: ["Lorem ipsum dolor sit amet, adipiscing elit ligula", "Lorem ipsum dolor sit amet, adipiscing elit ligula", "Lorem ipsum dolor sit amet, adipiscing elit ligula"] },
];
export const Pricing: FC = () => {
  return (
    <div>
      <AppContainer className="">
        <HeadingBox subTitle="our latest offers" title="pricing table" description="Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etia rmrhoncustema ecenas tempus, tellus eget..." />
        <Spacer small />
        <div className="grid justify-center md:grid-cols-3 gap-4 md:gap-8 ">
          {list &&
            list.length > 0 &&
            list.map((box) => (
              <div key={box.title} className={cn("p-3 border w-full", box.isSelected && 'border-primary/70')}>
                <div className="border border-primary/20 text-center space-y-4 md:space-y-6 p-4 sm:p-12 w-full">
                    <h4 className="font-[family-name:var(--font-cormorant-upright)] uppercase font-light font-comparant text-2xl">{box.title}</h4>
                    <h3 className="font-[family-name:var(--font-cormorant-upright)] font-normal text-5xl"><sup className="font-light">$</sup>{box.price} <sub className="font-[family-name:Roboto] font-extralight text-sm block">/per month</sub></h3>
                    <ul className="text-sm max-w-52 mx-auto space-y-4">
                    {box.benefits?.map((benefit, index) => <li key={`${benefit}-${index}}`} className="font-[family-name:var(--font-roboto)] leading-6 tracking-widest">{benefit}</li>)}
                    </ul>
                    <Link href={'#'} className="font-[family-name:var(--font-cormorant)] uppercase inline-block">view more <ArrowRight className="ml-2 inline-block h-4 w-4" /></Link>
                </div>
              </div>
            ))}
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
