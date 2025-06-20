

import { SkillCard } from "../Components/SkillCard";
import { skills } from "../Data/skills";

export const Skills = () => {
  return (
    <section>
      <div  className="container">
        <h2>Technical Skills</h2>
        <div>
          {skills.map(skill => (
            <SkillCard
              key={skill.id}
              image={skill.image}
              language={skill.language}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

