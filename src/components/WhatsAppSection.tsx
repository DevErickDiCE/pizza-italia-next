'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

export function WhatsAppSection() {
    return (
        <section style={{ paddingTop: '3rem', paddingBottom: '3rem', backgroundColor: '#0a0a0a', color: 'white' }}>

            {/* PIDE AHORA - Clean, no card */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <p style={{ letterSpacing: '4px', color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                    PEDIDOS & RESERVAS
                </p>
                <h2 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                    PIDE AHORA
                </h2>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/34617974474"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        background: 'linear-gradient(135deg, #d4b76a 0%, #b59b5a 100%)',
                        color: 'white',
                        paddingLeft: '1.5rem',
                        paddingRight: '1.5rem',
                        paddingTop: '0.6rem',
                        paddingBottom: '0.6rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        boxShadow: '0 4px 20px -4px rgba(212, 183, 106, 0.4)',
                        textDecoration: 'none',
                        textTransform: 'none'
                    }}
                >
                    WhatsApp
                </motion.a>
            </div>

            {/* ENCUÉNTRANOS Title */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
                    ENCUÉNTRANOS
                </h2>
                {/* Italian tricolor line */}
                <div style={{
                    width: '8rem',
                    height: '2px',
                    margin: '0.75rem auto 0',
                    background: 'linear-gradient(to right, #166534, #22c55e, #ffffff, #ef4444, #b91c1c)',
                    borderRadius: '9999px',
                    opacity: 0.8
                }} />
            </div>

            {/* Cards - 3 columnas */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                maxWidth: '750px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '1rem',
                paddingRight: '1rem'
            }}>

                {/* Dirección */}
                <motion.div
                    whileHover={{ scale: 1.03, y: -3 }}
                    style={{
                        background: 'linear-gradient(145deg, #1a1a1a 0%, #141414 100%)',
                        borderRadius: '1rem',
                        padding: '1.5rem 1rem',
                        border: '1px solid rgba(212, 183, 106, 0.15)',
                        boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    className="hover:border-[#d4b76a]/35"
                >
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 183, 106, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                        border: '1px solid rgba(212, 183, 106, 0.2)'
                    }}>
                        <MapPin size={20} style={{ color: '#d4b76a' }} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#d4b76a', letterSpacing: '0.03em' }}>MESÓN EL BOALO</h3>
                    <p style={{ color: '#737373', fontSize: '0.75rem' }}>C/ Real, 12 · El Boalo</p>
                </motion.div>

                {/* Horario */}
                <motion.div
                    whileHover={{ scale: 1.03, y: -3 }}
                    style={{
                        background: 'linear-gradient(145deg, #1a1a1a 0%, #141414 100%)',
                        borderRadius: '1rem',
                        padding: '1.5rem 1rem',
                        border: '1px solid rgba(212, 183, 106, 0.15)',
                        boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    className="hover:border-[#d4b76a]/35"
                >
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 183, 106, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                        border: '1px solid rgba(212, 183, 106, 0.2)'
                    }}>
                        <Clock size={20} style={{ color: '#d4b76a' }} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#d4b76a', letterSpacing: '0.03em' }}>HORARIO</h3>
                    <p style={{ color: '#737373', fontSize: '0.7rem', lineHeight: '1.5' }}>
                        Mar – Dom<br />13:00 – 16:00<br />20:00 – 23:30
                    </p>
                </motion.div>

                {/* Teléfono */}
                <motion.a
                    whileHover={{ scale: 1.03, y: -3 }}
                    href="tel:+34617974474"
                    style={{
                        background: 'linear-gradient(145deg, #1a1a1a 0%, #141414 100%)',
                        borderRadius: '1rem',
                        padding: '1.5rem 1rem',
                        border: '1px solid rgba(212, 183, 106, 0.15)',
                        boxShadow: '0 8px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: 'white',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    className="hover:border-[#d4b76a]/35"
                >
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(212, 183, 106, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '0.75rem',
                        border: '1px solid rgba(212, 183, 106, 0.2)'
                    }}>
                        <Phone size={20} style={{ color: '#d4b76a' }} />
                    </div>
                    <h3 className="font-display" style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#d4b76a', letterSpacing: '0.03em' }}>TELÉFONO</h3>
                    <p style={{ color: '#a3a3a3', fontSize: '0.875rem', fontWeight: '600' }}>617 974 474</p>
                </motion.a>

            </div>
        </section>
    );
}
