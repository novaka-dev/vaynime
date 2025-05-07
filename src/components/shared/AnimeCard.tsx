// src/shared/AnimeCard.tsx
import { Anime } from "@/types/anime";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

interface AnimeCardProps {
  anime: Anime;
  className?: string;
}

export const AnimeCard = ({ anime, className }: AnimeCardProps) => {
  return (
    <Link
      to={`/anime/${anime.id}`}
      className={`block group cursor-pointer ${className}`}
      style={{ userSelect: "none" }} // Prevent text selection
    >
      <div className="relative overflow-hidden rounded-lg">
        {/* Anime Image */}
        <div className="aspect-[3/4] relative bg-gray-800 rounded-lg overflow-hidden">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-semibold">{anime.rating}</span>
        </div>

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
