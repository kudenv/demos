import { useParams, useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "@/constant/images";
import { useMemo, useState } from "react";
import { useAppDispatch } from "@/features/hooks";
import { addToCart } from "@/features/reducers/cartReducer";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const index = Math.max(0, Math.min(Number(id) - 1 || 0, images.length - 1));
  const product = useMemo(() => ({
    id: index + 1,
    name: `Sneaker ${index + 1}`,
    price: 79 + (index % 5) * 20,
    type: (index % 2 === 0 ? "Men" : "Women") as "Men" | "Women",
    image: images[index]?.dataUrl ?? "",
    description:
      "Premium comfort sneaker with breathable upper, supportive midsole, and durable outsole. Ideal for everyday wear or training.",
  }), [index]);

  const [qty, setQty] = useState<number>(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        type: product.type,
        qty,
      })
    );
    navigate("/cart");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Top split: image (left) / details (right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Product image */}
        <Card className="p-2">
          <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </Card>

        {/* Right: Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-xl">${product.price}</p>
          <p className="text-sm text-muted-foreground">Category: {product.type}</p>

          <div className="flex items-center gap-3 mt-2">
            <label htmlFor="qty" className="text-sm font-medium">Quantity</label>
            <Input
              id="qty"
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="w-24"
            />
          </div>

          <Button size="lg" className="mt-2 w-full sm:w-auto" onClick={handleAddToCart}>Add to Cart</Button>
        </div>
      </div>

      {/* Description area */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2">Product Description</h2>
        <p className="text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
      </div>
    </section>
  );
}