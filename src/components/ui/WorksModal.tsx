import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const worksImages: Record<string, { src: string; caption: string }[]> = {
    "01": [ // Vía Pública
        { src: "/mono1.jpeg", caption: "Monoposte Premium — Ruta Nacional" },
        { src: "/mono2.jpeg", caption: "Posición Estratégica — Acceso" },
        { src: "/mono3.jpeg", caption: "Impacto Visual — Corredor" },
        { src: "/mono4.jpeg", caption: "Monoposte LED — Av. Central" },
        { src: "/mono5.jpeg", caption: "Cobertura Regional — Ruta 2" },
        { src: "/comerciozona.jpg", caption: "Posición Exclusiva — Acceso Comercial" },
        { src: "/mac2.jpeg", caption: "Monoposte Gran Formato — Enlace Urbano" },
        { src: "/mac6", caption: "Posición Estratégica — Zona Urbana" },
        { src: "/mac3.jpeg", caption: "Monoposte Gran Formato — Enlace Urbano" },
        { src: "/zonanoche.jpg", caption: "Cartel Nocturno — Vista Panorámica" },
        { src: "/mac5.jpeg", caption: "Monoposte LED — Av. Central" },



    ],
    "02": [ // Negocios & Ploteos
        { src: "/marque1.jpeg", caption: "Marquesina Premium — Local Comercial" },
        { src: "/marque2.jpeg", caption: "Cartelería Frontlight — Punto de Venta" },
        { src: "/marque3.jpeg", caption: "Corpóreos frontal" },
        { src: "/marque4.jpeg", caption: "Fachada  — Retail" },
        { src: "/marque5.jpeg", caption: "Marquesina luminaria" },
        { src: "/marque6.jpeg", caption: "Señalética de Identidad — Local" },
        { src: "/marque7.jpeg", caption: "Marquesina Gran Formato — Showroom , nuestro taller" },
        { src: "/nego.jpeg", caption: "Marquesina Gran Formato  " },
        { src: "/nego2.jpeg", caption: "Marquesina luminaria" },


    ],
    "03": [ // Señalética & Fachadas
        { src: "/seña1.jpeg", caption: "Sistema de Señalización Integral — Estructura" },


        { src: "/seña4.jpeg", caption: "Corpóreo Iluminado — Identidad Visual" },
        { src: "/seña5.jpeg", caption: "Señalización Interna — Orientación" },
        { src: "/seña6.jpeg", caption: "Directorio de Piso — Estética Minimalista" },
        { src: "/seña7.jpeg", caption: "Nuestra Flota — Seguridad & Diseño" },
        { src: "/seña8.jpeg", caption: "Panel Informativo — Zona Comercial" },
        { src: "/seña9.jpeg", caption: "Señalización — Visibilidad" },
        { src: "/seña3.jpeg", caption: "Fachada Corporativa — Diseño 360°" },
        { src: "/seña10.jpeg", caption: "Señalización en bajo nivel" },
        { src: "/seña11.jpeg", caption: "Placa de Marca — Lona Premium" },
        { src: "/seña12.jpeg", caption: "Revestimiento publicitario" },
        { src: "/seña13.jpeg", caption: "Detalle de Señalética — Acabado" },
    ],
    "04": [ // Impresión & Formato
        { src: "/arqui1.jpeg", caption: "Gigantografía — Parking" },
        { src: "/imprezona.jpeg", caption: "Gigantografía — Parking" },
        { src: "/impre.jpeg", caption: "Gigantografía — Parking" },
        { src: "/impre1.jpeg", caption: "Gigantografía — Campaña Lanzamiento" },
        { src: "/impre2.jpeg", caption: "Gigantografía — Impresoras de última generación" },
        { src: "/impre3.jpeg", caption: "Gigantografía — Campaña Lanzamiento" },
        { src: "/impre4.jpeg", caption: "Gigantografía — Ploteado de local comercial" },
        { src: "/impre5.jpeg", caption: "Gigantografía — Campaña Lanzamiento" },
        { src: "/imprex1.jpeg", caption: "Ploteado Vehícular " },
        { src: "/imprex2.jpeg", caption: "Ploteado Vehícular " },
        { src: "/imprexx.jpeg", caption: "Impresion ultra HD" }
    ]
};

interface WorksModalProps {
    serviceId: string;
    serviceTitle: string;
    accentColor: string;
    onClose: () => void;
}

export function WorksModal({ serviceId, serviceTitle, accentColor, onClose }: WorksModalProps) {
    const images = worksImages[serviceId] ?? [];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose, images.length]);

    if (images.length === 0) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10"
                onClick={onClose}
            >
                {/* Header Info */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-[10001] pointer-events-none text-center px-4 w-full">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]" style={{ color: accentColor }}>{serviceTitle}</span>
                    <h4 className="text-white text-sm font-medium tracking-tight opacity-60">
                        {currentIndex + 1} / {images.length}
                    </h4>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all z-[10001]"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 md:left-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all z-[10001] group"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-1 transition-transform">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-4 md:right-10 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 transition-all z-[10001] group"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Main Image Slider */}
                <div className="relative w-full max-w-7xl aspect-[16/10] flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -20, scale: 0.95 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-8"
                        >
                            <div
                                className="w-full h-full bg-contain bg-center bg-no-repeat rounded-xl shadow-2xl"
                                style={{ backgroundImage: `url(${images[currentIndex].src})` }}
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10"
                            >
                                <p className="text-white text-sm md:text-base font-medium tracking-tight text-center">
                                    {images[currentIndex].caption}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Thumbnail strip - subtle */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-full px-10 pb-2 no-scrollbar">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                            className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? "w-10 bg-white" : "w-2 bg-white/20 hover:bg-white/40"}`}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
