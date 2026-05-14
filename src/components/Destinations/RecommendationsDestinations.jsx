import SectionHeading from "@/utils/SectionHeading";
import Image from "next/image";
import sylhet from "@/assets/teashop.png";
import bandorban from "@/assets/bandorban.png";
import marinIsland from "@/assets/marineisland.png";
import { MapPin } from "@gravity-ui/icons";

const RecommendationsDestinations = () => {
  return (
    <div className="py-12 px-4">
      <SectionHeading
        title="Seasonal Travel Recommendations"
        subtitle="Curated Just for You"
        textColor="text-[#10B981]"
      />
      {/* Recommendations Card Container */}
      <div className="grid lg:grid-cols-7 md:grid-cols-2   md:grid-rows-2 gap-x-10 gap-y-2 pt-6 ">
        {/* Recommendations Card  */}
        <div
          className="relative md:col-span-2 lg:col-span-4 lg:row-span-2 h-120 md:h-200 overflow-hidden rounded-3xl group
  border border-white/10 bg-black/20 shadow-2xl"
        >
          {/* Image */}
          <Image
            src={sylhet}
            alt="Sylhet Tea Highlands"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-linear-to-t 
    from-black via-black/40 to-transparent"
          />

          {/* Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    bg-gradient-to-br from-emerald-500/10 via-transparent to-sky-500/10"
          />

          {/* Content */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 lg:p-10 
    text-white"
          >
            {/* Badge */}
            <span
              className="inline-flex items-center rounded-full 
      bg-[#DE8712]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide 
      text-black shadow-lg backdrop-blur-md"
            >
              Monsoon Special
            </span>

            {/* Title */}
            <h3
              className="mt-4 text-2xl font-extrabold leading-tight 
      md:text-3xl xl:text-4xl"
            >
              Sylhet Tea Highlands
            </h3>

            {/* Description */}
            <p
              className="mt-3 max-w-xl text-sm leading-relaxed 
      text-gray-200 md:text-base"
            >
              Experience the mist-covered hills and aromatic tea gardens in
              their most vibrant green during the rains.
            </p>

            {/* Footer */}
            <div
              className="mt-6 flex flex-col gap-4 
      sm:flex-row sm:items-center sm:justify-between"
            >
              {/* Location */}
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full
          bg-sky-500/20 backdrop-blur-md"
                >
                  <MapPin className="h-5 w-5 text-sky-400" />
                </div>

                <span className="font-medium">Ratargul, Bisnakhandi</span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-2">
                <span className="text-sm text-gray-300">Starting From</span>

                <h4 className="text-3xl font-black text-emerald-400">$299</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Card  */}
        <div
          className="relative lg:col-span-3  h-98 overflow-hidden rounded-3xl group
  border border-white/10 bg-black/20 shadow-2xl"
        >
          {/* Image */}
          <Image
            src={bandorban}
            alt="Bandorban"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-linear-to-t 
    from-black via-black/40 to-transparent"
          />

          {/* Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    bg-linear-to-br from-emerald-500/10 via-transparent to-sky-500/10"
          />

          {/* Content */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 lg:p-10 
    text-white"
          >
            {/* Title */}
            <h3
              className="mt-4 text-xl lg:text-2xl font-extrabold leading-tight 
       "
            >
              Bandorban Peaks
            </h3>
            <div className="flex items-end gap-2">
              <span className="text-sm text-gray-300">Starting From</span>

              <h4 className="text-xl font-black text-emerald-400">$180</h4>
            </div>
          </div>
        </div>
        {/* Recommendations Card  */}
        <div
          className="relative lg:col-span-3  h-98 overflow-hidden rounded-3xl group
  border border-white/10 bg-black/20 shadow-2xl"
        >
          {/* Image */}
          <Image
            src={marinIsland}
            alt="Sylhet Tea Highlands"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-linear-to-t 
    from-black via-black/40 to-transparent"
          />

          {/* Glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100
    transition-opacity duration-500
    bg-linear-to-br from-emerald-500/10 via-transparent to-sky-500/10"
          />

          {/* Content */}
          <div
            className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 lg:p-10 
    text-white"
          >
            {/* Title */}
            <h3
              className="mt-4 text-xl lg:text-2xl font-extrabold leading-tight 
       "
            >
              Blue Marine Island
            </h3>
            <div className="flex items-end gap-2">
              <span className="text-sm text-gray-300">Starting From</span>

              <h4 className="text-xl font-black text-emerald-400">$450</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsDestinations;
