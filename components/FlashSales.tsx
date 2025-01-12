"use client";
import CategoryTitle from "./CategoryTitle";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

function FlashSales() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetTime = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetTime - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer); // Stop timer when countdown ends
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <CategoryTitle title="Today's" />

            <div className="mt-4">
                <div className="text-2xl font-bold">
                    Flash Sales{" "}
                    <span className="text-black text-2xl ms-6">
                        <span>
                            {timeLeft.days} D
                            <span className="text-red-500 mx-1">:</span>
                        </span>{" "}
                        <span>
                            {timeLeft.hours} H
                            <span className="text-red-500 mx-1">:</span>
                        </span>{" "}
                        <span>
                            {timeLeft.minutes} M
                            <span className="text-red-500 mx-1">:</span>
                        </span>{" "}
                        <span>{timeLeft.seconds} S</span>
                    </span>
                </div>
            </div>
            <Carousel className="w-full mt-4">
                <CarouselContent className="-ml-1">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-1 md:basis-1/6 lg:basis-1/8" // Adjusted width here
                        >
                            <div className="p-1">
                                <Card>
                                    <div className="flex justify-end items-start">
                                        <div></div>
                                        <div></div>
                                    </div>

                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-2xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default FlashSales;
