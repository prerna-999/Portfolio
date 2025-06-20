export const LanguageCard = ({ language, level }) => {
  return (
    <div className="container">
      <p><strong>{language}</strong></p>
      <p>Proficiency: {level}</p>
    </div>
  );
};