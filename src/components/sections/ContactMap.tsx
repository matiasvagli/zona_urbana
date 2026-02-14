"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/ui/MapComponent"), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500">Cargando Mapa...</div>
});

export function ContactMap() {
    return (
        <section className="relative py-24 overflow-hidden bg-brand-dark" id="contact-map">
            {/* Background Map Visuals */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/20 via-brand-dark to-brand-dark" />
                <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
                    <path d="M0 100 Q 250 50 500 100 T 1000 100" stroke="#333" strokeWidth="2" fill="none" />
                    <path d="M0 300 Q 250 250 500 300 T 1000 300" stroke="#333" strokeWidth="2" fill="none" />
                    <path d="M0 500 Q 250 450 500 500 T 1000 500" stroke="#333" strokeWidth="2" fill="none" />
                    {/* Hotspots */}
                    {[1, 2, 3, 4, 5].map(i => (
                        <circle key={i} cx={100 + i * 180} cy={100 + (i % 2) * 200} r="4" fill="#2563eb" className="animate-pulse" />
                    ))}
                </svg>
            </div>

            <div className="container px-4 mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column: Text & Map Highlight */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            <span className="text-brand-blue">Estrategia</span> <br />
                            Geolocalizada
                        </h2>
                        <p className="text-xl text-neutral-400 max-w-md">
                            Analizamos patrones de tráfico y demografía para asegurar que tu mensaje llegue a la audiencia correcta, zona de cobertura .
                        </p>
                    </motion.div>

                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl">
                        {/* Mini Map Visualization */}
                        <MapComponent />
                    </div>
                </div>

                {/* Right Column: Floating Contact Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 rounded-3xl blur-xl opacity-50" />
                    <div className="relative bg-neutral-900/80 backdrop-blur-xl border border-white/10 p-1 md:p-2 rounded-3xl shadow-2xl">
                        <ContactForm />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
