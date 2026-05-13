import * as React from 'react';

interface ContactEmailProps {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export const ContactEmail: React.FC<Readonly<ContactEmailProps>> = ({
    name,
    email,
    company,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', color: '#333' }}>
        <h1 style={{ color: '#0066ff' }}>Nueva Consulta de Cotización</h1>
        <p>Has recibido un nuevo mensaje desde el formulario de contacto de <strong>Zona Urbana</strong>.</p>
        
        <div style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            {company && <p><strong>Empresa:</strong> {company}</p>}
            <p><strong>Mensaje:</strong></p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
        </div>
        
        <footer style={{ marginTop: '30px', fontSize: '12px', color: '#888' }}>
            Este correo fue enviado automáticamente desde el sitio web de Zona Urbana.
        </footer>
    </div>
);
