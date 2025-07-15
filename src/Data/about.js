
import cv from '../assets/images/cv.png'
import portfolio from '../assets/images/portfolio.png'
import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'


export const about = {
  name: "Prerna Thakur",
  title: "MERN Stack Developer",
  image: "/profile.jpg", 

  summary: ["Hello! I'm Prerna, a dedicated and enthusiastic MERN Stack Developer ready to kick-start my career in web development. I have hands-on experience with the complete MERN stack—MongoDB, Express.js, React.js, and Node.js—and I’m passionate about building full-stack web applications. I also have a solid foundation in HTML5, CSS3, JavaScript, and Git for version control. I’m a quick learner, love solving real-world problems, and am eager to contribute to innovative development teams while continuously improving my skills."
  ],

  details: [
    "Proficient in HTML, CSS, JavaScript, Bootstrap",
    "Experience with Git, GitHub, VS Code",
    "Passionate about UI and performance optimization",
    "Always learning new tools and frameworks"
  ],

  skills: [
    "MongoDB", "Express.js", "React", "Node.js",
    "JavaScript", "HTML5", "CSS3", "Bootstrap",
    "Git", "GitHub", "VS Code", 
  ],

};

export const aboutLinksHeading = {
  heading: "Connect. Code. Learn. Explore.",
  paragraph: "Explore my links to connect, view work, resume, and projects."
};

export const aboutLinks = [
 
  {
    label: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/in/prernathakur9726/"
  },
  {
    label: "GitHub",
    image: github,
    url: "https://github.com/prerna-999"
  },
  {
    label: "Resume",
    image: cv,
    url: "/resume.pdf"
  },
  {
    label: "Portfolio",
    image: portfolio,
    url: "https://prerna-portfolio.netlify.app"
  }
];


