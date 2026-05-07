"use client";

import { motion, useInView, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { WorksModal } from "@/components/ui/WorksModal";

const services = [
    {
        id: "01",
        category: "Publicidad Vial",
        title: "Vía Pública & LED",
        desc: "Monopostes estratégicos y pantallas LED de gran formato en los principales accesos y rutas.",
        image: "/mono4.jpeg",
        accentColor: "#2563eb",
        stats: [{ label: "Ubicaciones", value: "+120" }, { label: "Impacto", value: "Masivo" }]
    },
    {
        id: "02",
        category: "Digital & Dinámico",
        title: "Negocios & Ploteos",
        desc: "Marquesinas, cartelería comercial, corpóreos y ploteos integrales para potenciar tu marca.",
        image: "/marque6.jpeg",
        accentColor: "#7c3aed",
        stats: [{ label: "Locales", value: "300+" }, { label: "Calidad", value: "Premium" }]
    },
    {
        id: "03",
        category: "Señalética & Fachadas",
        title: "Arquitectura Comercial",
        desc: "Identidad corporativa aplicada a fachadas y sistemas de señalización para grandes superficies.",
        image: "/seña3.jpeg",
        accentColor: "#059669",
        stats: [{ label: "Proyectos", value: "+80" }, { label: "Diseño", value: "360°" }]
    },
    {
        id: "04",
        category: "Impresión & Formato",
        title: "Grandes Formatos",
        desc: "Impresión de alta resolución para gigantografías, banners y piezas gráficas especiales.",
        image: "/imprezona.jpeg",
        accentColor: "#dc2626",
        stats: [{ label: "m² Mes", value: "5000+" }, { label: "Precisión", value: "Full HD" }]
    }
];

function ServiceCard({ service, index, onOpenModal }: { service: typeof services[0], index: number, onOpenModal: () => void }) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
    const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
    };

    const isOdd = index % 2 !== 0;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch min-h-[300px] md:min-h-[480px] ${isOdd ? 'direction-rtl' : ''}`}
        >
            {/* Image Panel */}
            <motion.div
                style={{ perspective: 1000, rotateX: hovered ? rotateX : 0, rotateY: hovered ? rotateY : 0 }}
                onMouseMove={handleMouse}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => { setHovered(false); mouseX.set(0); mouseY.set(0); }}
                className={`relative overflow-hidden group cursor-crosshair ${isOdd ? 'md:order-2' : ''}`}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${service.image})` }}
                />
                {/* Theatrical spotlight on hover */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${service.accentColor}22 0%, transparent 70%)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Big Number Watermark */}
                <div className="absolute top-6 left-6 font-black text-[8rem] leading-none text-white/5 select-none">
                    {service.id}
                </div>

                {/* Stats floating at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex gap-8">
                    {service.stats.map((s) => (
                        <div key={s.label}>
                            <p className="text-2xl font-black" style={{ color: service.accentColor }}>{s.value}</p>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* Animated border */}
                <motion.div
                    className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ borderColor: service.accentColor + "50" }}
                />
            </motion.div>

            {/* Text Panel */}
            <div
                className={`flex flex-col justify-center p-8 md:p-12 xl:p-16 bg-[#0a0a0a] border-t md:border-t-0 border-white/5 md:border-l ${isOdd ? 'md:order-1 md:border-l-0 md:border-r border-white/5' : ''}`}
            >
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12" style={{ backgroundColor: service.accentColor }} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: service.accentColor }}>
                            {service.category}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl xl:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                        {service.title}
                    </h3>

                    <div className="h-px bg-white/5" />

                    <p className="text-white/40 text-lg leading-relaxed max-w-sm">
                        {service.desc}
                    </p>

                    <motion.button
                        whileHover={{ x: 8 }}
                        onClick={onOpenModal}
                        className="group/btn flex items-center gap-4 text-sm font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300 w-fit cursor-pointer"
                    >
                        <span>Ver Trabajos</span>
                        <motion.div
                            className="h-px w-8 transition-all duration-300 group-hover/btn:w-16"
                            style={{ backgroundColor: service.accentColor }}
                        />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}

export function Portfolio() {
    const [activeModal, setActiveModal] = useState<typeof services[0] | null>(null);

    return (
        <section id="portfolio" className="bg-black">
            {/* Works Modal */}
            {activeModal && (
                <WorksModal
                    serviceId={activeModal.id}
                    serviceTitle={activeModal.title}
                    accentColor={activeModal.accentColor}
                    onClose={() => setActiveModal(null)}
                />
            )}
            {/* Header Marquee */}
            <div className="relative overflow-hidden border-y border-white/5 py-8 bg-white/[0.01] backdrop-blur-sm">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16"
                >
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">SOLUCIONES 360°</span>
                            <div className="w-4 h-4 bg-brand-blue rotate-45" />
                            <span className="text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tighter">CARTELERÍA COMERCIAL</span>
                            <div className="w-4 h-4 bg-white/10 rotate-45" />
                            <span className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">PLOTEO</span>
                            <div className="w-4 h-4 bg-brand-blue rotate-45" />
                            <span className="text-4xl md:text-6xl font-black text-white/20 uppercase tracking-tighter">MARQUESINAS</span>
                            <div className="w-4 h-4 bg-white/10 rotate-45" />
                            <span className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">IMPRESIONES</span>
                            <div className="w-4 h-4 bg-brand-blue rotate-45" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Stacked Service Panels */}
            <div className="divide-y divide-white/5">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} onOpenModal={() => setActiveModal(service)} />
                ))}
            </div>

            {/* Bottom CTA Strip */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="border-t border-white/5 py-20 flex flex-col md:flex-row items-center justify-between gap-8 px-8 md:px-16 bg-[#0a0a0a]"
            >
                <div>
                    <p className="text-white/20 text-xs uppercase tracking-widest font-bold mb-2">¿Listo para destacar?</p>
                    <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">TU MARCA, NUESTRA CIUDAD</h4>
                </div>
                <button className="px-12 py-5 bg-brand-blue text-white font-black uppercase tracking-widest text-sm rounded-sm hover:bg-white hover:text-black transition-colors duration-300 whitespace-nowrap">
                    HABLAR CON UN ASESOR
                </button>
            </motion.div>
        </section>
    );
}
