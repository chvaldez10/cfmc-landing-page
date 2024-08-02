"use client";

import { FC, ReactNode } from "react";
import useInView from "@/hooks/useInView";
import SectionHeader from "../text/SectionHeader";
import SectionSubheader from "../text/SectionSubheader";
import FlexWrapper from "./molecules/FlexWrapper";
import { heroSection } from "@/types/genericTypes";
import "@/styles/slide.css";

interface HeroSlideClientProps extends heroSection {
  element: ReactNode;
  isFloating?: boolean;
}

const HeroSlideClient: FC<HeroSlideClientProps> = ({
  header,
  longParagraph,
  element,
  reverse = false,
  containerClassName = "",
  isFloating = false,
}) => {
  const [textRef, textInView] = useInView();
  const [mapRef, mapInView] = useInView();

  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";
  const textAnimationClass = textInView
    ? reverse
      ? "animate-slide-in-right"
      : "animate-slide-in-left"
    : "";
  const mapAnimationClass = mapInView
    ? reverse
      ? "animate-slide-in-left"
      : "animate-slide-in-right"
    : "";

  return (
    <FlexWrapper
      containerClassName={containerClassName}
      layoutClass={layoutClass}
      isFloating={isFloating}
    >
      {/* Text Column */}
      <div
        ref={textRef}
        className={`div-outside-width resize-width-to-half text-center  gap-4 ${textAnimationClass}`}
      >
        <SectionHeader text={header} />
        <SectionSubheader text={longParagraph} className="text-gray-700" />
      </div>

      {/* Element Column */}
      <div
        ref={mapRef}
        className={`div-outside-width resize-width-to-half p-4 h-96 md:h-576 ${mapAnimationClass}`}
      >
        {element}
      </div>
    </FlexWrapper>
  );
};

export default HeroSlideClient;
