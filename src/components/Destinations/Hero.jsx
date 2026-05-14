import Image from "next/image";
import heroBg from "@/assets/nilgiri.png";
const DestinationsHero = () => {
  return (
    <div className="relative lg:rounded-b-2xl container mx-auto w-full h-100 lg:h-150 flex items-center justify-center overflow-hidden">
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
      <div className="w-full absolute h-full bg-linear-to-t from-black to-transparent z-10"></div>

      <div className="relative z-20 flex  items-center flex-col justify-center max-w-7xl text-center  text-white">
        <h1 className="text-2xl xl:text-6xl font-extrabold leading-relaxed">
          Find Your Next Adventure
        </h1>
        <p className="text-xs max-w-xs sm:max-w-2xl lg:max-w-3xl mb-12 md:text-base lg:text-lg leading-relaxed">
          Discover curated experiences across the diverse landscapes of Bengal
          and beyond, from the silence of the hills to the rhythm of the waves.
        </p>
      </div>
    </div>
  );
};

export default DestinationsHero;
