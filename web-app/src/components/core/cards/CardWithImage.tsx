"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import PurplePillButton from "../buttons/PurplePillButton";
import SectionSubheader from "../text/SectionSubheader";
import NextImage from "../gallery/NextImage";

interface CardWithImageProps {
  src: string;
  title: string;
  alt: string;
  description: string;
  url: string;
}

const CardWithImage: FC<CardWithImageProps> = ({
  src,
  title,
  alt,
  description,
  url,
}) => {
  const router = useRouter();

  return (
    <div className="bg-white-0 border flex flex-col border-gray-200 rounded-lg shadow hover-animation hover-up ">
      <NextImage
        width={"w-full"}
        height={"h-96"}
        src={src}
        alt={alt}
        imageClassName={"rounded-t-lg object-center"}
      />

      <div className="flex flex-col p-5 flex-grow">
        <SectionSubheader
          text={title}
          className="mb-2 font-bold tracking-tight"
        />
        <p className="mb-3 font-normal text-gray-600 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <PurplePillButton onClick={() => router.push(url)} variant="filled">
            Learn More <FaArrowRight />
          </PurplePillButton>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
