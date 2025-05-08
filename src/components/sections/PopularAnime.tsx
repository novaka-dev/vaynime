import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { popularAnime } from "@/data/popularAnime";
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
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className=" py-16 relative min-h-[150vh]">
      <div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-0" />
      <div className="flex justify-between items-center mb-4 px-10">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 pb-2 to-primary bg-clip-text text-transparent">
          Popular Near You
        </h2>
      </div>

      <div className="relative">
        {/* Tombol kiri */}
        {prevBtnEnabled && (
          <button
            onClick={scrollPrev}
            aria-label="Scroll left"
            className="absolute left-0 top-0 h-full w-12 z-20 flex items-center justify-center bg-gradient-to-r from-black/30 to-transparent hover:from-black/60 transition-all duration-500 "
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>
        )}

        {/* Tombol kanan */}
        {nextBtnEnabled && (
          <button
            onClick={scrollNext}
            aria-label="Scroll right"
            className="absolute right-0 top-0 h-full w-12 z-20 flex items-center justify-center transition-all duration-500 bg-gradient-to-l from-black/30 to-transparent hover:from-black/60 "
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>
        )}

        {/* Efek vignette kiri */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-zinc-950 to-transparent" />

        {/* Efek vignette kanan */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-zinc-950 to-transparent" />

        {/* Carousel */}
        <div className="overflow-hidden px-4 sm:px-6 lg:px-8" ref={emblaRef}>
          <div className="flex gap-4 will-change-transform">
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
