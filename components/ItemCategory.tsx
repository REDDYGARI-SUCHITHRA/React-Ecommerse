import { FaChevronRight } from "react-icons/fa";

function ItemCategory() {
  return (
    <div className="flex mt-4 text-xl font-semibold w-60 h-auto">
      <div>
        <div className="flex justify-between items-center my-3">
          <div>Women's Fashion</div>
          <div className="me-2">
            <FaChevronRight />
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <div>Men's Fashion</div>
          <div className="me-2">
            <FaChevronRight />
          </div>
        </div>
        <div className="my-3">Electronics</div>
        <div className="my-3">Kid Wear</div>
        <div className="my-3">Foot Wear</div>
        <div className="my-3">Sports</div>
        <div className="my-3">Groceries</div>
        <div className="my-3">Health and Beauty</div>
        <div className="my-3">Medicine</div>
      </div>

      {/* Add relative positioning and set height dynamically */}
      <div className="border-r border-grey h-auto mx-4"></div>
    </div>
  );
}

export default ItemCategory;
