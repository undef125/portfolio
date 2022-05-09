import React from "react";

type Props = {};

export const AboutMe = (props: Props) => {
    return (
        <>
            <div className="aboutmecontainer">
                <div className="textSection">
                    <div className="hi">Hi, I'm</div>
                    <div className="name">Kapil Kunwar</div>
                    <p>
                        I'm a talented frontend developer with a strong work
                        ethic and a passion for what I do.Currently a computer engineering student at TU IOE, Purwanchal Campus Dharan.
                    </p>
                    <button className="cvButton">Download CV</button>
                </div>
                <div className="imageSection">
                    <img src="/done.png" alt="" />
                </div>
            </div>
        </>
    );
};
