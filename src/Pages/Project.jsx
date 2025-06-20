
import { ProjectCard } from "../Components/ProjectCard";
import { projects } from "../Data/projects";


export const Projects = () => {
  return (
    <section>
      <div className="container">
        <h2>My Projects</h2>
        {projects.map(project => (
          <ProjectCard
            key={project.name}
            name={project.name}
            stack={project.stack}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};




