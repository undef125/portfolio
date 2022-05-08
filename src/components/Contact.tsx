import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

export const Contact = (props: Props) => {
    return (
        <div className="wholeContact">
            <div className="contacttext">Contact</div>
            <div className="contactContainer">
                <div className="socialMedias">
                    <div className="facebook">
                        <div className="imgholder">
                            <img src="/facebook.png" alt="" />
                        </div>
                        <p>facebook</p>
                    </div>
                    <div className="instagram">
                        <div className="imgholder">
                            <img src="/instagram.png" alt="" />
                        </div>
                        <p>Instagram</p>
                    </div>
                    <div className="telegram">
                        <div className="imgholder">
                            <img src="/telegram.png" alt="" />
                        </div>
                        <p>Telegram</p>
                    </div>
                    <div className="linkedin">
                        <div className="imgholder">
                            <img src="/linkedin.png" alt="" />
                        </div>
                        <p>LinkedIn</p>
                    </div>
                    <div className="github">
                        <div className="imgholder">
                            <img src="/github.png" alt="" />
                        </div>
                        <p>Github</p>
                    </div>
                    <div className="telephone">
                        <div className="imgholder">
                            <img src="/tel.png" alt="" />
                        </div>
                        <p>Phone Call</p>
                    </div>
                </div>
                <div className="mailme">
                    <p>Mail Me</p>
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Message" />
                    <button className="btn btn-primary sumbitBtn">Mail</button>
                </div>
            </div>
        </div>
    );
};
