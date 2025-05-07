// src/sections/PopularAnime.tsx
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { popularAnime } from "@/data/popularAnime";
import { Button } from "../ui/button";
import { AnimeCard } from "../shared/AnimeCard";

export const PopularAnime = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: "auto" },
    },
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Near You</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="rounded-full bg-white/10 hover:bg-white/20 border-white/20"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="rounded-full bg-white/10 hover:bg-white/20 border-white/20"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {popularAnime.map((anime) => (
              <div
                key={anime.id}
                className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_23%] xl:flex-[0_0_18%] px-2"
              >
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
