import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-[4/3] w-full bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="p-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-medium leading-tight line-clamp-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">${product.price}</p>
        </div>
        <Badge variant="secondary" className="shrink-0">{product.type}</Badge>
      </div>
    </Card>
  );
}
