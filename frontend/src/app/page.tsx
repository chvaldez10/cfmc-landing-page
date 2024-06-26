import SimpleCard from "@/components/core/cards/SimpleCard";
import HeroCollage from "@/components/core/hero/HeroCollage";
import HeroWithSlideAnimation from "@/components/core/hero/HeroWithSlideAnimation";
import IframeMap from "@/data/hero/IframeMap";
import Footer from "@/components/Footer/Footer";

import CardWithImageContainer from "@/components/core/cards/CardWithImageContainer";
import { cardContainerItems } from "@/data/hero/CardContainer";

import EventBlog from "@/components/core/hero/EventBlog";
import { upcomingEvents } from "@/data/testData/upcomingEvents";

import HeroTextImage from "@/components/core/hero/HeroTextImage";

const sampleVerse = `Children, obey your parents in the Lord, for this is right. “Honor your father and mother”—which is the first commandment with a promise— “so that it may go well with you and that you may enjoy long life on the earth.” (Ephesians 6:1-3 NIV)`;

export default function Home() {
  return (
    <>
      <HeroCollage />
      <HeroWithSlideAnimation
        key={"Hero Map"}
        header={"Sunday Service"}
        verbiage="2:00 PM | 419 Northmount Drive NW, Calgary, AB"
        element={<IframeMap />}
        backgroundColor="bg-green-10"
      />
      <HeroTextImage
        header={"5th Sunday After Pentecost"}
        subheader={"Men's Empowerment Month"}
        longParagraph={sampleVerse}
      />
      <EventBlog events={upcomingEvents} />
      <CardWithImageContainer />
      <SimpleCard cardContainerItems={cardContainerItems} />
      <Footer />
    </>
  );
}
