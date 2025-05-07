import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import { Navlinks } from "../shared/Navlinks";
import { genres } from "@/lib/dummy-data";

const navLinks = [
  { href: "/new", label: "New" },
  { href: "/popular", label: "Popular" },
];

export const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 py-3 bg-background/60 backdrop-blur border-b">
      <Container>
        <nav className="w-full flex justify-between items-center">
          {/* Logo dan Navigasi */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo-vaynime.png" alt="logo" className="w-12 h-12" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Vaynime
              </span>
            </Link>

            {/* Navigasi Utama */}
            <ul className="flex gap-6 text-base font-medium text-muted-foreground">
              {navLinks.map(({ href, label }) => (
                <Navlinks key={href} href={href} label={label} />
              ))}

              {/* Dropdown Categories */}
              <li>
                <DropdownMenu onOpenChange={setIsCategoryOpen} modal={false}>
                  <DropdownMenuTrigger className="flex items-center gap-1 duration-300 font-medium ease-linear hover:text-primary ">
                    Categories
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCategoryOpen ? "rotate-180" : ""
                      }`}
                    />
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="start"
                    className="p-6 w-[700px] bg-background border shadow-xl grid grid-cols-[1fr_auto_2fr] gap-6 mt-2"
                  >
                    {/* Kategori Link */}
                    <div className="flex flex-col gap-3 text-sm">
                      <Link to="/browse-all" className="hover:underline">
                        Browse All (A-Z)
                      </Link>
                      <Link to="/calendar" className="hover:underline">
                        Release Calendar
                      </Link>
                      <Link to="/music-videos" className="hover:underline">
                        Music Videos & Concerts
                      </Link>
                    </div>

                    {/* Divider */}
                    <div className="w-px bg-border" />

                    {/* Genre List */}
                    <div>
                      <p className="text-xs font-semibold mb-2 text-muted-foreground">
                        GENRES
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        {genres.map((genre) => (
                          <Link
                            key={genre.id}
                            to={`/genre/${genre.id}`}
                            className="hover:underline hover:text-primary"
                          >
                            {genre.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>

          {/* Tombol Login */}
          <div>
            <Button variant="default">Login</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
};
