import { useState } from 'react';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navStyles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            backgroundColor: 'rgba(5, 5, 16, 0.8)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '1rem 0',
        },
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            background: 'var(--gradient-main)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
        },
        links: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            color: 'var(--text-main)',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.3s',
        },
        mobileMenu: {
            display: 'none', // Hidden by default on desktop
        }
    };

    return (
        <nav style={navStyles.nav}>
            <div className="container" style={navStyles.container}>
                <div style={navStyles.logo}>Aswin.dev</div>

                {/* Desktop Links */}
                <ul style={navStyles.links} className="nav-links">
                    <li><a href="#hero" style={navStyles.link}>Home</a></li>
                    <li><a href="#about" style={navStyles.link}>About</a></li>
                    <li><a href="#skills" style={navStyles.link}>Skills</a></li>
                    <li><a href="#projects" style={navStyles.link}>Projects</a></li>
                    <li><a href="#contact" style={navStyles.link}>Contact</a></li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
