// export const AboutCard = ({ name, title, summary }) => {
//     return (
//         <div className="container">
//             <div className="about-card">
//                 <div className="row">
//                     <div className="col-6">
//                         <h3 >{name}</h3>
//                         <h4>{title}</h4>
//                     </div>
//                     <div className="col-6">
//                         <p>{summary}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export const AboutCard = ({ name, title, summary, details = [], quote, links }) => {
  return (
    <div className="container">
      <div className="about-card">
        <div className="row">
          {/* Left Column */}
          <div className="col-6">
            <h3>{name}</h3>
            <h4>{title}</h4>

            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  {link.icon}{" "}
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <blockquote><em>{quote}</em></blockquote>
          </div>

          {/* Right Column */}
          <div className="col-6">
            <p>{summary}</p>
            <ul>
              {details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
