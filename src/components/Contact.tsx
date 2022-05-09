import { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

export const Contact = (props: Props) => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const openSite = (url:string) => {
        window.open(`${url}`);
    }
    return (
        <div className="wholeContact">
            <div className="contacttext">Contact</div>
            <div className="contactContainer">
                <div className="socialMedias">
                    <div className="facebook">
                        <div className="imgholder">
                            <img src="/facebook.png" alt="" onClick={() => openSite("https://www.facebook.com/profile.php?id=100006331726624")}/>
                        </div>
                        <p>facebook</p>
                    </div>
                    <div className="instagram">
                        <div className="imgholder">
                            <img src="/instagram.png" alt="" onClick={() => openSite("https://www.instagram.com/k_k_kk_1/")}/>
                        </div>
                        <p>Instagram</p>
                    </div>
                    <div className="telegram">
                        <div className="imgholder">
                            <img src="/telegram.png" alt="" onClick={() => openSite("t.me/Cykik0")}/>
                        </div>
                        <p>Telegram</p>
                    </div>
                    <div className="linkedin">
                        <div className="imgholder">
                            <img src="/linkedin.png" alt="" onClick={() => openSite("https://www.linkedin.com/in/kapil-kunwar-43a89a19a/")}/>
                        </div>
                        <p>LinkedIn</p>
                    </div>
                    <div className="github">
                        <div className="imgholder">
                            <img src="/github.png" alt="" onClick={() => openSite("https://github.com/undef125")}/>
                        </div>
                        <p>Github</p>
                    </div>
                    <div className="telephone">
                        <div className="imgholder">
                            <img src="/tel.png" alt="" onClick={() => openSite("")}/>
                        </div>
                        <p>Phone Call</p>
                    </div>
                </div>
                <div className="mailme">
                    <p>Mail Me</p>
                    <div className="mailMeHolder">
                        <input type="text" placeholder="Your name" value={name} onChange={e => setName(e.target.value)}/>
                        <input type="text" placeholder="Message" value={message} onChange={e => setMessage(e.target.value)}/>
                        <button className="btn btn-primary sumbitBtn" onClick={() => !name && !message ? alert("Fields can't be empty!") : window.location.href = `mailto:kapilkunwar55@gmail.com?subject=${name}&body=${message}`}>
                            Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
