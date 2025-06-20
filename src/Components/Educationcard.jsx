// export const EducationCard = ({ degree, institution, board, duration }) => {
//   return (
//     <div className="container">
//       <div className="education-card">
//         <h3>{degree}</h3>
//         <p><strong>Institution:</strong> {institution}</p>
//         <p><strong>Board/University:</strong> {board}</p>
//         <p><strong>Duration:</strong> {duration}</p>
//       </div>

//     </div>
//   );
// };

export const EducationCard = ({ degree, institution, board, duration }) => {
  return (
    <div className="conatiner">
      <div className="education-card fade-in">
        <h3 className="education-degree">🎓 {degree}</h3>
        <p><strong>Institution:</strong> {institution}</p>
        <p><strong>Board/University:</strong> {board}</p>
        <p><strong>Duration:</strong> {duration}</p>
      </div>
    </div>
  );
};
