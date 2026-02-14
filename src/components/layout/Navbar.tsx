"use client";

import { cn } from "@/lib/utils";
import { Search, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/50 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="w-full px-4 md:px-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Icon: White square with Red Arrow */}
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <ArrowRight className="text-[#E61E25] w-6 h-6 stroke-[3]" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col -space-y-1">
                        <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase leading-none font-sans group-hover:text-neutral-200 transition-colors">
                            ZONA URBANA
                        </span>
                        <span className="text-[0.65rem] md:text-xs font-medium text-neutral-300 tracking-wider uppercase group-hover:text-white transition-colors">
                            publicidad en vía pública
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
                    <Link href="#" className="hover:text-white transition-colors">Productos</Link>
                    <Link href="#" className="hover:text-white transition-colors">Ofrece tu espacio</Link>
                    <Link href="#" className="hover:text-white transition-colors">Quienes somos</Link>
                    <Link href="#" className="hover:text-white transition-colors">Contacto</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-neutral-300 hover:text-white transition-colors">
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-neutral-300 hover:text-white transition-colors z-50 relative"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-medium text-white/80">
                            <Link
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-white/10 pb-4 hover:text-white hover:border-brand-blue/50 transition-all"
                            >
                                Productos
                            </Link>
                            <Link
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-white/10 pb-4 hover:text-white hover:border-brand-blue/50 transition-all"
                            >
                                Ofrece tu espacio
                            </Link>
                            <Link
                                href="#"
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-white/10 pb-4 hover:text-white hover:border-brand-blue/50 transition-all"
                            >
                                Quienes somos
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-white/10 pb-4 hover:text-white hover:border-brand-blue/50 transition-all"
                            >
                                Contacto
                            </Link>
                        </div>

                        <div className="mt-auto mb-12 space-y-4">
                            <p className="text-neutral-500 text-sm uppercase tracking-widest">Contacto</p>
                            <p className="text-xl text-white">+54 9 11 1234-5678</p>
                            <p className="text-neutral-400">info@zonaurbana.com.ar</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
