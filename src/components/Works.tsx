import { AiFillEye, AiOutlineCode } from "react-icons/ai";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

export const Works = () => {
    const works: Array<Object> = [
        {
            imgUrl: "/chatapp.png",
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
        // {
        //     imgUrl: "/calculator.png",  //calculator
        //     title: "Calculator",
        //     linkGithub: "https://github.com/undef125/basiccalculator",
        //     linkLive: "https://calculatorundef.netlify.app/",
        // },
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
            imgUrl: "/b64.png", //todo
            title: "Base64",
            linkGithub: "https://github.com/undef125/base64en",
            linkLive: "https://base64en.netlify.app",
        },
        {
            imgUrl: "/moviesnow.png", //todo
            title: "MoviesNow",
            linkGithub: "https://github.com/undef125/moviesnow",
            linkLive: "",
        },
        {
            imgUrl: "/nepdet.png", //todo
            title: "Nepal Detail",
            linkGithub: "https://github.com/undef125/nepdet",
            linkLive: "https://nepdet101.netlify.app/",
        },
        {
            imgUrl: "/meowos.png", //todo
            title: "Meow OS",
            linkGithub: "",
            linkLive: "https://anon125a.github.io/meowos/",
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
            <div className="contacttext">Works</div>
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
                                            overlay={renderTooltipLive}
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
