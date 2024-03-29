import React from "react";
import { Link } from "react-scroll";
import { IoRocket } from "react-icons/io5";

const Home = () => {
    return (
        <div
            id="home"
            name="home"
            className="h-screen w-full bg-gradient-to-b from-black to-gray-500"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full text-white">
                    <p className="text-gray-300 py-4">
                        Hey! Welcome to the inimagination...
                    </p>
                    <h2 className="text-6xl font-signature pt-4 pb-2">
                        I am Inioluwa
                    </h2>
                    <h2 className="text-lime-200 tracking-wide hover:tracking-widest">
                        Fullstack Developer
                    </h2>
                    <p className="text-gray-300 py-4 max-w-md">
                        This is my portfolio, where you get to see interesting
                        projects I've worked on. Hop on and let's jounrney
                        through the inimagination.
                    </p>
                    <div>
                        <Link to={"portfolio"} smooth duration={500}>
                            <button className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-500">
                                launch
                                <span>
                                    <IoRocket />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                {/* <div>
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-1/6 md:w-full"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Home;
