import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="bg-gray-100 py-8 px-4 text-center mt-8">
      <div className="max-w-4xl mx-auto relative">
        <h3 className="text-2xl font-bold">10% OFF Discount Coupons</h3>
        <p className="text-sm text-gray-600 mt-1">Subscribe us to get 10% OFF on all the purchases</p>
        <Button className="mt-4 px-6 py-2">EMAIL ME</Button>
        <div className="absolute right-0 bottom-2 text-[5rem] text-gray-200 font-bold select-none hidden md:block">10% OFF</div>
      </div>
    </section>
  );
}