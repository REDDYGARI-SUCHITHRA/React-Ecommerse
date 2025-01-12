"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import Autoplay from "embla-carousel-autoplay"

  import image1 from '@/public/assets/1.png'
function HeroBanner() {
  return (
    <div className="justify-center items-center w-full mx-10 h-auto">
      <Carousel  plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
  <CarouselContent>
    <CarouselItem>1</CarouselItem>
    <CarouselItem>2</CarouselItem>
    <CarouselItem>3</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}

export default HeroBanner
  