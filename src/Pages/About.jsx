
// import { AboutCard } from "../Components/AboutCard";
// import { about } from "../Data/about";
// export const About = () => {
//     return (
//         <>
//             <section className="about">
//                 <div className="container">
//                     <h2>About Me</h2>
//                     <AboutCard name={about.name} title={about.title} summary={about.summary} />
//                 </div>
//             </section>

//         </>
//     )

// }

import { AboutCard } from "../Components/AboutCard";
import { about, aboutLinks } from "../Data/about";
import '../assets/variableCSS/About.css'

export const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2>About Me</h2>
        <AboutCard
          name={about.name}
          title={about.title}
          summary={about.summary}
          details={about.details}
          quote={about.quote}
          links={aboutLinks}
        />
      </div>
    </section>
  );
};

