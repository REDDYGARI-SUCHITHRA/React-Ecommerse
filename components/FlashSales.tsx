"use client";
import CategoryTitle from "./CategoryTitle";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import StarRating from "./RatingStars";

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

    const [isHeartClicked, setIsHeartClicked] = useState(false);

    const toggleHeartColor = () => {
        setIsHeartClicked(!isHeartClicked);
    };

    function handleAddToCart(index: number): void {}

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
                                <Card className="relative group">
                                    {/* Background Image */}
                                    <div
                                        className="w-full h-full aspect-square bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(https://picsum.photos/300?random=${
                                                index + 1
                                            })`,
                                        }}
                                    >
                                        {/* Discount Tag */}
                                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                            40%
                                        </div>

                                        {/* Heart Icon */}
                                        <div
                                            className="absolute top-2 right-2 cursor-pointer"
                                            onClick={toggleHeartColor}
                                        >
                                            <FaHeart
                                                size={16}
                                                color={
                                                    isHeartClicked
                                                        ? "black"
                                                        : "red"
                                                }
                                                className="transition-colors duration-300 hover:opacity-80"
                                            />
                                        </div>
                                    </div>

                                    {/* Add to Cart Hover Effect */}
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-full transition-all duration-300 cursor-pointer"
                                        onClick={() => handleAddToCart(index)}
                                    >
                                        Add to Cart
                                    </div>
                                </Card>
                                <div>
                                    <p className="text-sm my-2 font-semibold">
                                        AK-900 Wired KeyBoard
                                    </p>
                                    <p className="text-sm text-red-500">
                                        $120{" "}
                                        <span className="line-through text-gray-700">
                                            $160
                                        </span>
                                    </p>
                                    <div>
                                        <StarRating rating={4} />
                                        <span className="text-sm text-gray-500">
                                            (4.3 rating, 88 reviews)
                                        </span>
                                    </div>
                                </div>
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
