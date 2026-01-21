import '../index.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and analytics. Built with MERN stack.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Task Management Tool",
            description: "Collaborative task manager with drag-and-drop functionality.",
            tech: ["MERN", "Redux"],
            link: "#"
        }
    ];

    const styles = {
        section: {
            padding: 'var(--spacing-lg) 0',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
        },
        card: {
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            borderRadius: '15px',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
        },
        image: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            background: '#2a2a3e', // Placeholder color
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-muted)',
        },
        content: {
            padding: '1.5rem',
        },
        title: {
            fontSize: '1.5rem',
            marginBottom: '0.5rem',
        },
        desc: {
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            fontSize: '0.9rem',
        },
        tags: {
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
        },
        tag: {
            background: 'rgba(0, 242, 255, 0.1)',
            color: 'var(--primary-color)',
            padding: '0.2rem 0.8rem',
            borderRadius: '20px',
            fontSize: '0.8rem',
        },
        link: {
            display: 'inline-block',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderBottom: '2px solid var(--primary-color)',
        }
    };

    return (
        <section id="projects" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div style={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={styles.image}>Project Preview</div>
                            <div style={styles.content}>
                                <h3 style={styles.title}>{project.title}</h3>
                                <p style={styles.desc}>{project.description}</p>
                                <div style={styles.tags}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={styles.tag}>{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} style={styles.link}>View Code &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
