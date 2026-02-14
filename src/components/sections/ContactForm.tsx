"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { submitContactForm } from "@/app/actions";
import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState<null | string>(null);

    async function handleSubmit(formData: FormData) {
        const result = await submitContactForm(formData);
        if (result.success) {
            setStatus(result.message);
        }
    }

    return (
        <div className="p-6 md:p-8">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Cotizar Campaña</h3>
                <p className="text-neutral-400 text-sm">Completa el formulario y te contactaremos.</p>
            </div>

            {status ? (
                <div className="p-8 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                    <h3 className="text-xl font-bold text-green-400 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-green-200 text-sm mb-4">{status}</p>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setStatus(null)}
                    >
                        Nueva consulta
                    </Button>
                </div>
            ) : (
                <form action={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-medium text-neutral-400 uppercase">Nombre</label>
                            <Input id="name" name="name" className="bg-black/40 border-white/5" placeholder="Tu nombre" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-xs font-medium text-neutral-400 uppercase">Empresa</label>
                            <Input id="company" name="company" className="bg-black/40 border-white/5" placeholder="Empresa" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-medium text-neutral-400 uppercase">Email</label>
                        <Input id="email" name="email" type="email" className="bg-black/40 border-white/5" placeholder="tu@email.com" required />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-medium text-neutral-400 uppercase">Mensaje</label>
                        <Textarea id="message" name="message" className="bg-black/40 border-white/5 min-h-[100px]" placeholder="Detalles de la campaña..." />
                    </div>

                    <Button type="submit" className="w-full" variant="accent">
                        Enviar Solicitud
                    </Button>
                </form>
            )}
        </div>
    );
}
