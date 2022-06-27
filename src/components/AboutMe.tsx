export const AboutMe = () => {
    return (
        <>
            <div className="aboutmecontainer">
                <div className="textSection">
                    <div className="hi">Hi, I'm</div>
                    <div className="name">Kapil Kunwar</div>
                    <p>
                        I'm a frontend web developer with a strong work
                        ethic and a passion for what I do.<br/>Currently a third year computer engineering student at TU IOE, Purwanchal Campus Dharan.
                    </p>
                    <button className="cvButton">Download CV</button>
                </div>
                <div className="imageSection">
                    <img src="/prof.jpg" alt="" />
                </div>
            </div>
        </>
    );
};
