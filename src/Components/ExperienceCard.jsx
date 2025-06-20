// export const ExperienceCard = ({ role, company, duration, description }) => {
//   return (
//     <div className="container">
//       <h3>{role}</h3>
//       <p><strong>Company:</strong> {company}</p>
//       <p><strong>Duration:</strong> {duration}</p>
//       <ul>
//         {description.map((point, index) => (
//           <li key={index}>{point}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export const ExperienceCard = ({ role, company, duration, description }) => {
  return (
    <div className="conatiner">
    <div className="experience-card fade-in">
      <h3 className="experience-role">💼 {role}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <ul>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};
