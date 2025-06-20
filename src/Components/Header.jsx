import { Link } from 'react-router-dom';
import '../assets/variableCSS/Header.css';

export const Header = ({ siteName, navLinks }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <h4>
                        <Link to="/" className="logo">{siteName}</Link>
                    </h4>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navLinks?.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link" to={item.path}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="icon">
                            <Link to="/contact" className="btn btn-outline-success">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
