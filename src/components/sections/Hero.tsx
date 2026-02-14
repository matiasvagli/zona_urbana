"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background with blur effect using the billboard image colors */}
            <div
                className="absolute inset-0 bg-cover md:bg-[length:80%] bg-center bg-no-repeat z-0 opacity-60"
                style={{
                    backgroundImage: "url('/zonanoche.jpg')",
                    transform: "scale(1)"
                }}
            />

            <div className="w-full relative z-10 flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">

                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 space-y-6 text-center md:text-left pt-20 md:pt-0"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Tu Marca <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">En Lo Más Alto</span>
                    </h1>

                    <p className="text-white/80 text-xl font-light max-w-lg mx-auto md:mx-0">
                        Espacios premium disponibles para que tu negocio no pase desapercibido.
                    </p>


                </motion.div>



            </div>
        </section>
    );
}
