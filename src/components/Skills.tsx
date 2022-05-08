import React, { FC } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
type Props = {};

export const Skills:FC = (props: Props) => {
    return (
        <div className="skillHolder">
            <div className="heading">Skills</div>
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
                <img src="/redux.png" alt="" />
                    <ProgressBar animated now={60} label={"Redux-Toolkit"} />
                </div>
                <div className="prog">
                    <img src="/typescript.png" alt="" />
                    <ProgressBar animated now={68} label={"TypeScript"} />
                </div>
                <div className="prog">
                    <img src="/c.png" alt="" />
                    <ProgressBar animated now={70} label={"C/C++"} />
                </div>
            </div>
        </div>
    );
};
