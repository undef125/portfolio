import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiRedux, SiTypescript, SiCplusplus } from "react-icons/si";

type Props = {};

// interface myComp {
//     iconn?: IconType;
//     percentage: number;
// }

// function Build({ iconn, percentage }: myComp) {
//     return (
//         <>
//             <iconn size={54} />
//             <ProgressBar animated now={99} label={`${99}%`} />
//         </>
//     );
// }

export const Skills = (props: Props) => {
    return (
        <div className="skillHolder">
            <div className="skillText">Skills</div>
            <div className="progHolder">
                <div className="prog">
                    <AiFillHtml5 size={45} />
                    <ProgressBar animated now={99} label={"HTML"}/>
                </div>
                <div className="prog">
                    <DiCss3 size={45} />
                    <ProgressBar animated now={90} label={"CSS"}/>
                </div>
                <div className="prog">
                    <IoLogoJavascript size={45} />
                    <ProgressBar animated now={88} label={"JavaScript"}/>
                </div>
                <div className="prog">
                    <FaReact size={45} />
                    <ProgressBar animated now={80} label={"React"}/>
                </div>
                <div className="prog">
                    <FaBootstrap size={45} />
                    <ProgressBar animated now={96} label={"Bootstrap and ReactBootstrap"}/>
                </div>
                <div className="prog">
                    <SiRedux size={45} />
                    <ProgressBar animated now={60} label={"Redux-Toolkit"}/>
                </div>
                <div className="prog">
                    <SiTypescript size={45} />
                    <ProgressBar animated now={68} label={"TypeScript"}/>
                </div>
                <div className="prog">
                    <SiCplusplus size={45} />
                    <ProgressBar animated now={70} label={"C++"}/>
                </div>
            </div>
        </div>
    );
};
