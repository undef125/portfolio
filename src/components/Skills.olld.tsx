import React, { FC } from "react";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const Skills: FC = () => {
  return (
    <div className="skillHolder">
      <div className="heading">Skills</div>
      <div className="progHolder">
        <div className="prog">
          <img src="/html.png" alt="" />
        </div>
        <div className="prog">
          <img src="/css.png" alt="" />
        </div>
        <div className="prog">
          <img src="/js.png" alt="" />
        </div>
        <div className="prog">
          <img src="/logo192.png" alt="" />
        </div>
        <div className="prog">
          <img src="/bootstrap.png" alt="" />
        </div>
        <div className="prog">
          <img src="/redux.png" alt="" />
        </div>
        <div className="prog">
          <img src="/typescript.png" alt="" />
        </div>
        <div className="prog">
          <img src="/c.png" alt="" />
        </div>
      </div>
    </div>
  );
};
