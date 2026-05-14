const ToursPage = () => {
  return (
    <div className="px-4 py-20">
      {/* Section Heading */}
      <div className="mx-auto mb-16 max-w-4xl text-center text-white">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 rounded-full 
        border border-sky-400/20 bg-sky-500/10 
        px-5 py-1.5 text-sm font-medium tracking-wide text-sky-300"
        >
          ✈ Travel Worldwide
        </span>

        {/* Title */}
        <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
          Explore the World
          <span className="block text-sky-400">One Destination at a Time</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
          Discover iconic landmarks, hidden gems, and unforgettable journeys
          across continents with curated travel experiences.
        </p>

        {/* Accent line */}
        <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-sky-400/60" />
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
    </div>
  );
};

export default ToursPage;
