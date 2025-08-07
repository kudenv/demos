export type Product = {
  id: string;
  name: string;
  price: number;
  type: "Men" | "Women" | "Unisex";
  image: string; // dataUrl
};