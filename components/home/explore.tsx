import Image from "next/image";
import { AppContainer } from "../global";
import { FC } from "react";
import { Button } from "../ui/button";
import { HeadingBox } from "./heading-box";

export const Explore: FC = () => {
  return (
    <div>
      <AppContainer className="max-w-full p-0 w-full relative">
        <Image
          src={"/explore-image.jpg"}
          height={1000}
          width={1000}
          alt="Explore image"
          className="w-full min-h-[40vh] sm:max-h-96 h-full object-cover sm:object-contain md:object-cover"
        />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-4 sm:max-w-xl lg:w-auto">
          <HeadingBox title="exotic shore cruises" withDescription={false} withSubTitle={false} />
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <Button className="py-6 px-8" variant={"outline"}>
              EXPLORE
            </Button>
            <Button className="py-6 px-8 text-card-foreground">VIEW MORE</Button>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
