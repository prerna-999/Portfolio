
export const ProjectCard = ({ name, stack, description, link }) => {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p><strong>Tech Stack:</strong> {stack}</p>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
};

