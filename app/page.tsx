import HeroBanner from "@/components/HeroBanner";
import ItemCategory from "@/components/ItemCategory";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full">
      <ItemCategory  />
      <HeroBanner />
    </div>
  );
}
