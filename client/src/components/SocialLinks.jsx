import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={20} />
                </>
            ),
            href: "https://linkedin.com/in/inioluwaadeniyi",
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={20} />
                </>
            ),
            href: "https://github.com/iDeniyi",
        },
        {
            id: 3,
            child: (
                <>
                    Email <HiOutlineMail size={20} />
                </>
            ),
            href: "mailto: adeniyipraiseini@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={20} />
                </>
            ),
            href: "/resume.pdf",
            download: true,
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map((link) => (
                    <li
                        key={link.key}
                        className="flex justify-between items-center w-40 h-14 px-4 bg-red-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]"
                    >
                        <a
                            href={link.href}
                            className="flex justify-between items-center w-full text-white"
                            download={link.download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {link.child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
