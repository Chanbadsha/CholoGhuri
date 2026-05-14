import { Star } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const TourPackageCard = ({ tour }) => {
  const { images, title, slug, rating, duration, pricing, shortDescription } =
    tour;
  return (
    <div
      className="group flex flex-col relative overflow-hidden rounded-3xl border border-white/10 
  bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)] 
  transition-all duration-500 hover:-translate-y-2 hover:border-sky-400/40"
    >
      {/* Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
    transition-opacity duration-500 bg-linear-to-br 
    from-sky-500/10 via-transparent to-emerald-500/10"
      />

      {/* Image Section */}
      <section className="relative h-64 overflow-hidden">
        <Image
          src={images}
          alt={title}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t 
      from-black/70 via-black/10 to-transparent"
        />

        {/* Duration Badge */}
        <span
          className="absolute top-4 left-4 rounded-full 
      bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white 
      backdrop-blur-md"
        >
          {duration?.days} Days / {duration?.nights} Nights
        </span>

        {/* Rating */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1 
      rounded-full bg-black/40 px-3 py-1 text-sm text-yellow-400 backdrop-blur-md"
        >
          <Star className="h-4 w-4 fill-yellow-400" />
          <span>{rating?.average}</span>
        </div>
      </section>

      {/* Content */}
      <section className="space-y-4 flex-1 flex flex-col justify-between   p-5 ">
        {/* Title */}
        <div className="flex-1 h-full ">
          <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-white">
            {title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {shortDescription}
          </p>
        </div>

        {/* Footer */}
        <div className="flex flex-1 items-center  justify-between">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-sky-400">
              {pricing?.discountPrice}
              <span className="ml-1 text-lg">{pricing?.currency}</span>
            </span>

            <span className="text-xs text-gray-500">per person</span>
          </div>

          {/* Button */}
          <Link
            href={`/tours/${slug}`}
            className="rounded-full border border-sky-400/30 
        bg-sky-500/10 px-5  z-40 py-2 text-sm font-medium text-sky-300 
        transition-all duration-300 hover:bg-sky-500 hover:text-white"
          >
            View Details
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TourPackageCard;
