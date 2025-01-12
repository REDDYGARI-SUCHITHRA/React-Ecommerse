"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
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
        <div>
            {/* Top Row */}
            <div className="flex items-center justify-between py-4">
                {/* Logo */}
                <div className="font-bold font-black text-2xl">Exclusive</div>

                {/* Menu Button for Small Screens */}
                <div className="md:hidden">
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

                {/* Menu Items (Hidden on Small Screens) */}
                <div className="hidden md:flex gap-8 mt-2">
                    <div>Home</div>
                    <div>Contact</div>
                    <div>About</div>
                    <div>Signup</div>
                </div>

                {/* Search and Icons */}
                <div className="flex gap-6">
                    <div className="relative hidden md:block w-[200px]">
                        <Input
                            type="text"
                            placeholder="What are you looking for?"
                            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <IoIosSearch
                            size={18}
                            className="absolute top-1/2 left-3 text-gray-500 transform -translate-y-1/2"
                        />
                    </div>

                    <div className="flex items-center">
                        <FaRegHeart size={20} className="text-gray-600" />
                    </div>
                    <div className="flex items-center">
                        <MdOutlineShoppingCart
                            size={20}
                            className="text-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Collapsible Menu for Small Screens */}
            {menuOpen && (
                <div className="flex flex-col gap-4 mt-4 md:hidden">
                    <div>Home</div>
                    <div>Contact</div>
                    <div>About</div>
                    <div>Signup</div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
