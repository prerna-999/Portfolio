

import prerna from '../assets/images/prerna.jpg';
import '../assets/variableCSS/Banner.css';

export const Banner = ({ title, description, buttonText, socialLinks }) => {
    return (
        <section className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="banner-text">
                            <div className="line"></div>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <a href="#contact" className="btn btn-primary">{buttonText}</a>
                            <h6>Follow me</h6>
                            <div className='icon-content'>
                                {socialLinks.map((link, index) => (
                                    <div className='icon' key={index}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            <i className={link.iconClass}></i>
                                        </a>
                                    </div>
                                ))}
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
