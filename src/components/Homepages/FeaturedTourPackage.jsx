import SectionHeading from "@/utils/SectionHeading";
import tours from "@/../public/tourPackages.json";
import TourPackageCard from "../shared/TourPackageCard";
const FeaturedTourPackage = () => {
  return (
    <div className="py-5 lg:py-10 px-6">
      <SectionHeading
        title={"Featured Tour Packages"}
        subtitle={"Handpicked Deals"}
        textColor={"text-[#DE8712]"}
      ></SectionHeading>

      {/* Package Card Container */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 justify-center gap-6">
        {tours.slice(0, 3).map((tour) => (
          <TourPackageCard key={tour.id} tour={tour}></TourPackageCard>
        ))}
      </section>
    </div>
  );
};

export default FeaturedTourPackage;
