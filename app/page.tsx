import BrowseCategory from "@/components/BrowseCategory";
import FlashSales from "@/components/FlashSales";
import HeroBanner from "@/components/HeroBanner";
import ItemCategory from "@/components/ItemCategory";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row w-full">
                <ItemCategory />
                <HeroBanner />
            </div>
            <FlashSales />
            <BrowseCategory />
        </div>
    );
}
