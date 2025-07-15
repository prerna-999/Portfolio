



import { AboutCard } from "../Components/AboutCard";
import { about, aboutLinks ,aboutLinksHeading} from "../Data/about";
import '../assets/variableCSS/About.css';

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
          skills={about.skills}
          heading={aboutLinksHeading.heading}
          paragraph={aboutLinksHeading.paragraph}
        />
      </div>
    </section>
  );
};
