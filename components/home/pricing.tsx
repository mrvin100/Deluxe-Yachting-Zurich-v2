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
{ title: "cheese on the lake", price: "149", benefits: ["Deluxe Fondue Cruise", "3-course menu by ChäsLaube Zurich", "Half bottle Swiss wine per person"] },
  { title: "liquid spirit cruise", price: "149", isSelected: true, benefits: ["Friday After Work Gin Tasting", "Flight of 5 selected gins", "Bar snacks and soft drinks"] },
  { title: "fire in the sky", price: "199", benefits: ["NYE Cruise with Fireworks", "Half bottle of champagne per person", "Bar snacks and refreshments"] },
];
export const Pricing: FC = () => {
  return (
    <div>
      <AppContainer className="">
        <HeadingBox subTitle="our latest offers" title="exclusive events" description="Celebrate life’s finest moments with unforgettable experiences, from indulgent fondue nights to refined wine and cigar tastings, all set amidst the breathtaking beauty of Lake Zurich." />
        <Spacer small />
        <div className="grid justify-center md:grid-cols-3 gap-4 md:gap-8 ">
          {list &&
            list.length > 0 &&
            list.map((box) => (
              <div key={box.title} className={cn("p-3 border w-full", box.isSelected && 'border-primary/70')}>
                <div className="border border-primary/20 text-center space-y-4 md:space-y-6 p-4 sm:p-12 w-full">
                    <h4 className="font-[family-name:var(--font-cormorant-upright)] uppercase font-light font-comparant text-2xl">{box.title}</h4>
                    <h3 className="font-[family-name:var(--font-cormorant-upright)] font-normal text-5xl"><sup className="font-light uppercase">chf</sup><span className="uppercase">{box.price}</span><sub className="font-[family-name:Roboto] font-extralight text-sm block">/per person</sub></h3>
                    <ul className="text-sm max-w-52 mx-auto space-y-4">
                    {box.benefits?.map((benefit, index) => <li key={`${benefit}-${index}}`} className="font-[family-name:var(--font-roboto)] leading-6 tracking-widest">{benefit}</li>)}
                    </ul>
                    <Link href={'#'} className="font-[family-name:var(--font-cormorant)] uppercase inline-block">Get Event Ticket <ArrowRight className="ml-2 inline-block h-4 w-4" /></Link>
                </div>
              </div>
            ))}
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
