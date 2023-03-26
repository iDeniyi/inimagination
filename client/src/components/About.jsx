import React from "react";

const About = () => {
    return (
        <div
            id="about"
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-lime-200">
                        About Me
                    </p>
                </div>
                <p className="text-xl mt-20">
                    Welcome to the inimagination! My name is Inioluwa Adeniyi,
                    and I am a passionate computer engineering student with a
                    strong focus on software development. I am currently
                    pursuing my BSc in Computer Engineering (Co-op) at the
                    University of Alberta.
                </p>
                <br />
                <p className="text-xl">
                    Throughout my studies, I have gained extensive knowledge and
                    experience in a range of software development technologies,
                    including mobile app development with Java, Flutter, and
                    Android Studio; backend development with Node, Express,
                    Django, SQL and MongoDB; and software testing using Pytest,
                    Unittest, and JUnit.
                </p>
                <br />
                <p className="text-xl">
                    I have worked on a number of projects that showcase my
                    software development skills like designing and developing my
                    own portfolio website using JavaScript, React, HTML, CSS,
                    and Tailwind. Additionally, I am currently working on
                    developing a mobile application called Student Connect
                    Application (SCApp) with two other friends to help
                    university students build connections based on their
                    interests and culture.
                </p>
            </div>
        </div>
    );
};

export default About;
