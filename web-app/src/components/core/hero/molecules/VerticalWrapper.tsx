import { FC } from "react";
import { FlexCenter } from "@/components/core/ui";
import { DivProps } from "@/types/genericTypes";
import ParticlesBackground from "@/components/core/background/ParticlesBackground";

interface VerticalWrapperProps extends DivProps {
  itemClassName?: string | undefined;
}

const VerticalWrapper: FC<VerticalWrapperProps> = ({
  children,
  containerClassName,
  itemClassName,
}) => {
  return (
    <FlexCenter containerClassName={`gap-4 ${containerClassName}`}>
      <ParticlesBackground />
      <FlexCenter
        containerClassName={`z-10 resize-hero-width gap-4 ${itemClassName}`}
      >
        {children}
      </FlexCenter>
    </FlexCenter>
  );
};

export default VerticalWrapper;
