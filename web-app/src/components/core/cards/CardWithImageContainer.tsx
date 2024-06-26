import { FC } from "react";
import CardWithImage from "./CardWithImage";
import { cardWithImageItems } from "@/data/hero/cardWithImage";

const CardWithImageContainer: FC<{}> = () => {
  return (
    <div className="div-outside-width mx-auto p-5 md:p-0 gap-4 ">
      <div className="w-full grid grid-rows-4 grid-cols-1 md:grid-rows-2 md:grid-cols-2 gap-4 py-8 md:w-10/12">
        {cardWithImageItems.map((item, index) => (
          <CardWithImage
            key={item.title}
            src={item.src}
            title={item.title}
            alt={item.alt}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default CardWithImageContainer;
