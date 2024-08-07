"use client";

import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { EventCard } from "@/components/core/cards";
import useSlidesPerView from "@/hooks/useSlidesPerView";
import { LoadingSkeleton } from "@/components/core/loader";
import { EventDataProps } from "@/types/supabaseTypes";

const breakpoints: { screenSize: number; slidesPerView: number }[] = [
  { screenSize: 640, slidesPerView: 2 },
];

interface SwiperScrollbarProps {
  events: EventDataProps[] | null;
}

const SwiperScrollbar: FC<SwiperScrollbarProps> = ({ events }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const slidesPerView = useSlidesPerView(breakpoints);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex gap-2">
          {[...Array(slidesPerView)].map((_, index) => (
            <LoadingSkeleton key={index} containerClassName="w-full md:w-1/2" />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          slidesPerView={1}
          spaceBetween={30}
          className="scrollbar cursor-grabbing"
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
        >
          {/* mocking eventData */}
          {events?.map((currentEvent, index) => (
            <SwiperSlide key={index} className="my-8">
              <EventCard {...currentEvent} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default SwiperScrollbar;
