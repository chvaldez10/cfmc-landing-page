"use client";

import { FC } from "react";
import useInView from "@/hooks/useInView";
import { SectionHeader, SectionSubheader } from "@/components/core/ui";
import { FlexWrapper } from "@/components/core/hero";
import { HeroSectionProps } from "@/types/genericTypes";
import "@/styles/slide.css";

interface HeroSlideClientProps extends HeroSectionProps {
  isFloating?: boolean;
}

const HeroSlideClient: FC<HeroSlideClientProps> = ({
  children,
  header,
  longParagraph,
  containerClassName = "",
  reverse = false,
  isFloating = false,
}) => {
  const [textRef, textInView] = useInView();
  const [elementRef, elementInView] = useInView();

  const layoutClass = reverse ? "div-col-row-reverse" : "div-col-row";
  const textAnimationClass = textInView
    ? reverse
      ? "animate-slide-in-right"
      : "animate-slide-in-left"
    : "";
  const elementAnimationClass = elementInView
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
        className={`div-outside-width resize-width-to-half text-center gap-4 ${textAnimationClass}`}
        style={{ userSelect: "text" }}
      >
        <SectionHeader text={header} />
        <SectionSubheader
          text={longParagraph}
          containerClassName="long-paragraph-text-color"
        />
      </div>

      {/* Element Column */}
      <div
        ref={elementRef}
        className={`div-outside-width resize-width-to-half ${elementAnimationClass}`}
      >
        {children}
      </div>
    </FlexWrapper>
  );
};

export default HeroSlideClient;
