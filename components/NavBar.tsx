import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
function NavBar() {
    return (
        <div className="w-[80vw] mx-auto ">
            <div className="flex mt-10 justify-between">
                <div className="flex justify-between w-[35vw]">
                    <div className="font-bold font-black text-2xl">
                        Exclusive
                    </div>
                    <div className="flex gap-8 mt-2 text-xl">
                        <div>Home</div>
                        <div>Contact</div>
                        <div>About</div>
                        <div>Signup</div>
                    </div>
                </div>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <div className="relative w-70">
                            <Input
                                type="text"
                                placeholder="What are you looking for ?"
                                className="pl-12 pr-4 text-lg"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className="flex items-center ">
                        <FaRegHeart size={25} />
                    </div>
                    <div className="flex items-center ">
                        <MdOutlineShoppingCart size={25} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
