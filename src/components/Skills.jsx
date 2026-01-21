import '../index.css';

const Skills = () => {
    const skills = [
        { name: "React", level: "90%" },
        { name: "Node.js", level: "85%" },
        { name: "Express.js", level: "85%" },
        { name: "MongoDB", level: "80%" },
        { name: "JavaScript (ES6+)", level: "90%" },
        { name: "HTML/CSS", level: "95%" },
        { name: "Git & GitHub", level: "85%" },
        { name: "REST APIs", level: "90%" }
    ];

    const styles = {
        section: {
            padding: 'var(--spacing-lg) 0',
            background: 'var(--bg-alt)',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
        },
        card: {
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            transition: 'transform 0.3s ease',
        },
        name: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
        },
        barBg: {
            width: '100%',
            height: '10px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '5px',
            overflow: 'hidden',
        },
        barFill: (level) => ({
            width: level,
            height: '100%',
            background: 'var(--gradient-main)',
            borderRadius: '5px',
        })
    };

    return (
        <section id="skills" style={styles.section}>
            <div className="container">
                <h2 className="section-title">My Skills</h2>
                <div style={styles.grid}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={styles.name}>{skill.name}</h3>
                            <div style={styles.barBg}>
                                <div style={styles.barFill(skill.level)}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
