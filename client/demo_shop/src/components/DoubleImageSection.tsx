import { images } from "@/constant/images";

export function DoubleImageSection() {
  return (
    <section className="max-w-6xl mt-4">
      <h2 className="flex justify-start font-semibold text-lg">POPULAR PRODUCTS</h2>
      <div className="mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img src={images[7].dataUrl} alt="Promo 1" className="w-full h-64 object-cover rounded-md" />
        <img src={images[8].dataUrl} alt="Promo 2" className="w-full h-64 object-cover rounded-md" />
      </div>
    </section>
  );
}