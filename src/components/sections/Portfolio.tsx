"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { motion } from "framer-motion";

const items = [
    {
        title: "Rutas y Avenidas",
        description: "Impacto visual masivo en el corazón de zonas estrategicas. Más de 500k visualizaciones diarias.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundImage: "url('/rutas.jpg')" }}
                />

            </div>
        ),
        className: "md:col-span-2",
        icon: <div className="h-4 w-4 rounded-full bg-brand-blue/50" />,
    },
    {
        title: "Accesos",
        description: "La ruta principal de entrada y salida",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundImage: "url('/avenidaurbana.jpg')" }}
                />

            </div>
        ),
        className: "md:col-span-1",
        icon: <div className="h-4 w-4 rounded-full bg-brand-orange/50" />,
    },
    {
        title: "Zona Comercial ",
        description: "Cercanía a puntos de decisión de compra.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundImage: "url('/comerciozona.jpg')" }}
                />

            </div>
        ),
        className: "md:col-span-1",
        icon: <div className="h-4 w-4 rounded-full bg-brand-blue/50" />,
    },
    {
        title: "Publicidad Digital",
        description: "Pantallas led con la ultima tecnologia.",
        header: (
            <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center opacity-100 transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundImage: "url('/pantalla.jpg')" }}
                />

            </div>
        ),
        className: "md:col-span-2",
        icon: <div className="h-4 w-4 rounded-full bg-brand-orange/50" />,
    },
];

export function Portfolio() {
    return (
        <section className="pt-0 pb-24 bg-brand-dark/50" id="portfolio">
            <div className="w-full px-4 md:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Nuestra Red
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                        Cobertura estratégica en los puntos neurálgicos de las zonas.
                    </p>
                </div>
                <BentoGrid className="w-full">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
