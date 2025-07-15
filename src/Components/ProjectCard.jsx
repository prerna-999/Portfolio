
export const ProjectCard = ({ name, stack, description }) => {
  return (
    <div className="project-card">
      <h3>{name}</h3>
      <p><strong>Tech Stack:</strong> {stack}</p>
      <p>{description}</p>
    </div>
  );
};

