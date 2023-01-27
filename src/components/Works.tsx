import { AiFillEye, AiOutlineCode } from "react-icons/ai";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export const Works = () => {
    const works: Array<Object> = [
        {
            imgUrl: "/booksmart.png",   //chatapp
            title: "Booksmart FullStack",
            linkGithub: "https://github.com/undef125/booksmartclient",
            linkLive: "https://booksmartnepal.netlify.app/",
        },
        {
            imgUrl: "/chatapp.png",   //chatapp
            title: "Group Chat App",
            linkGithub: "https://github.com/undef125/chatapp",
            linkLive: "https://chatappfrb.vercel.app/",
        },
        {
            imgUrl: "/tictactoe.png", //tictactoe
            title: "TicTacToe",
            linkGithub: "https://github.com/undef125/tictactoe",
            linkLive: "https://tictactoeundef.netlify.app/",
        },
        {
            imgUrl: "/towerofhanoi.png", //towerofhanoi
            title: "Tower Of Hanoi",
            linkGithub: "https://github.com/undef125/towerofhanoi",
            linkLive: "https://towerfhanoi.netlify.app/",
        },
        {
            imgUrl: "/serialatease.png", //serialatease
            title: "Serial At Ease",
            linkGithub: "https://github.com/undef125/serialatease",
            linkLive: "https://serialatease.netlify.app/",
        },
        {
            imgUrl: "/playsongs.png", //playsongs
            title: "Play Songs",
            linkGithub: "https://github.com/undef125/playsongs",
            linkLive: "https://playytsongs.netlify.app/",
        },
        {
            imgUrl: "/todo.png", //todo
            title: "Todo List",
            linkGithub: "https://github.com/undef125/todowfrb",
            linkLive: "https://todowfrb.vercel.app/",
        },
        {
            imgUrl: "/b64.png", //base64
            title: "Base64",
            linkGithub: "https://github.com/undef125/base64en",
            linkLive: "https://base64en.netlify.app",
        },
        {
            imgUrl: "/moviesnow.png", //moviesnow
            title: "MoviesNow",
            linkGithub: "https://github.com/undef125/moviesnow",
            linkLive: "",
        },
        {
            imgUrl: "/nepdet.png", //nepal detail
            title: "Nepal Detail",
            linkGithub: "https://github.com/undef125/nepdet",
            linkLive: "https://nepdet101.netlify.app/",
        },
        {
            imgUrl: "/meowos.png", //meow os website
            title: "Meow OS",
            linkGithub: "",
            linkLive: "https://anon125a.github.io/meowos/",
        },
        {
            imgUrl: "/calculator.png", //calculator
            title: "Basic Calculator",
            linkGithub: "https://github.com/undef125/basiccalculator",
            linkLive: "https://calculatorundef.netlify.app/",
        },
    ];
    const renderTooltipCode = (gg: any) => {
        return (
            <Tooltip id="button-tooltip" {...gg}>
                See Code
            </Tooltip>
        );
    };
    const renderTooltipLive = (gg: any) => {
        return (
            <Tooltip id="button-tooltip" {...gg}>
                See Live Website
            </Tooltip>
        );
    };
    return (
        <div className="worksPage">
            <div className="contacttext sticky">Works</div>
            <div className="new">
                <div className="clientwork"></div>
                <div className="sideprojects"></div>
            </div>
            <div className="allWorks">
                {works.map((indWork: any) => {
                    return (
                        <>
                            <div className="workHolder">
                                <div className="workImageContainer">
                                    <img src={indWork.imgUrl} alt="" />
                                </div>
                                <div className="detailSection">
                                    <div className="title">{indWork.title}</div>
                                    <div className="workIconHolder">
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 50, hide: 100 }}
                                            overlay={renderTooltipCode}
                                        >
                                            <div className="code">
                                                <AiOutlineCode
                                                    size={30}
                                                    onClick={() =>
                                                        window.open(`${indWork.linkGithub}`)
                                                    }
                                                />
                                            </div>
                                        </OverlayTrigger>
                                        <OverlayTrigger
                                            placement="right"
                                            delay={{ show: 50, hide: 100 }}
                                            overlay={renderTooltipLive}
                                        >
                                            <div className="live">
                                                <AiFillEye
                                                    size={30}
                                                    onClick={() =>
                                                        window.open(
                                                            `${indWork.linkLive}`
                                                        )
                                                    }
                                                />
                                            </div>
                                        </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};
