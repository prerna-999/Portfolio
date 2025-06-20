
// import { EducationCard } from "../Components/Educationcard";
// import { educationData } from "../Data/educationdata";
// import { Experience } from "../Components/Experience"
// import '../assets/variableCSS/Education.css'

// export const Education = () => {
//   return (
//     <section>
//       <div className="container">
//         <Experience />
//           <h2>Education</h2>
//           {educationData.map((edu, index) => (
//             <EducationCard
//               key={index}
//               degree={edu.degree}
//               institution={edu.institution}
//               board={edu.board}
//               duration={edu.duration}
//             />
//           ))}
//         </div>
//     </section>
//   );
// };


import { EducationCard } from "../Components/Educationcard";
import { educationData } from "../Data/educationdata";
import { Experience } from "../Components/Experience";
import '../assets/variableCSS/Education.css';

export const Education = () => {
  return (
    <section className="edu-exp-section">
      <div className="container">
        <div className="experience-wrapper">
          <Experience />
        </div>

        <div className="education-wrapper">
          <h2 className="section-title">Education</h2>
          {educationData.map((edu, index) => (
            <section key={index} className="education-card-wrapper">
              <EducationCard
                degree={edu.degree}
                institution={edu.institution}
                board={edu.board}
                duration={edu.duration}
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
