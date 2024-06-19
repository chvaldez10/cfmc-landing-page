import { FC } from "react";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ text }) => {
  return (
    <h2 className="text-4xl font-extrabold underline my-8 text-center">
      {text}
    </h2>
  );
};

export default SectionHeader;
