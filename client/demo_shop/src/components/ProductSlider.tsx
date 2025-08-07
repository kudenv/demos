import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { images } from "@/constant/images";

const sliderProducts = images.slice(0, 3).map((img: any, i: any) => ({
  id: i + 1,
  name: ["Cue Stick", "Snooker Table", "Chalk Set"][i],
  image: img.dataUrl
}));

export function ProductSlider() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % sliderProducts.length);
  const prev = () => setIndex((index - 1 + sliderProducts.length) % sliderProducts.length);

  return (
    <section className="w-full mt-6 flex items-center justify-center gap-6">
      <Button variant="ghost" className="cursor-pointer" onClick={prev}>&lt;</Button>
      <Card className="p-4 max-w-3xl w-full">
        <img src={sliderProducts[index].image} alt={sliderProducts[index].name} className="h-64 w-full object-cover rounded-md" />
        <h2 className="text-center mt-2 font-semibold">{sliderProducts[index].name}</h2>
      </Card>
      <Button variant="ghost" className="cursor-pointer" onClick={next}>&gt;</Button>
    </section>
  );
}
