import React,{ useEffect } from "react";
import "./style.css";
import { AiFillContacts } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { Link,useLocation } from "react-router-dom";

export const SideNav = () => {
    const handleActiveClick = (e: React.MouseEvent<HTMLElement>) => {
        const test = document.querySelectorAll(".iconsHolder > a");
        test.forEach((e) => {
            e.classList.remove("active");
        });
        e.currentTarget.classList.toggle("active");
    };
    const location = useLocation();
    const setActive = async() => {
        if(location.pathname === "/") document.querySelector(`.home`)?.parentElement?.classList.add("active");
        else document.querySelector(`.${location.pathname.slice(1)}`)?.parentElement?.classList.add("active");
    }
    
    useEffect(() => {
        setActive();
    },[])

    return (
        <div className="sidenav">
            <nav>
                <div className="iconsHolder">
                    <Link
                        to="/"
                        onClick={(e) => handleActiveClick(e)}
                    >
                        <div className="home">
                            <FaUser size={24} />
                        </div>
                    </Link>
                    <Link to="/skills" onClick={(e) => handleActiveClick(e)}>
                        <div className="skills">
                            <GiSkills size={24} />
                        </div>
                    </Link>
                    <Link to="/contact" onClick={(e) => handleActiveClick(e)}>
                        <div className="contact">
                            <AiFillContacts size={24} />
                        </div>
                    </Link>
                    <Link to="/works" onClick={(e) => handleActiveClick(e)}>
                        <div className="works">
                            <MdWork size={24} />
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};
