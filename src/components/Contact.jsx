import '../index.css';

const Contact = () => {
    const styles = {
        section: {
            padding: 'var(--spacing-lg) 0',
        },
        formContainer: {
            maxWidth: '600px',
            margin: '0 auto',
            background: 'var(--glass-bg)',
            padding: '3rem',
            borderRadius: '20px',
            border: '1px solid var(--glass-border)',
        },
        input: {
            width: '100%',
            padding: '1rem',
            marginBottom: '1rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--glass-border)',
            borderRadius: '5px',
            color: 'white',
            fontSize: '1rem',
            fontFamily: 'inherit',
        },
        textarea: {
            width: '100%',
            padding: '1rem',
            marginBottom: '2rem',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--glass-border)',
            borderRadius: '5px',
            color: 'white',
            fontSize: '1rem',
            fontFamily: 'inherit',
            minHeight: '150px',
            resize: 'vertical',
        },
        btn: {
            width: '100%',
            padding: '1rem',
            background: 'var(--gradient-main)',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div style={styles.formContainer}>
                    <form>
                        <input type="text" placeholder="Your Name" style={styles.input} required />
                        <input type="email" placeholder="Your Email" style={styles.input} required />
                        <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
                        <button type="submit" style={styles.btn} onMouseOver={(e) => e.target.style.opacity = '0.9'} onMouseOut={(e) => e.target.style.opacity = '1'}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
