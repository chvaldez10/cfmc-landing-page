import { FC, ReactNode } from "react";
import { FlexCenter, Box } from "@/components/core/ui";
import "@/styles/hero-floating.css";

interface FlexWrapperProps {
  children: ReactNode;
  containerClassName: string | undefined;
  layoutClass: string;
  isFloating?: boolean;
}

// Wraps children in a flex center and boxes it with width 10/12 for large screens and full width for small screens
const FlexWrapper: FC<FlexWrapperProps> = ({
  children,
  containerClassName,
  layoutClass,
  isFloating = false,
}) => {
  return (
    <FlexCenter
      containerClassName={`p-4 lg:p-0 ${
        isFloating ? "hero-floating" : ""
      } ${containerClassName}`}
    >
      <Box containerClassName={`resize-hero-width gap-4 ${layoutClass}`}>
        {children}
      </Box>
    </FlexCenter>
  );
};

export default FlexWrapper;
