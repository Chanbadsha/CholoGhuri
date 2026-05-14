import ExploreDestinations from "@/components/Destinations/ExploreDestinations";
import DestinationsHero from "@/components/Destinations/Hero";
import RecommendationsDestinations from "@/components/Destinations/RecommendationsDestinations";

const DestinationsPage = () => {
  return (
    <div className="container mx-auto">
      <DestinationsHero />
      <RecommendationsDestinations />
      <ExploreDestinations />
    </div>
  );
};

export default DestinationsPage;
