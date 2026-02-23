import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                Desarrollado por{' '}
                <a
                    href="https://www.potenciasoluciones.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    PotencIA Soluciones
                </a>
            </p>
        </footer>
    );
}
