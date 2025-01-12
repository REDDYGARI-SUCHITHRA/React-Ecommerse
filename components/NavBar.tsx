"use client";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="w-[90vw] max-w-7xl mx-auto">
            {/* Top Row */}
            <div className="flex items-center justify-between py-4">
                {/* Logo and Menu Button */}
                <div className="flex items-center w-2/3">
                    <div className="font-black text-2xl">Exclusive</div>
                    <div className="md:hidden ml-4">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 focus:outline-none"
                        >
                            {menuOpen ? (
                                <AiOutlineClose size={24} />
                            ) : (
                                <AiOutlineMenu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Search and Icons */}
                <div className="flex items-center gap-4 w-1/3 justify-end">
                    {/* Search */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 w-full max-w-[200px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <IoIosSearch
                            size={18}
                            className="absolute top-1/2 left-3 text-gray-500 transform -translate-y-1/2"
                        />
                    </div>
                    {/* Heart and Cart */}
                    <div className="flex gap-3">
                        <FaRegHeart size={20} className="text-gray-600" />
                        <MdOutlineShoppingCart
                            size={20}
                            className="text-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Collapsible Menu */}
            <div
                className={`flex flex-col md:flex-row items-center gap-4 ${
                    menuOpen ? "block" : "hidden"
                } md:flex`}
            >
                <div className="md:hidden w-full border-t border-gray-300 my-2" />
                <div className="text-center md:text-left">Home</div>
                <div className="text-center md:text-left">Contact</div>
                <div className="text-center md:text-left">About</div>
                <div className="text-center md:text-left">Signup</div>
            </div>
        </div>
    );
}

export default NavBar;
