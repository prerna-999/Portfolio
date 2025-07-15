

import { SkillCard } from "../Components/SkillCard";
import { skills } from "../Data/skills";
import '../assets/variableCSS/Skill.css'

// export const Skills = () => {
//   return (
//     <section>
//       <div  className="container">
//         <h2>Technical Skills</h2>
//         <div>
//           {skills.map(skill => (
//             <SkillCard
//               key={skill.id}
//               image={skill.image}
//               language={skill.language}
//               percentage={skill.percentage}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useState, useEffect } from "react";

export const Skills = () => {
  const [percentages, setPercentages] = useState(
    skills.map(() => 0) 
  );

  useEffect(() => {
    const intervals = skills.map((skill, index) => {
      return setInterval(() => {
        setPercentages((prev) => {
          const updated = [...prev];
          if (updated[index] < skill.percentage) {
            updated[index] += 1;
          }
          return updated;
        });
      }, 20); // Speed of animation
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.id}
              image={skill.image}
              language={skill.language}
              percentage={percentages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
