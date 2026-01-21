import '../index.css';
import { useState } from 'react';

const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);

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
        },
        popupOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        popupContent: {
            background: '#1a1a1a',
            padding: '2rem',
            borderRadius: '15px',
            textAlign: 'center',
            border: '1px solid var(--primary-color)',
            maxWidth: '90%',
            width: '400px',
        },
        popupTitle: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            color: 'var(--primary-color)',
        },
        popupBtn: {
            marginTop: '1.5rem',
            padding: '0.8rem 2rem',
            background: 'var(--gradient-main)',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
            fontSize: '1rem',
        },
        socialLinks: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
        },
        socialLink: {
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            fontSize: '1.2rem',
            transition: 'color 0.3s',
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdeqdViwjC3w0IsTALkEBKqZP7JCKQeer6Ln8Dvoh9Ur0vJZw/formResponse', {
                method: 'POST',
                body: data,
                mode: 'no-cors'
            });
            setShowPopup(true);
            form.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div style={styles.socialLinks}>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = 'white'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub Profile
                    </a>
                </div>

                <div style={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="entry.1091692301" placeholder="Your Name" style={styles.input} required />
                        <input type="email" name="entry.2056707971" placeholder="Your Email" style={styles.input} required />
                        <textarea name="entry.560044208" placeholder="Your Message" style={styles.textarea} required></textarea>
                        <button type="submit" style={styles.btn} onMouseOver={(e) => e.target.style.opacity = '0.9'} onMouseOut={(e) => e.target.style.opacity = '1'}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div style={styles.popupOverlay}>
                    <div style={styles.popupContent}>
                        <h3 style={styles.popupTitle}>Message Sent!</h3>
                        <p>Thank you for contacting me. I will get back to you soon.</p>
                        <button style={styles.popupBtn} onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
