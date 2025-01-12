import { FaChevronRight } from "react-icons/fa";

function ItemCategory() {
    return (
        <div className="flex justify-between mt-4 text-lg h-auto">
            <div>
                <div className="flex justify-between items-center my-3 whitespace-nowrap">
                    <div>Women's Fashion</div>
                    <div className="ms-4">
                        <FaChevronRight />
                    </div>
                </div>
                <div className="flex justify-between items-center my-3 whitespace-nowrap">
                    <div>Men's Fashion</div>
                    <div className="ms-4">
                        <FaChevronRight />
                    </div>
                </div>
                <div className="my-3 whitespace-nowrap">Electronics</div>
                <div className="my-3 whitespace-nowrap">Kid Wear</div>
                <div className="my-3 whitespace-nowrap">Foot Wear</div>
                <div className="my-3 whitespace-nowrap">Sports</div>
                <div className="my-3 whitespace-nowrap">Groceries</div>
                <div className="my-3 whitespace-nowrap">Health and Beauty</div>
                <div className="my-3 whitespace-nowrap">Medicine</div>
            </div>

            {/* Add relative positioning and set height dynamically */}
            <div className="border-r border-grey h-auto ms-10 me-4"></div>
        </div>
    );
}

export default ItemCategory;
