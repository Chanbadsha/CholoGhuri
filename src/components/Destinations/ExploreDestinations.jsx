import Image from "next/image";
import dhakaImg from "@/assets/lalbag.png";
import sundarban from "@/assets/sundarbansafari.png";
import nilgiri from "@/assets/nilgiri.png";
import stmartin from "@/assets/river.png";
import { MapPin } from "@gravity-ui/icons";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";

const ExploreDestinations = () => {
  return (
    <div className="px-4 py-16">
      {/* Section Heading */}
      <div className="mb-14 max-w-3xl text-left text-white">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 rounded-full 
    border border-sky-400/20 bg-sky-500/10 
    px-4 py-1.5 text-sm font-medium tracking-wide text-sky-300"
        >
          ✈ Discover Bangladesh
        </span>

        {/* Main Heading */}
        <h2
          className="mt-5 text-4xl font-extrabold leading-tight 
    md:text-5xl lg:text-6xl"
        >
          Find Your Next
          <span className="block text-sky-400">Dream Destination</span>
        </h2>

        {/* Description */}
        <p
          className="mt-5 max-w-2xl text-base leading-relaxed 
    text-gray-400 md:text-lg"
        >
          From misty mountains and pristine beaches to vibrant cities and
          untouched forests — uncover unforgettable journeys crafted for every
          traveler.
        </p>
      </div>

      {/* Destination Cards */}
      <div
        className="grid grid-cols-1 gap-6 
    md:grid-cols-2 xl:grid-cols-4"
      >
        {/* CARD */}
        <div
          className="group overflow-hidden rounded-3xl border border-white/10 
      bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      transition-all duration-500 hover:-translate-y-2 
      hover:border-sky-400/40"
        >
          {/* Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={dhakaImg}
              alt="Dhaka Heritage Tour"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t 
          from-black/80 via-black/20 to-transparent"
            />

            <span
              className="absolute left-4 top-4 rounded-full 
          bg-emerald-500/90 px-4 py-1 text-xs font-bold uppercase 
          tracking-wide text-white"
            >
              City Experience
            </span>
          </div>

          {/* Content */}
          <div className="space-y-5 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="text-xl font-bold transition-colors duration-300 
              group-hover:text-sky-400"
                >
                  Dhaka Heritage Trail
                </h3>

                <p
                  className="mt-2 flex items-center gap-2 
              text-sm text-gray-300"
                >
                  <MapPin className="h-4 w-4 text-sky-400" />
                  Old Dhaka, Bangladesh
                </p>
              </div>

              <div className="text-right">
                <span className="block text-2xl font-black text-emerald-400">
                  $120
                </span>

                <span className="text-xs text-gray-400">Per Person</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Walk through centuries of culture, historic architecture,
              traditional cuisine, and bustling local markets.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <Chip
                className="border border-sky-400/20 bg-sky-500/10 text-sky-300"
                variant="bordered"
              >
                Historical
              </Chip>

              <Chip
                className="border border-yellow-400/20 bg-yellow-500/10 text-yellow-300"
                variant="bordered"
              >
                Food Tour
              </Chip>

              <Chip
                className="border border-pink-400/20 bg-pink-500/10 text-pink-300"
                variant="bordered"
              >
                2 Days
              </Chip>
            </div>

            <Link href="/" className="block">
              <Button
                className="h-12 w-full rounded-2xl bg-sky-500 
            font-semibold text-white transition-all duration-300 
            hover:bg-sky-400 hover:shadow-lg 
            hover:shadow-sky-500/30"
              >
                Explore Details
              </Button>
            </Link>
          </div>
        </div>

        {/* CARD */}
        <div
          className="group overflow-hidden rounded-3xl border border-white/10 
      bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      transition-all duration-500 hover:-translate-y-2 
      hover:border-emerald-400/40"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={sundarban}
              alt="Sundarban Safari"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t 
          from-black/80 via-black/20 to-transparent"
            />

            <span
              className="absolute left-4 top-4 rounded-full 
          bg-emerald-500/90 px-4 py-1 text-xs font-bold uppercase 
          tracking-wide text-white"
            >
              Wildlife Escape
            </span>
          </div>

          <div className="space-y-5 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="text-xl font-bold transition-colors duration-300 
              group-hover:text-emerald-400"
                >
                  Sundarban Safari
                </h3>

                <p
                  className="mt-2 flex items-center gap-2 
              text-sm text-gray-300"
                >
                  <MapPin className="h-4 w-4 text-emerald-400" />
                  Khulna, Bangladesh
                </p>
              </div>

              <div className="text-right">
                <span className="block text-2xl font-black text-emerald-400">
                  $220
                </span>

                <span className="text-xs text-gray-400">Per Person</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Cruise through the world’s largest mangrove forest and experience
              rare wildlife and breathtaking riverside scenery.
            </p>

            <div className="flex flex-wrap gap-2">
              <Chip
                className="border border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                variant="bordered"
              >
                Adventure
              </Chip>

              <Chip
                className="border border-sky-400/20 bg-sky-500/10 text-sky-300"
                variant="bordered"
              >
                Guided Tour
              </Chip>

              <Chip
                className="border border-pink-400/20 bg-pink-500/10 text-pink-300"
                variant="bordered"
              >
                3 Days
              </Chip>
            </div>

            <Link href="/" className="block">
              <Button
                className="h-12 w-full rounded-2xl bg-emerald-500 
            font-semibold text-white transition-all duration-300 
            hover:bg-emerald-400 hover:shadow-lg 
            hover:shadow-emerald-500/30"
              >
                Explore Details
              </Button>
            </Link>
          </div>
        </div>

        {/* CARD */}
        <div
          className="group overflow-hidden rounded-3xl border border-white/10 
      bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      transition-all duration-500 hover:-translate-y-2"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={stmartin}
              alt="St Martin Island"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t 
          from-black/80 via-black/20 to-transparent"
            />

            <span
              className="absolute left-4 top-4 rounded-full 
          bg-cyan-500/90 px-4 py-1 text-xs font-bold uppercase 
          tracking-wide text-white"
            >
              Island Escape
            </span>
          </div>

          <div className="space-y-5 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="text-xl font-bold transition-colors duration-300 
              group-hover:text-cyan-400"
                >
                  St Martin Paradise
                </h3>

                <p
                  className="mt-2 flex items-center gap-2 
              text-sm text-gray-300"
                >
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  Cox’s Bazar, Bangladesh
                </p>
              </div>

              <div className="text-right">
                <span className="block text-2xl font-black text-cyan-400">
                  $180
                </span>

                <span className="text-xs text-gray-400">Per Person</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Relax on crystal-clear beaches, enjoy fresh seafood, and witness
              unforgettable sunsets by the Bay of Bengal.
            </p>

            <div className="flex flex-wrap gap-2">
              <Chip
                className="border border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
                variant="bordered"
              >
                Beach
              </Chip>

              <Chip
                className="border border-yellow-400/20 bg-yellow-500/10 text-yellow-300"
                variant="bordered"
              >
                Sunset
              </Chip>

              <Chip
                className="border border-pink-400/20 bg-pink-500/10 text-pink-300"
                variant="bordered"
              >
                2 Days
              </Chip>
            </div>

            <Link href="/" className="block">
              <Button
                className="h-12 w-full rounded-2xl bg-cyan-500 
            font-semibold text-white transition-all duration-300 
            hover:bg-cyan-400 hover:shadow-lg 
            hover:shadow-cyan-500/30"
              >
                Explore Details
              </Button>
            </Link>
          </div>
        </div>

        {/* CARD */}
        <div
          className="group overflow-hidden rounded-3xl border border-white/10 
      bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      transition-all duration-500 hover:-translate-y-2"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={nilgiri}
              alt="Nilgiri Hills"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div
              className="absolute inset-0 bg-gradient-to-t 
          from-black/80 via-black/20 to-transparent"
            />

            <span
              className="absolute left-4 top-4 rounded-full 
          bg-violet-500/90 px-4 py-1 text-xs font-bold uppercase 
          tracking-wide text-white"
            >
              Mountain Retreat
            </span>
          </div>

          <div className="space-y-5 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="text-xl font-bold transition-colors duration-300 
              group-hover:text-violet-400"
                >
                  Nilgiri Cloud Escape
                </h3>

                <p
                  className="mt-2 flex items-center gap-2 
              text-sm text-gray-300"
                >
                  <MapPin className="h-4 w-4 text-violet-400" />
                  Bandarban, Bangladesh
                </p>
              </div>

              <div className="text-right">
                <span className="block text-2xl font-black text-violet-400">
                  $260
                </span>

                <span className="text-xs text-gray-400">Per Person</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">
              Wake up above the clouds and discover breathtaking mountain
              landscapes, waterfalls, and tribal culture.
            </p>

            <div className="flex flex-wrap gap-2">
              <Chip
                className="border border-violet-400/20 bg-violet-500/10 text-violet-300"
                variant="bordered"
              >
                Mountain
              </Chip>

              <Chip
                className="border border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                variant="bordered"
              >
                Nature
              </Chip>

              <Chip
                className="border border-pink-400/20 bg-pink-500/10 text-pink-300"
                variant="bordered"
              >
                4 Days
              </Chip>
            </div>

            <Link href="/" className="block">
              <Button
                className="h-12 w-full rounded-2xl bg-violet-500 
            font-semibold text-white transition-all duration-300 
            hover:bg-violet-400 hover:shadow-lg 
            hover:shadow-violet-500/30"
              >
                Explore Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDestinations;
