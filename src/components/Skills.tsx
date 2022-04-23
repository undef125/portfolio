import React from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { SiRedux} from "react-icons/si";

type Props = {};

export const Skills = (props: Props) => {
    return (
        <div className="skillHolder">
            <div className="skillText">Skills</div>
            <div className="progHolder">
                <div className="prog">
                    <img src="/html.png" alt="" />
                    <ProgressBar animated now={99} label={"HTML"} />
                </div>
                <div className="prog">
                    <img src="/css.png" alt="" />
                    <ProgressBar animated now={90} label={"CSS"} />
                </div>
                <div className="prog">
                    <img src="/js.png" alt="" />
                    <ProgressBar animated now={88} label={"JavaScript"} />
                </div>
                <div className="prog">
                    <img src="/logo192.png" alt="" />
                    <ProgressBar animated now={80} label={"React"} />
                </div>
                <div className="prog">
                    <img src="/bootstrap.png" alt="" />
                    <ProgressBar
                        animated
                        now={96}
                        label={"Bootstrap and ReactBootstrap"}
                    />
                </div>
                <div className="prog">
                    <SiRedux size={45} />
                    <ProgressBar animated now={60} label={"Redux-Toolkit"} />
                </div>
                <div className="prog">
                    <img src="/typescript.png" alt="" />
                    <ProgressBar animated now={68} label={"TypeScript"} />
                </div>
                <div className="prog">
                    <img src="/c.png" alt="" />
                    <ProgressBar animated now={70} label={"C++"} />
                </div>
            </div>
        </div>
    );
};
