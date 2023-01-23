import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    // states
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "About Me",
        },
        {
            id: 3,
            link: "Portfolio",
        },
        {
            id: 4,
            link: "Contact",
        },
    ];

    return (
        <div className="flex justify-between items-center font-bold w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-4xl font-signature ml-2">
                    ini
                    <span className="text-2xl font-signature text-lime-200">
                        magination
                    </span>
                </h1>
            </div>
            {/* navigattion for screens bigger than 768px */}
            <ul className="hidden md:flex">
                {links.map((link) => (
                    <li
                        key={link.id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        {link.link}
                    </li>
                ))}
                <li className=""></li>
            </ul>

            {/* navigation for screens smaller than 768px */}
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden
                "
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-400 text-lime-200">
                    {links.map((link) => (
                        <li
                            key={link.id}
                            className="px-4 cursor-pointer capitalize py-5 text-4xl"
                        >
                            {link.link}{" "}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default NavBar;
