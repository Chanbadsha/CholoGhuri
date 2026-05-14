"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import NavLinks from "@/utils/NavLinks";
import { Bell, Heart } from "@gravity-ui/icons";

const NavLink = [
  { pathUrl: "/", pathName: "Home" },
  { pathUrl: "/destinations", pathName: "Destinations" },
  { pathUrl: "/tours", pathName: "Tours" },
  { pathUrl: "/hotels", pathName: "Hotels" },
  { pathUrl: "/flights", pathName: "Flights" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a1225]">
      <nav
        className="sticky top-0 z-50 w-full border-b border-white/10 
      bg-black/20 backdrop-blur-xl text-white"
      >
        <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Mobile menu */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl 
              bg-sky-500/10 border border-sky-400/20 text-sky-400 
              group-hover:scale-105 transition-transform"
              >
                ✈
              </div>

              <h1 className="text-xl font-extrabold tracking-wide text-white lg:text-2xl">
                CholoGhuri
              </h1>
            </div>
          </div>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-6 md:flex">
            {NavLink.map((nav, ind) => (
              <NavLinks key={ind} pathUrl={nav.pathUrl}>
                {nav.pathName}
              </NavLinks>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <button className="relative hover:text-pink-400 transition">
              <Heart />
            </button>

            <button className="relative hover:text-sky-400 transition">
              <Bell />
            </button>

            <Button
              className="rounded-full bg-sky-500 px-5 font-medium 
              text-white hover:bg-sky-400 transition"
            >
              Book Now
            </Button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/30">
            <ul className="flex flex-col gap-3 p-5">
              {NavLink.map((nav, ind) => (
                <NavLinks key={ind} pathUrl={nav.pathUrl}>
                  {nav.pathName}
                </NavLinks>
              ))}

              <div className="flex items-center gap-4 pt-4">
                <Heart />
                <Bell />
                <Button className="w-full bg-sky-500 text-white">
                  Book Now
                </Button>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
