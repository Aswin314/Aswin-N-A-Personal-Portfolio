import '../index.css';

const Footer = () => {
    const styles = {
        footer: {
            background: 'var(--bg-alt)',
            padding: '2rem 0',
            textAlign: 'center',
            marginTop: '4rem',
            borderTop: '1px solid var(--glass-border)',
        },
        text: {
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <p style={styles.text}>© {new Date().getFullYear()} Aswin N A. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
