import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const worksImages: Record<string, { src: string; caption: string }[]> = {
    "01": [ // Vía Pública
        { src: "/via-publica/mono1.jpeg", caption: "Gran formato Premium — Ruta " },
        { src: "/via-publica/cartepubli.jpeg", caption: "Gran formato large  — Acceso" },
        { src: "/via-publica/mono3.jpeg", caption: "Impacto Visual — Corredor" },
        { src: "/via-publica/mono4.jpeg", caption: "Gran formato Iluminado— Av. Central" },
        { src: "/via-publica/m1.jpeg", caption: "Cobertura Transluminada — Ruta " },
        { src: "/via-publica/cartel.jpeg", caption: "Gran formato en altura— Esquina estrategica" },
        { src: "/via-publica/comerciozona.jpg", caption: "Posición Exclusiva — Acceso Comercial" },
        { src: "/via-publica/mac2.jpeg", caption: "Monoposte Gran Formato — Enlace Urbano" },
        { src: "/via-publica/carteles.jpeg", caption: "Nuestras estructuras" },
        { src: "/via-publica/mono2.jpeg", caption: "Posición Estratégica — Zona Urbana" },
        { src: "/via-publica/gran.jpeg", caption: "Posición Estratégica — Zona Urbana" },
        { src: "/via-publica/gran1.jpeg", caption: "Gran formato — Ruta" },
        { src: "/via-publica/mac3.jpeg", caption: "Transluminado — Enlace Urbano" },
        { src: "/via-publica/zonanoche.jpg", caption: "Cartel Nocturno — Vista Panorámica" },
        { src: "/via-publica/mac5.jpeg", caption: "Monoposte Transluminado — Av. Central" },
        { src: "/via-publica/m3.jpeg", caption: "Monoposte — Ruta " },
        { src: "/via-publica/mono5.jpeg", caption: "Impacto Visual — Acceso" },
    ],
    "02": [ // Negocios & Ploteos
        { src: "/negocios-ploteos/marque1.jpeg", caption: "Marquesina Premium — Local Comercial" },
        { src: "/negocios-ploteos/marque2.jpeg", caption: "Cartelería luminaria — Punto de Venta" },
        { src: "/negocios-ploteos/cartelnego.jpeg", caption: "Cartelería 3D luminaria " },
        { src: "/negocios-ploteos/lumi.jpeg", caption: "Cartelería local luminaria " },
        { src: "/negocios-ploteos/accion.jpeg", caption: "Ploteo interior - Equipo en acción " },
        { src: "/negocios-ploteos/nego1.jpeg", caption: "Marquesina en preparación " },


        { src: "/negocios-ploteos/marque3.jpeg", caption: "Corpóreos frontal" },
        { src: "/negocios-ploteos/marque4.jpeg", caption: "Fachada  — Retail" },
        { src: "/negocios-ploteos/marque5.jpeg", caption: "Marquesina luminaria" },
        { src: "/negocios-ploteos/tristan.jpeg", caption: "Marquesina 3D exterior" },
        { src: "/negocios-ploteos/marque6.jpeg", caption: "Señalética de Identidad — Local" },
        { src: "/negocios-ploteos/marque7.jpeg", caption: "Marquesina Gran Formato — Showroom , nuestro taller" },
        { src: "/negocios-ploteos/nego.jpeg", caption: "Marquesina 3D interior  " },
        { src: "/negocios-ploteos/nego2.jpeg", caption: "Marquesina luminaria" },
    ],
    "03": [ // Señalética & Fachadas
        { src: "/senaletica/seña1.jpeg", caption: "Sistema de Señalización Integral — Estructura" },
        { src: "/senaletica/cb.jpeg", caption: "Sistema de Señalización Integral — Estructura" },
        { src: "/senaletica/ca.jpeg", caption: "Sistema de Señalización Integral — Colocación en altura" },
        { src: "/senaletica/seña4.jpeg", caption: "Corpóreo Iluminado — Identidad Visual" },
        { src: "/senaletica/seña5.jpeg", caption: "Señalización Interna — Orientación" },
        { src: "/senaletica/seña6.jpeg", caption: "Directorio de Piso — Estética Minimalista" },
        { src: "/senaletica/seña7.jpeg", caption: "Nuestra Flota — Seguridad & Diseño" },
        { src: "/senaletica/seña8.jpeg", caption: "Panel Informativo — Zona Comercial" },
        { src: "/senaletica/seña9.jpeg", caption: "Señalización — Visibilidad" },
        { src: "/senaletica/totem.jpeg", caption: "Totem informativo — Diseño 360°" },
        { src: "/senaletica/seña10.jpeg", caption: "Señalización en bajo nivel" },
        { src: "/senaletica/seña11.jpeg", caption: "Placa de Marca — Lona Premium" },
        { src: "/senaletica/seña12.jpeg", caption: "Revestimiento publicitario" },
        { src: "/senaletica/seña13.jpeg", caption: "Detalle de Señalética — Acabado" },

        { src: "/senaletica/aero.jpeg", caption: "Nuestro equipo en acción - Aeropuerto Ezeiza " },
        { src: "/senaletica/cam.jpeg", caption: "Nuestra flota— Identidad" },

    ],
    "04": [ // Impresión & Formato
        { src: "/impresion/arqui1.jpeg", caption: "Totem despedida " },
        { src: "/impresion/imprezona.jpeg", caption: "Maqueta publicitaria " },
        { src: "/impresion/impre.jpeg", caption: "Gigantografía — Parking" },
        { src: "/impresion/impre1.jpeg", caption: "Gigantografía — Campaña Lanzamiento" },
        { src: "/impresion/impre2.jpeg", caption: "Gigantografía — Impresoras de última generación" },
        { src: "/impresion/impre3.jpeg", caption: "Gigantografía — Campaña Lanzamiento" },
        { src: "/impresion/arqui.jpeg", caption: "Señaletica " },
        { src: "/impresion/imprex3.jpeg", caption: "Ploteado " },
        { src: "/impresion/i.jpeg", caption: "Impresion ultra HD" },
        { src: "/impresion/impre4.jpeg", caption: "Gigantografía — Ploteado de local comercial" },
        { src: "/impresion/impre5.jpeg", caption: "Gigantografía — Campaña Lanzamiento" },
        { src: "/impresion/imprex2.jpeg", caption: "Ploteado Vehícular " },
        { src: "/impresion/imprex1.jpeg", caption: "Ploteado Vehícular " },
        { src: "/impresion/imprexx.jpeg", caption: "Impresion ultra HD" }
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
