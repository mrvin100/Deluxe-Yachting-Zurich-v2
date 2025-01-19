import Image from "next/image";
import { AppContainer, Spacer } from "../global";
import { FC } from "react";
import { HeadingBox } from "./heading-box";
interface Gallery {
  title?: string;
  subTitle?: string;
  image?: string;
}
const list: Gallery[] = [
  { image: "/images/list-img-2.webp", title: "Le studio 45", subTitle: "Elegant Art Deco Salon Cruiser" },
  { image: "/images/list-img-3.webp", title: "Donna anna", subTitle: "Timeless Venetian Wooden Motoscafo" },
];
export const Gallery: FC = () => {
  return (
    <div>
      <AppContainer className="places-cover1">
        <HeadingBox title="discover our fleet" subTitle="experience the style of a golden era" description="Step aboard our classic wooden and steel motor boats for bespoke cruises on Lake Zurich. Enjoy timeless elegance, exceptional service, and unforgettable experiences." />
        <Spacer small />
        <div className="flex justify-center items-center md:items-start flex-col md:flex-row gap-6">
          {list &&
            list.length > 0 &&
            list.map((box) => (
              <div key={box.title} className="p-2 border-primary/50 border w-full max-w-md">
                <Image
                  src={box.image ?? "/logo-light.png"}
                  height={800}
                  width={800}
                  alt="Brand image"
                  className="mx-auto h-auto max-h-44 sm:max-h-full sm:h-80 w-full object-cover"
                />
                <HeadingBox withDescription={false} subTitle={box.subTitle} title={box.title} subTitleStyle="normal-case" titleStyle="text-xl" />
              </div>
            ))}
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
