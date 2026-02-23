import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>
                <Link href="/aviso-legal" className={styles.legalLink}>
                    Aviso legal
                </Link>
                <span className={styles.separator}>·</span>
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
