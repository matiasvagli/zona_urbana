"use client";

import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ui/particle-background";

export const AboutUs = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="pt-24 pb-12 relative overflow-hidden bg-brand-darker border-y border-white/5">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-transparent to-brand-darker/50 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto space-y-8 text-lg text-neutral-300 leading-relaxed relative"
                >
                    <motion.div variants={itemVariants} className="text-center mb-12 relative">
                        {/* Text Glow Effect */}
                        <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full opacity-20" />

                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 inline-block relative z-10">
                            Nuestra Historia
                        </h2>
                        <div className="h-1 w-24 bg-brand-blue mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                    </motion.div>

                    <motion.p variants={itemVariants}>
                        <span className="text-brand-blue font-semibold drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]">Zona Urbana</span>, nuestro nombre nace por el año 2008, se crea con el objetivo de disfrutar de nuestra pasión, de lo que nos gusta hacer.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        Gracias a nuestra vocación venimos creciendo constantemente, tanto en lo que respecta al área de nuestros carteles en vía pública, como también en nuestro taller gráfico, contando con maquinas propias de impresión de gran formato (Roland 1,60m) de corte de vinilo (roland 1,20m) corte para letras corpóreas, pantógrafo CNC y un taller para herrería de 200m2. En estos años de trabajo fuimos incorporando e invirtiendo para poder cumplir con los objetivos y las necesidades que cada cliente nos va presentando.
                    </motion.p>

                    <motion.p variants={itemVariants} className="bg-brand-blue/5 p-6 rounded-xl border border-brand-blue/10 backdrop-blur-sm">
                        Hoy en día, seguimos innovando en el mercado incorporando publicidad digital con pantallas LED de última generación. Esta nueva tecnología nos permite ofrecer soluciones dinámicas y de alto impacto visual, adaptándonos a las tendencias actuales y brindando a nuestros clientes una mayor visibilidad para sus marcas.
                    </motion.p>

                    <motion.p variants={itemVariants}>
                        Innovamos constantemente nuestros productos, para que la imaginación de nuestro cliente se una con nuestras creaciones, dándole a sus necesidades respuestas rápidas, efectivas y duraderas. La única manera de hacer bien nuestro trabajo es ser apasionados en lo que hacemos, disfrutarlo y trasladarlo al producto final.
                    </motion.p>
                </motion.div>
            </div>

            {/* Decorative subtle background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-blue/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none" />

        </section>
    );
};
