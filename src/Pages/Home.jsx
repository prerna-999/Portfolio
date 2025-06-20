


import { Banner } from "../Components/Banner";

export const Home = () => {
    const navLinks = [
        { path: "/about", label: "About" },
        { path: "/education", label: "Education" },
        { path: "/projects", label: "Projects" },
        { path: "/certificates", label: "Certificates" },
        { path: "/skills", label: "Skills" },
    ];

    const socialLinks = [
        { url: "https://linkedin.com", iconClass: "fa-brands fa-linkedin" },
        { url: "https://instagram.com", iconClass: "fa-brands fa-instagram" },
        { url: "https://facebook.com", iconClass: "fa-brands fa-square-facebook" },
    ];

    return (
        <>
            <Banner
                title="I'M PRERNA A WEB DEVELOPER"
                description="I create clean, responsive, and user-friendly websites with a focus on modern design and performance."
                buttonText="LET'S TALK"
                socialLinks={socialLinks}
            />
           
        </>
    );
};
