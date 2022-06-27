import "./App.css";
import { SideNav } from "./components/SideNav";
import { AboutMe } from "./components/AboutMe";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Works } from "./components/Works";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

function App() {
    return (
        <Router>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Kapil Kunwar</title>
                <meta property="title" content="Kapil Kunwar" />
                <meta
                    name="description"
                    content="Kapil Kunwar, Learner | Web Developer |  Computer Engineering Student"
                />
                <title>Kapil Kunwar</title>
            </Helmet>
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
