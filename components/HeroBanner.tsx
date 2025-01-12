"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function HeroBanner() {
    return (
        <div className="w-full h-auto px-4 lg:px-10 my-auto">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {/* Slide 1 */}
                    <CarouselItem>
                        <div className="w-full h-96">
                            <img
                                src="/assets/1.png"
                                alt="Slide 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CarouselItem>

                    {/* Slide 2 */}
                    <CarouselItem>
                        <div className="w-full h-96">
                            <img
                                src="/assets/2.png"
                                alt="Slide 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CarouselItem>

                    {/* Slide 3 */}
                    <CarouselItem>
                        <div className="w-full h-96">
                            <img
                                src="/assets/3.png"
                                alt="Slide 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default HeroBanner;
