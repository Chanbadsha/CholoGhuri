import SectionHeading from "@/utils/SectionHeading";
import Image from "next/image";
import coxbazar from "@/assets/coxbazar.png";
import sundarban from "@/assets/sundarban.png";
import dhaka from "@/assets/dhaka.png";
import sylhet from "@/assets/sylhet.png";
const ExploreSection = () => {
  return (
    <div className="container  px-3 mx-auto py-8 lg:py-16">
      <SectionHeading
        title="Explore the Beauty of Bangladesh"
        subtitle="Cultural & Natural Wonders"
        textColor="text-[#10B981]"
      />

      <section className="grid pt-5 lg:pt-10 grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-3  grid-rows-2">
        {/* Coxbazar */}
        <div className="lg:col-span-2 lg:mb-4 lg:mr-4 relative max-h-72 lg:max-h-90 rounded-2xl overflow-hidden group shadow-xl">
          {/* Image */}
          <Image
            src={coxbazar}
            alt="Cox Bazar Image"
            width={800}
            height={800}
            className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          {/* Optional: content layer */}
          <div className="absolute bottom-4 left-4 z-10">
            <h2 className="text-white text-lg font-semibold">Cox’s Bazar</h2>
            <p className="text-white/70 text-sm">
              The world&apos;s longest natural sea beach
            </p>
          </div>
        </div>

        {/* Sylhet */}
        <div className="lg:row-span-2 relative max-h-72 lg:max-h-180 rounded-2xl overflow-hidden  group">
          {/* Image */}
          <Image
            src={sylhet}
            alt="Sylhet Image"
            width={800}
            height={800}
            className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          {/* Optional: content layer */}
          <div className="absolute bottom-4 left-4 z-10">
            <h2 className="text-white text-lg font-semibold">Sylhet</h2>
            <p className="text-white/70 text-sm">
              Emerald tea gardens and mystical swamps
            </p>
          </div>
        </div>

        {/* Sundarban */}
        <div className=" lg:mb-4 lg:mr-4 relative max-h-72 lg:max-h-90 rounded-2xl overflow-hidden group shadow-xl">
          {/* Image */}
          <Image
            src={sundarban}
            alt="Sundarban Image"
            width={800}
            height={800}
            className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          {/* Optional: content layer */}
          <div className="absolute bottom-4 left-4 z-10">
            <h2 className="text-white text-lg font-semibold">Sundarban</h2>
            <p className="text-white/70 text-sm">
              Home of the Royal Bengal Tiger
            </p>
          </div>
        </div>

        {/* Dhaka */}
        <div className=" lg:mb-4 lg:mr-4 relative max-h-72 lg:max-h-90 rounded-2xl overflow-hidden group shadow-xl">
          {/* Image */}
          <Image
            src={dhaka}
            alt="Dhaka Image"
            width={800}
            height={800}
            className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

          {/* Optional: content layer */}
          <div className="absolute bottom-4 left-4 z-10">
            <h2 className="text-white text-lg font-semibold">Dhaka</h2>
            <p className="text-white/70 text-sm">
              The soul of the nation and heritage
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreSection;
