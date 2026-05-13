/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import heroBg from "@/assets/garden.png";
import HeroForm from "@/utils/HeroForm";

const Hero = () => {
  return (
    <div className="relative rounded-b-2xl container mx-auto w-full h-100 lg:h-200 flex items-center justify-center overflow-hidden">
      <Image
        src={heroBg}
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />
      <div className="w-full absolute h-full bg-linear-to-t from-black to-transparent z-10"></div>

      <div className="relative z-20 flex  items-center flex-col justify-center max-w-3xl text-center  text-white">
        <h1 className="text-2xl xl:text-6xl font-extrabold leading-relaxed">
          Discover. Explorer. Travel
        </h1>
        <p className="text-xs mb-12 md:text-base lg:text-lg leading-relaxed">
          Your journey starts here with chologhuri, the premium gateway to
          Bangladesh and beyond. Discover the hidden gems of Bengal, from the
          world's longest beach to the mystical mangroves forest.
        </p>
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
