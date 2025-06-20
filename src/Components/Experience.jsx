// import { ExperienceCard } from "./ExperienceCard";
// import { experience } from "../Data/experience";

// export const Experience = () => {
//   return (
//     <section>
//       <div className="container">
//         <h2>Experience</h2>
//         {experience.map((exp, index) => (
//           <ExperienceCard
//             key={index}
//             role={exp.role}
//             company={exp.company}
//             duration={exp.duration}
//             description={exp.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };


import { ExperienceCard } from "./ExperienceCard";
import { experience } from "../Data/experience";

export const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
      <h2 className="section-title">Experience</h2>
      {experience.map((exp, index) => (
        <section key={index} className="experience-card-wrapper">
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        </section>
      ))}
      </div>
    </section>
  );
};
