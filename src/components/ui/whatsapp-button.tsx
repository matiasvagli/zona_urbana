"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/1234567890" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring" }}
            whileHover={{ scale: 1.1 }}
        >
            <div className="bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] text-white">
                <MessageCircle className="w-8 h-8 fill-current" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded absolute -top-8 whitespace-nowrap">
                Cotizar Ubicación
            </span>
        </motion.a>
    );
}
