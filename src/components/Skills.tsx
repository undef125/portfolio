import React, { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

export const Skills: FC = () => {

    const works: Array<Object> = [
        {
            imgUrl: "/html.png",   //chatapp
            langname: "HTML",
        },
    ];


    return (
        <div className="skillHolder">
            <div className="heading sticky">Skills</div>
            <div className="progHolder">
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/html.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">HTML</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/css.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">CSS</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/js.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">JavaScript</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/logo192.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">React</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/bootstrap.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">Bootstrap</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/redux.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">Nextjs</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/typescript.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">TypeScript</div>
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/c.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">C/C++</div>
                        
                    </div>
                </div>
                <div className="prog">
                    <div className="skillimageholder">
                        <img src="/nodejs.png" alt="" />
                    </div>
                    <div className="langdetail">
                        <div className="langname">NodeJS</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
