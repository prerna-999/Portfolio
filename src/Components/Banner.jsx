
import prerna from "../assets/images/prerna.jpg"
import '../assets/variableCSS/Banner.css';

// export const Banner = ({ title, description, buttonText, socialLinks, resume }) => {
//     return (
//         <section className='banner'>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-6">
//                         <div className="banner-text">
//                             <div className="line"></div>
//                             <h1>{title}</h1>
//                             <p>{description}</p>
//                             <a href="/Contact" className="btn btn-primary">{buttonText}</a>
//                             <h5>Follow me</h5>
//                             <div className='icon-content'>
//                                 {socialLinks.map((link, index) => (
//                                     <div className='icon' key={index}>
//                                         <a href={link.url} target="_blank" rel="noopener noreferrer">
//                                             <i className={link.iconClass}></i>
//                                         </a>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div className="resume">
//                             <a href={resume.url} className="resume-download" target="_blank" rel="noopener noreferrer">
//                                 {resume.label}
//                             </a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-6">
//                         <img src={prerna} alt="Prerna" className='image' />
//                     </div>
//                 </div>
//             </div>
//         </section>

//     );
// };


import { Link } from 'react-router-dom';


export const Banner = ({ title, description, buttonText, socialLinks, resume }) => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="banner-text">
                            <div className="line"></div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            
                            {/* ✅ React Router Link */}
                            <Link to="/Contact" className="btn btn-primary">
                                {buttonText}
                            </Link>

                            <h5>Follow me</h5>
                            <div className='icon-content'>
                                {socialLinks.map((link, index) => (
                                    <div className='icon' key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            <i className={link.iconClass}></i>
                                        </a>
                                    </div>
                                ))}
                            </div>

                            <div className="resume">
                                <a href={resume.url} className="resume-download" target="_blank" rel="noopener noreferrer">
                                    {resume.label}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={prerna} alt="Prerna" className='image' />
                    </div>
                </div>
            </div>
        </section>
    );
};
