import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Button } from "../ui/button";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Bookmark, Play } from "lucide-react";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css/bundle";

const animeList = [
  {
    title: "One Piece",
    description:
      "Embark on a voyage of a lifetime with One Piece. The epic anime series created by Eiichiro Oda captivates the hearts of fans across generations.",
    image: "/images/onepiece-banner.jpg",
    rating: "9.5/10",
    tags: ["Action", "Adventure", "Fantasy", "Comedy", "Shouhen"],
    button: "Watch Now",
  },
  {
    title: "Attack on Titan",
    description:
      "Humans are on the brink of extinction by monstrous Titans. Follow Eren and his comrades in a desperate battle for survival.",
    image: "/images/aot-banner.jpg",
    rating: "18+",
    tags: ["Action", "Drama", "Fantasy"],
    button: "Start Watching Final Season",
  },
  {
    title: "Demon Slayer",
    description:
      "After his family is slaughtered by demons, Tanjiro embarks on a journey to become a demon slayer and cure his sister.",
    image: "/images/kny.jpg",
    rating: "9.0/10",
    tags: ["Action", "Supernatural", "Historical"],
    button: "Join the Hunt",
  },
];

const CustomNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-10 right-10 z-20 flex gap-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export function Hero() {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  // const onAutoplayTimeLeft = (_: unknown, time: number, progress: number) => {
  //   if (progressCircle.current && progressContent.current) {
  //     progressCircle.current.style.setProperty(
  //       "--progress",
  //       String(1 - progress)
  //     );
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // };

  return (
    <section className="w-full h-screen overflow-hidden relative">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className} !w-2 !h-2 !bg-white !opacity-50 hover:!opacity-100 !transition-all !duration-300 !mx-1"></span>`;
          },
          dynamicBullets: true,
        }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        className="h-full"
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        {animeList.map((anime, index) => (
          <SwiperSlide key={index} className="h-screen relative z-0">
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${anime.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="relative z-10 flex flex-col justify-center h-full max-w-3xl px-10 text-white">
                <div className="mb-4">
                  <span className="bg-purple-500 text-xs px-2 py-1 rounded font-medium">
                    {anime.rating}
                  </span>
                </div>

                <h1 className="text-5xl font-bold animate-fade-in-up">
                  {anime.title}
                </h1>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {anime.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-gray-200 animate-fade-in-up delay-100 max-w-lg">
                  {anime.description}
                </p>

                <div className="mt-6 flex gap-4 items-center animate-fade-in-up delay-200">
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/30 flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    {anime.button}
                  </Button>
                  <button className="border border-white/50 p-2 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 group">
                    <Bookmark className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <CustomNavigation />

        {/* Autoplay progress indicator */}
        <div className="autoplay-progress absolute bottom-6 left-10 z-20 flex items-center">
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="w-10 h-10 rotate-[-90deg]"
          >
            <circle
              cx="24"
              cy="24"
              r="18"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeDasharray="113"
              strokeDashoffset="calc(113 * (1 - var(--progress, 0)))"
            />
          </svg>
          <span
            ref={progressContent}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xs font-medium"
          ></span>
        </div>
      </Swiper>
    </section>
  );
}
