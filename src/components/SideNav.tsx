import React, { useState } from "react";
import "./style.css";
import { AiFillGithub, AiFillContacts, AiFillLinkedin } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {};

export const SideNav = (props: Props) => {
    const [hover, sethover] = useState(false);
    const [shover, setshover] = useState(false);
    const [chover, setchover] = useState(false);
    const [whover, setwhover] = useState(false);
    const [ghover, setghover] = useState(false);
    const [lhover, setlhover] = useState(false);
    const handleActiveClick = (e: React.MouseEvent<HTMLElement>) => {
        const test = document.querySelectorAll('.iconsHolder > a');
        test.forEach((e) => {
            e.classList.remove("active");
        })
        e.currentTarget.classList.toggle("active");
    }
    return (
        <div className="sidenav">
            <nav>
                <div className="iconsHolder">
                    <Link
                        to="/"
                        className="active"
                        onMouseEnter={() => sethover(true)}
                        onMouseLeave={() => sethover(false)}
                        onClick={(e) => handleActiveClick(e)}

                    >
                        <div className="home">
                            {hover === false ? (
                                <FaUser size={24} />
                            ) : (
                                <p>About Me</p>
                            )}
                        </div>
                    </Link>
                    <Link
                        to="/skills"
                        onMouseEnter={() => setshover(true)}
                        onMouseLeave={() => setshover(false)}
                        onClick={(e) => handleActiveClick(e)}
                    >
                        <div className="skills">
                            {shover === false ? (
                                <GiSkills size={24} />
                            ) : (
                                <p>Skills</p>
                            )}
                        </div>
                    </Link>
                    <Link
                        to="/contact"
                        onMouseEnter={() => setchover(true)}
                        onMouseLeave={() => setchover(false)}
                        onClick={(e) => handleActiveClick(e)}
                    >
                        <div className="contact">
                            {chover === false ? (
                                <AiFillContacts size={24} />
                            ) : (
                                <p>Contact</p>
                            )}
                        </div>
                    </Link>
                    <Link
                        to="/works"
                        onMouseEnter={() => setwhover(true)}
                        onMouseLeave={() => setwhover(false)}
                        onClick={(e) => handleActiveClick(e)}
                    >
                        <div className="projects">
                            {whover === false ? (
                                <MdWork size={24} />
                            ) : (
                                <p>Works</p>
                            )}
                        </div>
                    </Link>
                    <div
                        className="github"
                        onMouseEnter={() => setghover(true)}
                        onMouseLeave={() => setghover(false)}
                    >
                        {ghover === false ? (
                            <AiFillGithub size={24} />
                        ) : (
                            <p>github</p>
                        )}
                    </div>
                    <div
                        className="linkedin"
                        onMouseEnter={() => setlhover(true)}
                        onMouseLeave={() => setlhover(false)}
                    >
                        {lhover === false ? (
                            <AiFillLinkedin size={24} />
                        ) : (
                            <p>linkedin</p>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};
