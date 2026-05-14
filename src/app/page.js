import ExploreSection from "@/components/Homepages/ExploreSection";
import FeaturedTourPackage from "@/components/Homepages/FeaturedTourPackage";
import Hero from "@/components/Homepages/Hero";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <ExploreSection />
      <FeaturedTourPackage />
    </div>
  );
};

export default HomePage;
