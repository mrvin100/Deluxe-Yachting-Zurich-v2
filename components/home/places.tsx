import { AppContainer, Spacer } from "../global";
import { FC } from "react";
import { HeadingBox } from "./heading-box";

export const Places: FC = () => {
  return (
    <div>
      <AppContainer className="places-cover1">
        <HeadingBox className="max-w-4xl mx-auto text-left" descriptionStyle="ml-0" />
        <Spacer small />
        <div className="places-cover2 min-h-[40vh] grid place-content-center">
          <HeadingBox title="comming soon.." titleStyle="text-xl" withSubTitle={false} withDescription={false} />
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
