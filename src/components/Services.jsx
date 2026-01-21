import '../index.css';

const Services = () => {
    const services = [
        {
            title: "Full Stack Development",
            desc: "End-to-end web application development using the MERN stack."
        },
        {
            title: "Frontend Architecture",
            desc: "Building responsive, interactive, and performant user interfaces with React."
        },
        {
            title: "API Design",
            desc: "Robust RESTful API development with Node.js and Express."
        }
    ];

    const styles = {
        section: {
            padding: 'var(--spacing-lg) 0',
            background: 'var(--bg-alt)',
        },
        grid: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
        },
        card: {
            flex: '1 1 300px',
            maxWidth: '350px',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            transition: '0.3s',
        },
        icon: {
            fontSize: '3rem',
            marginBottom: '1rem',
            color: 'var(--primary-color)',
        },
        title: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
        },
        desc: {
            color: 'var(--text-muted)',
        }
    };

    return (
        <section id="services" style={styles.section}>
            <div className="container">
                <h2 className="section-title">My Services</h2>
                <div style={styles.grid}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                                e.currentTarget.style.transform = 'scale(1.02)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            <h3 style={styles.title}>{service.title}</h3>
                            <p style={styles.desc}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
