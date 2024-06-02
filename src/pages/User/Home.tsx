import { Link } from "react-router-dom";
import "../../App.css";
import NavBar from "../../components/NavBar";
import Overlay from "../../components/Overlay";
import Section from "../../components/Section";
import Home1 from "./Home1";
import About from "./About";
import Looking from "./Looking";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Section className="section-extend" >
                <Overlay className="bg-violet-transparent" >
                    <NavBar />
                    <div className="hero-section">
                        <div className="content">
                            <h1>Find your dream property today.</h1>
                            <p className="text-left" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="btns">
                                <Link to='/' className="btn-white" >Find now</Link>
                            </div>
                        </div>
                        <div className="form-cont">
                            <div className="head">
                                <p>Need help ?</p>
                                <h1>Message us</h1>
                            </div>
                            <div className="form">
                                <input placeholder="Your Name" className="input" />
                                <input placeholder="Your Email" className="input" />
                                <textarea rows={6} placeholder="Message" className="p-3" />
                                <button className="btn-pri" >Send</button>
                            </div>
                        </div>
                    </div>
                </Overlay>
            </Section>
            <Section>
                <Home1 />
            </Section>

            <About />
            <Looking />
            <Footer />
        </>
    )
};

export default Home;