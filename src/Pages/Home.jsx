
import "../assets/variableCSS/Home.css"
import { Banner } from "../Components/Banner";
import myresume from "../assets/PrernaResume.pdf"
import { About } from "./About";
import { Certificates } from "./Certificates";
import { Education } from "./Education";
import { Projects } from "./Project";
import { Skills } from "./Skills";

export const Home = () => {
    const navLinks = [
        { path: "/about", label: "About" },
        { path: "/education", label: "Education" },
        { path: "/projects", label: "Projects" },
        { path: "/certificates", label: "Certificates" },
        { path: "/skills", label: "Skills" },
    ];

    const socialLinks = [
        { url: "https://www.linkedin.com/in/prernathakur9726/", iconClass: "fa-brands fa-linkedin" },
        { url: "https://instagram.com", iconClass: "fa-brands fa-instagram" },
        { url: "https://facebook.com", iconClass: "fa-brands fa-square-facebook" },
    ];
    const resume = {
        label: "Download Resume",
        url: myresume
    }

    return (
        <>
            <Banner
                title="I'M PRERNA A WEB DEVELOPER"
                description={<> I create clean, responsive, and user-friendly websites <br /> with a focus on modern design and performance.</>}
                buttonText="LET'S TALK"
                socialLinks={socialLinks}
                resume={resume}
            />
            <div className="scroll">
                <About  className=" about-home"/>
                <Education />
                <Projects />
                <Certificates />
                <Skills />
            </div>

        </>
    );
};
