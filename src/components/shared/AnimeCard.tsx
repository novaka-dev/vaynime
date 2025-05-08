// src/shared/AnimeCard.tsx
import { Anime } from "@/types/anime";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

interface AnimeCardProps {
  anime: Anime;
  className?: string;
}

export const AnimeCard = ({ anime, className }: AnimeCardProps) => {
  return (
    <Link
      to={`/anime/series/${anime.id}`}
      className={`cursor-pointer ${className}`}
      style={{ userSelect: "none" }} // Prevent text selection
    >
      <div className="relative">
        {/* Anime Image */}
        <div className="aspect-[3/4.5] relative overflow-hidden will-change-transform z-10">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover "
          />

          {/* Hover Overlay details anime */}
          <div className="absolute bg-black/90 inset-0 opacity-0 hover:opacity-100 transition-opacity duration-100 p-4 flex flex-col justify-end">
            <div className="text-white">
              <h3 className="font-bold text-md mb-1">{anime.title}</h3>
              <div className="flex items-center gap-1 mb-1">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500 " />
                <span className="text-sm font-semibold">{anime.rating}</span>
              </div>
              <p className="text-xs mb-3 line-clamp-3">{anime.description}</p>
              <div className="text-xs">
                <div className="mb-1">{anime.episodes}</div>
                <span>
                  {anime.season} {anime.year}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Badge */}
        <Badge
          variant={"secondary"}
          className="absolute top-2 left-2 px-2 py-1 rounded-full flex items-center gap-1"
        >
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-semibold">{anime.rating}</span>
        </Badge>

        {/* Anime Info */}
        <div className="mt-2">
          <h3 className="font-semibold text-sm line-clamp-1">{anime.title}</h3>
          <div className="flex justify-between items-center mt-1 text-xs text-muted-foreground">
            <span>{anime.episodes}</span>
            <span>
              {anime.season} {anime.year}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
