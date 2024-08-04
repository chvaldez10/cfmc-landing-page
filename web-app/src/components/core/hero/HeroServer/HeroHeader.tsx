import { FC } from "react";
import VerticalWrapper from "../molecules/VerticalWrapper";
import MainGradientHeader from "@/components/core/text/atoms/MainGradientHeader";
import HeroTextWrapper from "../molecules/HeroTextWrapper";
import SectionSubheader from "../../text/atoms/SectionSubheader";

interface HeroHeaderProps {
  title: string;
  verbiage: string;
}

const HeroHeader: FC<HeroHeaderProps> = ({ title, verbiage }) => {
  return (
    <VerticalWrapper itemClassName={"h-[80vh] "}>
      <HeroTextWrapper>
        <MainGradientHeader text={title} />
        <SectionSubheader text={verbiage} className={"bg-white-10"} />
      </HeroTextWrapper>
    </VerticalWrapper>
  );
};

export default HeroHeader;
