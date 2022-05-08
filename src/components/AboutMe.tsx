import React from "react";

type Props = {};

export const AboutMe = (props: Props) => {
    return (
        <div className="aboutmecontainer">
            <div className="textSection">
                <div className="hi"><p>Hi, I'm</p></div>
                <div className="name"><p>Kapil Kunwar</p></div>
                <p>
                    I'm a talented frontend developer with a strong work ethic
                    and a passion for what I do.
                </p>
                <button className="cvButton">Download CV</button>
            </div>
            <div className="imageSection">
                <img src="/done.png" alt="" />
            </div>
            <div className="floatingDivs">
                <div className="one"></div>
                <div className="two"></div>
                <div className="thr"></div>
                <div className="fou"></div>
                <div className="fiv"></div>
            </div>
        </div>
    );
};
