import '../index.css';

const Hero = () => {
    const heroStyles = {
        section: {
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
        },
        blob: {
            position: 'absolute',
            width: '500px',
            height: '500px',
            background: 'var(--gradient-main)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            opacity: '0.2',
            zIndex: '-1',
            animation: 'pulse 10s infinite alternate',
        },
        content: {
            zIndex: '1',
            animation: 'fadeInUp 1s ease-out',
        },
        title: {
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2',
        },
        highlight: {
            color: 'var(--primary-color)',
        },
        subtitle: {
            fontSize: '1.5rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
        },
        btn: {
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            background: 'var(--gradient-main)',
            border: 'none',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0, 242, 255, 0.3)',
            transition: 'transform 0.3s ease',
        },
        btnOutline: {
            padding: '0.8rem 2rem',
            fontSize: '1.1rem',
            background: 'transparent',
            border: '2px solid var(--primary-color)',
            borderRadius: '50px',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
        },
        btnContainer: {
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            marginTop: '2rem',
        }
    };

    return (
        <section id="hero" style={heroStyles.section}>
            <div style={{ ...heroStyles.blob, top: '-10%', left: '-10%' }}></div>
            <div style={{ ...heroStyles.blob, bottom: '-10%', right: '-10%', background: 'var(--secondary-color)' }}></div>

            <div className="container" style={heroStyles.content}>
                <h1 style={heroStyles.title}>
                    Hi, I'm <span style={heroStyles.highlight}>Aswin N A</span>
                </h1>
                <p style={heroStyles.subtitle}>
                    Junior Software Engineer | MERN Stack Developer
                </p>
                <div style={heroStyles.btnContainer}>
                    <a href="#projects">
                        <button style={heroStyles.btn} onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                            View My Work
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1FeU9SkAGPe4hPD99cWI6HDs63kAHopeK/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                        <button
                            style={heroStyles.btnOutline}
                            onMouseOver={(e) => { e.target.style.background = 'rgba(0, 242, 255, 0.1)'; e.target.style.transform = 'scale(1.05)'; }}
                            onMouseOut={(e) => { e.target.style.background = 'transparent'; e.target.style.transform = 'scale(1)'; }}
                        >
                            View Resume
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
