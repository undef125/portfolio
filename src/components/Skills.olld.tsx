import React, { FC } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const Skills:FC = () => {
    return (
        <div className="skillHolder">
            <div className="heading">Skills</div>
            <div className="progHolder">
                <div className="prog">
                    <img src="/html.png" alt="" />
                    {/* <ProgressBar   now={99} label={"HTML"} /> */}
                </div>
                <div className="prog">
                    <img src="/css.png" alt="" />
                    {/* <ProgressBar   now={90} label={"CSS"} /> */}
                </div>
                <div className="prog">
                    <img src="/js.png" alt="" />
                    {/* <ProgressBar  now={88} label={"JavaScript"} /> */}
                </div>
                <div className="prog">
                    <img src="/logo192.png" alt="" />
                    {/* <ProgressBar  now={80} label={"React"} /> */}
                </div>
                <div className="prog">
                    <img src="/bootstrap.png" alt="" />
                    {/* <ProgressBar
                        
                        now={96}
                        label={"Bootstrap and ReactBootstrap"}
                    /> */}
                </div>
                <div className="prog">
                <img src="/redux.png" alt="" />
                    {/* <ProgressBar  now={60} label={"Redux-Toolkit"} /> */}
                </div>
                <div className="prog">
                    <img src="/typescript.png" alt="" />
                    {/* <ProgressBar  now={68} label={"TypeScript"} /> */}
                </div>
                <div className="prog">
                    <img src="/c.png" alt="" />
                    {/* <ProgressBar  now={70} label={"C/C++"} /> */}
                </div>
            </div>
        </div>
    );
};
