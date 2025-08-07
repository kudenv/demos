import { Card } from "@/components/ui/card";
import { images } from "@constant/images";

const featured = images.slice(3, 9).map((img: any, i: any) => ({
  id: i + 1,
  name: "Running shoes for men",
  price: "$99",
  image: img.dataUrl
}));

export function FeaturedProducts() {
  console.log(featured[1])
  return (
    <section className="max-w-6xl mx-auto px-4 mt-12">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-lg">FEATURED PRODUCTS</h4>
        <a href="#" className="text-sm underline">VIEW ALL</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {featured.map((product: any)  => (
          <Card key={product.id} className="p-2">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <p className="mt-2 text-sm">{product.name}</p>
            <p className="font-semibold text-sm">{product.price}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}