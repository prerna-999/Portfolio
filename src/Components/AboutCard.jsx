
import prerna from '../assets/images/prerna.jpg'
export const AboutCard = ({ name, title, summary = [], quote, links, skills = [], heading, paragraph}) => {
  return (
    <div className="container ">
      <div className="about-card">
        <div className="row">
          {/* Left Column */}
          <div className="col-6 ">
            <div className="profile-image">
              <img src={prerna} alt={`${name}'s profile`} className='image' />
            </div>
            <h4>{heading}</h4>
            <p>{paragraph}</p>
            <ul className="about-links">
              {links.map((link, index) => (
                <li key={index}>
                  {" "}
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.image || link.icon} alt={link.label} style={{ width: '30px' }} />
                  </a>

                </li>
              ))}
            </ul>

            <blockquote><em>{quote}</em></blockquote>
          </div>

          {/* Right Column */}
          <div className="col-6 ">
            <h3>{name}</h3>
            <h4>{title}</h4>
            <div className="summary">
              {summary.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="skills-section">
              <h5>Key Skills:</h5>
              <div className="skills-list">
                <ul>
                  {skills.map((skill, idx) => (
                    <li key={idx} className="skill-badge">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
