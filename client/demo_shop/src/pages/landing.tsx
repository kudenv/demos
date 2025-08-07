import { ProductSlider } from "@/components/ProductSlider";
import { PromoBanner } from "@/components/PromoBanner";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { DoubleImageSection } from "@/components/DoubleImageSection";

export default function SnookerLandingPage() {
  return (
    <div className="bg-white text-black">     
      <ProductSlider />
      <PromoBanner />
      <FeaturedProducts />
      <DoubleImageSection />      
    </div>
  );
}