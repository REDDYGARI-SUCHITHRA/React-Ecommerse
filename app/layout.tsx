import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaChevronDown } from "react-icons/fa";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="bg-black text-white flex flex-wrap items-center py-4 px-4">
                    {/* Announcement Section */}
                    <div className="flex-1 text-center text-sm md:text-base lg:text-lg">
                        Summer Sale for All Swim and Free Express Delivery - OFF
                        50%
                        <span className="underline ms-3">Shop now</span>
                    </div>

                    {/* Language Selector */}
                    {/* <div className="flex items-center justify-center md:justify-end mt-2 md:mt-0 text-sm md:text-base">
                        English
                        <FaChevronDown className="ml-2 text-xs md:text-sm" />
                    </div> */}
                </div>

                <NavBar />

                <hr className="mt-4" />
                {children}
            </body>
        </html>
    );
}
