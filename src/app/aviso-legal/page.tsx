import type { Metadata } from 'next';
import styles from './aviso-legal.module.css';

export const metadata: Metadata = {
    title: 'Aviso Legal – Pizza Italia | Mesón El Boalo',
    description: 'Aviso legal y condiciones de uso del sitio web de Auténtica Pizza Italiana – Mesón del Boalo.',
};

export default function AvisoLegal() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Aviso Legal</h1>

            <div className={styles.divider} />

            <section className={styles.section}>
                <h2 className={styles.heading}>Titular del sitio</h2>
                <ul className={styles.list}>
                    <li><strong>Titular:</strong> Auténtica Pizza Italiana – Mesón del Boalo</li>
                    <li><strong>Actividad:</strong> Restaurante / carta digital</li>
                    <li><strong>Dirección:</strong> [PENDIENTE DE CONFIRMAR]</li>
                    <li><strong>Teléfono:</strong> 617 974 414</li>
                    <li><strong>Email:</strong> [PENDIENTE DE CONFIRMAR]</li>
                    <li><strong>CIF/NIF:</strong> [PENDIENTE DE CONFIRMAR]</li>
                </ul>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <h2 className={styles.heading}>Condiciones de uso</h2>
                <p className={styles.paragraph}>
                    El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe y al orden público.
                </p>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <h2 className={styles.heading}>Propiedad intelectual e industrial</h2>
                <p className={styles.paragraph}>
                    Todos los contenidos de este sitio (textos, imágenes, logotipos, diseño y código) están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o modificación sin autorización del titular.
                </p>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <h2 className={styles.heading}>Responsabilidad</h2>
                <p className={styles.paragraph}>
                    El titular no se hace responsable del mal uso que se realice de los contenidos del sitio, ni de los daños que puedan derivarse del acceso o uso de la información publicada. El titular se reserva el derecho a modificar, suspender o eliminar contenidos sin previo aviso.
                </p>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <h2 className={styles.heading}>Enlaces</h2>
                <p className={styles.paragraph}>
                    Este sitio puede incluir enlaces a sitios de terceros. El titular no se responsabiliza del contenido ni de las políticas de dichos sitios.
                </p>
            </section>

            <div className={styles.divider} />

            <section className={styles.section}>
                <h2 className={styles.heading}>Legislación aplicable</h2>
                <p className={styles.paragraph}>
                    La relación entre el usuario y el titular se regirá por la normativa vigente en España, y cualquier controversia se someterá a los juzgados y tribunales que correspondan.
                </p>
            </section>
        </main>
    );
}
