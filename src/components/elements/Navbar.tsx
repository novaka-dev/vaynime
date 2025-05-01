import { Container } from "../shared/Container";
import { Navlinks } from "../shared/Navlinks";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Anime Popular", href: "/populer" },
  { label: "Genre", href: "/genre" },
  { label: "Jadwal", href: "/jadwal" },
];

export const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6">
      <Container>
        <nav className="w-full flex gap-6 relative justify-between">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="flex relative items-center gap-2">
              <img
                src="/public/vaynime-logo.png"
                alt="logo"
                className="w-16 h-16"
              />
              <div className="font-semibold inline-flex text-lg ">Vaynime</div>
            </a>
          </div>

          {/* Nav Links */}
          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                      absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                      border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                        pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 
                        text-lg text-heading-2 w-full lg:justify-center lg:items-center"
            >
              {navLinks.map((Link, index) => (
                <Navlinks key={index} href={Link.href} label={Link.label} />
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};
