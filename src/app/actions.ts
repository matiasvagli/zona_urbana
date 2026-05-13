"use server";

import { Resend } from 'resend';
import { ContactEmail } from '@/components/emails/ContactEmail';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
    try {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const company = formData.get("company") as string;
        const message = formData.get("message") as string;

        const { data, error } = await resend.emails.send({
            from: 'Zona Urbana <onboarding@resend.dev>',
            to: ['zonaurbanapublicidad@gmail.com'],
            subject: `Nueva consulta: ${name}`,
            react: ContactEmail({ name, email, company, message }) as React.ReactElement,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, message: "Hubo un error al enviar el mensaje. Reintente luego." };
        }

        return { success: true, message: "¡Mensaje enviado con éxito! Te contactaremos pronto." };
    } catch (e) {
        console.error("Submit Error:", e);
        return { success: false, message: "Ocurrió un error inesperado." };
    }
}
