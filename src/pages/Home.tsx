// pages/Home.tsx

import { PopularAnime } from "@/components/sections/PopularAnime";
import { Hero } from "../components/sections/Hero"; // Komponen Hero

export function Home() {
  return (
    <>
      <Hero /> {/* Hanya muncul di homepage */}
      <PopularAnime />
    </>
  );
}
