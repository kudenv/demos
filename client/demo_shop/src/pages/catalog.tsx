import { ProductCard } from "@components/ProductCard";
import { images } from "@constant/images"; // uses your dataUrl images
import type {Product} from '@/types'

// simple mock builder from images dataset
const buildProducts = (): Product[] =>
  images.map((img, i) => ({
    id: String(i + 1),
    name: `Sneaker ${i + 1}`,
    price: 79 + (i % 5) * 20,
    type: (i % 2 === 0 ? "Men" : "Women") as Product["type"],
    image: img.dataUrl,
  }));

const CatalogPage = () => {
  const products = buildProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Catalog</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />)
        )}
      </div>
    </section>
  );
}

export default CatalogPage;