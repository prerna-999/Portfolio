
import { ProjectCard } from "../Components/ProjectCard";
import { projects } from "../Data/projects";
import '../assets/variableCSS/Project.css'


export const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2>My Projects</h2>

        {/* Grid wrapper */}
        <div className="project-grid">
          {projects.map(project => (
            <ProjectCard
              key={project.name}
              name={project.name}
              stack={project.stack}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};



