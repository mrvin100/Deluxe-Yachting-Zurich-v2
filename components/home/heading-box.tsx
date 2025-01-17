import { cn } from "@/lib/utils";
import { FC } from "react";
interface HeadingBoxProps {
  title?: string;
  subTitle?: string;
  description?: string
  descriptionStyle?: string
  className?: string
  withSubTitle?:boolean
  withDescription?:boolean
  subTitleStyle?:string
  titleStyle?:string
}
export const HeadingBox: FC<HeadingBoxProps> = ({ title, subTitle, description, className, withDescription = true, withSubTitle = true, subTitleStyle, titleStyle, descriptionStyle }) => {
  return (
    <div className={cn("text-center space-y-3 my-8", className)}>
      {withSubTitle &&<h4 className={cn("text-xs text-primary font-light uppercase tracking-[.2rem] w-full", subTitleStyle)}>{subTitle ?? "explore lake zurich"}</h4>}
      <h2 className={cn("font-[family-name:var(--font-cormorant-upright)] text-4xl uppercase tracking-[.3rem] --font-cormorant text-card-foreground font-light", titleStyle)}>{title ?? "discover hidden gems"}</h2>
      {withDescription && <p className={cn("font-[family-name:var(--font-roboto)] my-2 max-w-xl mx-auto", descriptionStyle)}>
        {description ?? "Explore, relax, and indulge. Immerse yourself in the beauty of Lake Zurich as you sail through tranquil waters, uncover hidden treasures, and create memories that last a lifetime. Our curated experiences offer the perfect blend of luxury and adventure."}
      </p>}
    </div>
  );
};
