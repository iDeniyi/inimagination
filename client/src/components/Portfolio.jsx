import React from "react";
import inimagination from "../assets/inimagination.png";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            src: inimagination,
            link: "https://github.com/iDeniyi/inimagination",
        },
    ];

    return (
        <div
            id="portfolio"
            name="portfolio"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-500 text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-lime-200">
                        Portfolio
                    </p>
                    <p className="py-5">Here are some of my projects...</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(({ id, src, link }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg"
                        >
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duraition-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <button className="py-3">
                                    <a
                                        href={link}
                                        className="flex justify-between items-center w-full text-white"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        view code
                                    </a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
