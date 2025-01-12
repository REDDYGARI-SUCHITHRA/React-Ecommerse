import React from "react";
import dynamic from "next/dynamic";
const ReactStars = dynamic(() => import("react-stars"), {
    ssr: false,
});

const StarRating = ({ rating }: { rating: number }) => {
    return (
        <ReactStars
            count={5} // Total number of stars
            value={rating} // The decimal rating (e.g., 4.3)
            size={24} // Size of the stars
            color2={"#ffd700"} // Gold color for active stars
            half={true} // Enable half stars
            edit={false} // Make it non-editable
        />
    );
};

export default StarRating;
