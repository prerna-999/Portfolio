
export const SkillCard = ({ image, language, percentage }) => {
  return (
    <div className="container">
      <img src={image} />
      <h3>{language}</h3>
      <p>{percentage}%</p>
    </div>
  );
};
