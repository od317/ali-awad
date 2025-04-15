// app/(main)/page.tsx

import Bestsellers from "@/components/home/Bestsellers";
import BlogHighlights from "@/components/home/BlogHighlights";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import HeroSection from "@/components/home/HeroSection";
import NewReleases from "@/components/home/NewReleases";
import Newsletter from "@/components/home/Newsletter";
import SpecialOffers from "@/components/home/SpecialOffers";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="space-y-12 pb-12">
      <HeroSection />
      <FeaturedCategories />
      <NewReleases />
      <Bestsellers />
      <SpecialOffers />
      <Testimonials />
      <BlogHighlights />
      <Newsletter />
    </div>
  );
}
