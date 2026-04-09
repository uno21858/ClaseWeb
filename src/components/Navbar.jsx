import './Navbar.css'
import {Link, useLocation} from "react-router";

const Navbar = ({children}) => {
    const location = useLocation();

    const links = [
        {to: '/home', label: 'Bio'},
        {to: '/Projects', label: 'Projects'},
        {to: '/experience', label: 'Experience'},
        {to: '/Contact', label: 'Contact me'},
    ];

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    Full Stack Dev
                </div>
                <div className="navbar-links">
                    {links.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className="navbar-actions">
                    <button className="nav-connect-btn">Connect</button>
                </div>
            </nav>
            <main className="navbar-content">
                {children}
            </main>
        </>
    )
}

export default Navbar;