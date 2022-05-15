import "./App.css";
import { SideNav } from "./components/SideNav";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Works } from "./components/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomFloating from "./components/RandomFloating";
import { Helmet } from "react-helmet";
import { ParticlesPage } from './components/ParticlesPage';
import { loadFull } from "tsparticles";

function App() {
    const particlesInit = async (main:any) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };
    const particlesLoaded = (container:any) => {
        console.log(container);
    };

    return (
        <Router>
            <ParticlesPage particlesInit={particlesInit} particlesLoaded={particlesLoaded}/>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Kapil Kunwar</title>
            </Helmet>
            <RandomFloating />
            <div className="App">
                <div>
                    <SideNav></SideNav>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<AboutMe />}></Route>
                        <Route path="/skills" element={<Skills />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/works" element={<Works />}></Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
