"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
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
      <nav className="sticky top-0 z-40 w-full border-b border-separator  bg-background/40 bg-transparent text-white backdrop-blur-lg">
        <header className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
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
            <div className="flex items-center gap-3">
              {/* spellchecker: disable */}
              <h1 className="font-extrabold lg:text-2xl text-[#0EA5E9] ">
                CholoGhuri
              </h1>
              {/* spellchecker: enable */}
            </div>
          </div>
          <ul className="hidden items-center gap-4 md:flex">
            {NavLink.map((navLink, ind) => (
              <NavLinks key={ind} pathUrl={navLink.pathUrl}>
                {navLink.pathName}
              </NavLinks>
            ))}
          </ul>
          <div className="hidden items-center gap-4 md:flex">
            <span>
              <Heart />
            </span>
            <span>
              <Bell />
            </span>
            <Button>Book Now</Button>
          </div>
        </header>
        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              {NavLink.map((navLink, ind) => (
                <NavLinks key={ind} pathUrl={navLink.pathUrl}>
                  {navLink.pathName}
                </NavLinks>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
