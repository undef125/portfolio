import { AiFillEye, AiOutlineCode } from "react-icons/ai";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
type Props = {};

export const Works = (props: Props) => {
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
                <div className="workHolder">
                    <div className="workImageContainer">
                        <img src="/chatapp.png" alt="" />
                    </div>
                    <div className="detailSection">
                        <div className="title">Group Chat App</div>
                        <div className="workIconHolder">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipCode}
                            >
                                <div className="code">
                                    <AiOutlineCode
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/undef125/chatapp"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="live">
                                    <AiFillEye
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://chatappfrb.vercel.app/"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="workHolder">
                    <div className="workImageContainer">
                        <img src="/todo.png" alt="" />
                    </div>
                    <div className="detailSection">
                        <div className="title">Todo List</div>
                        <div className="workIconHolder">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipCode}
                            >
                                <div className="code">
                                    <AiOutlineCode
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/undef125/todowfrb"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="live">
                                    <AiFillEye
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://todowfrb.vercel.app/"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="workHolder">
                    <div className="workImageContainer">
                        <img src="/moviesnow.png" alt="" />
                    </div>
                    <div className="detailSection">
                        <div className="title">MoviesNow</div>
                        <div className="workIconHolder">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipCode}
                            >
                                <div className="code">
                                    <AiOutlineCode
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/undef125/moviesnow"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="live">
                                    <AiFillEye
                                        size={30}
                                        onClick={() => window.open("")}
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="workHolder">
                    <div className="workImageContainer">
                        <img src="/b64.png" alt="" />
                    </div>
                    <div className="detailSection">
                        <div className="title">Base64</div>
                        <div className="workIconHolder">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipCode}
                            >
                                <div className="code">
                                    <AiOutlineCode
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/undef125/base64en"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="live">
                                    <AiFillEye
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://base64en.netlify.app"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="workHolder">
                    <div className="workImageContainer">
                        <img src="/nepdet.png" alt="" />
                    </div>
                    <div className="detailSection">
                        <div className="title">Nepal Detail</div>
                        <div className="workIconHolder">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipCode}
                            >
                                <div className="code">
                                    <AiOutlineCode
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/undef125/nepdet"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="live">
                                    <AiFillEye
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://nepdet101.netlify.app/"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="workHolder">
                    <div className="workImageContainer">
                        <img src="/meowos.png" alt="" />
                    </div>
                    <div className="detailSection">
                        <div className="title">Meow OS</div>
                        <div className="workIconHolder">
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="code">
                                    <AiOutlineCode
                                        size={30}
                                        onClick={() => window.open("")}
                                    />
                                </div>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="right"
                                delay={{ show: 50,  hide: 100 }}
                                overlay={renderTooltipLive}
                            >
                                <div className="live">
                                    <AiFillEye
                                        size={30}
                                        onClick={() =>
                                            window.open(
                                                "https://anon125a.github.io/meowos/"
                                            )
                                        }
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
