"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        image: "/mono1.jpeg",
        title: "Acceso Canning",
        location: "Ezeiza - Canning",
        format: "Frente de Ruta",
        impact: "+800K",
        tag: "DISPONIBLE"
    },
    {
        image: "/zona.jpg",
        title: "Zona Sur Hub",
        location: "Avenida San Martin",
        format: "Monoposte 10x5m",
        impact: "+500K",
        tag: "DISPONIBLE"
    },
    {
        image: "/pantalla.jpg",
        title: "Impacto Nocturno",
        location: "Principales Accesos",
        format: "Iluminación LED Front",
        impact: "+1M",
        tag: "PREMIUM"
    },
    {
        image: "/comerciozona.jpg",
        title: "Zona Comercial",
        location: "Canning",
        format: "Skyscraper 25x15m",
        impact: "+1.2M",
        tag: "DISPONIBLE"
    },

];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center bg-black overflow-hidden pt-20">
            {/* Background Grid & Effects */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Main Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 scale-110"
                    style={{ backgroundImage: 'url(/zonanoche.jpg)' }}
                />

                {/* Overlays for Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#1e3a8a_0%,transparent_70%)] opacity-20" />
            </div>

            <div className="container relative z-10 px-6 md:px-12 xl:px-24 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT: CONTENT */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                            className="flex items-center gap-3"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Líderes en Publicidad Exterior</span>
                        </motion.div>

                        <div className="space-y-2">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl md:text-8xl xl:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8]"
                            >
                                TU MARCA
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-6xl md:text-8xl xl:text-9xl font-black text-brand-blue uppercase tracking-tighter leading-[0.8]"
                            >
                                SIN LÍMITES
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isLoaded ? { opacity: 1 } : {}}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-white/40 max-w-md leading-relaxed"
                        >
                            Estrategias masivas de impacto visual. Conectamos tu marca con audiencias reales en los puntos más estratégicos del país.
                        </motion.p>
                    </div>

                    {/* RIGHT: PHOTO CAROUSEL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative w-full aspect-video lg:aspect-[4/3] max-w-2xl ml-auto"
                    >
                        {/* Frames Decorative */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[2rem] pointer-events-none" />

                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Slide Content */}
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <span className="px-3 py-1 bg-brand-blue text-[10px] font-black text-white uppercase tracking-widest rounded-sm mb-4 inline-block">
                                            {slides[currentIndex].tag}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-1">
                                            {slides[currentIndex].title}
                                        </h3>
                                        <p className="text-sm text-white/50 font-medium uppercase tracking-widest">
                                            {slides[currentIndex].location}
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Controls */}
                            <div className="absolute bottom-8 right-8 flex gap-2 z-10">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-brand-blue" : "w-2 bg-white/20 hover:bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM: BRANDS MARQUEE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 lg:mt-24 pt-12 border-t border-white/5 space-y-8"
                >
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-blue">Marcas que confían</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>

                    <div className="relative overflow-hidden w-full group py-4">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                            className="flex w-max whitespace-nowrap items-center opacity-40 group-hover:opacity-100 transition-all duration-700"
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
                                    {/* MOSTAZA */}
                                    <span className="text-3xl md:text-5xl font-black text-red-500 tracking-tighter uppercase italic drop-shadow-sm">MOSTAZA</span>

                                    {/* MCDONALD'S */}
                                    <span className="text-3xl md:text-5xl font-black text-yellow-500 tracking-tighter ">McDonald's</span>

                                    {/* CABIFY */}
                                    <span className="text-2xl md:text-4xl font-black text-[#7350ff] tracking-tighter lowercase">cabify</span>

                                    {/* DIRECTV */}
                                    <div className="text-2xl md:text-4xl tracking-tighter flex items-center">
                                        <span className="font-black text-blue-500">DIREC</span>
                                        <span className="font-light text-white">TV</span>
                                    </div>

                                    {/* Aerolineas Argentinas */}
                                    <span className="text-xl md:text-3xl font-light text-sky-400 tracking-tight flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.36v-1.72L13 10V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V10L1 14.64v1.72l9-2.8V19l-2 1.5v1.5l3-1 3 1v-1.5L12 19v-5.44l9 2.8z" /></svg>
                                        Aerolíneas
                                    </span>

                                    {/* AA2000 */}
                                    <div className="flex items-center border-2 border-white/20 px-3 py-1 rounded-sm">
                                        <span className="text-sm md:text-lg font-bold text-white tracking-widest uppercase">AA2000</span>
                                    </div>

                                    {/* MARDIROS */}
                                    <span className="text-2xl md:text-4xl font-black text-white tracking-[0.3em] uppercase border-y-2 border-white/20 py-1">MARDIROS</span>

                                    {/* Sancor Seguros */}
                                    <span className="text-xl md:text-3xl font-serif italic text-emerald-400 tracking-tight">Sancor Seguros</span>

                                    {/* SILOPARK */}
                                    <span className="text-2xl md:text-4xl font-black text-brand-blue tracking-tighter uppercase relative">
                                        SILOPARK<span className="absolute -top-1 -right-3 text-brand-blue text-sm">®</span>
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
            >
                <div className="w-px h-12 bg-white" />
            </motion.div>
        </section>
    );
}
