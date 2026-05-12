"use client";

const brands = [
    { name: "American Tourister", style: "text-blue-500 font-black tracking-tight", extra: <span className="text-orange-500 ml-1">●</span> },
    { name: "Samsonite", style: "text-white font-light tracking-[0.3em] uppercase" },
    {
        name: "Aeropuertos Argentina", style: "text-sky-400 font-bold tracking-tight flex items-center gap-2",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="rotate-45"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5l7 2.5z" /></svg>
    },
    {
        name: "Santander", style: "text-[#ec0000] font-black tracking-tighter flex items-center gap-2",
        icon: <div className="w-8 h-8 bg-[#ec0000] rounded-full flex items-center justify-center text-xs text-white font-bold">S</div>
    },
    { name: "McDonald's", style: "text-[#ffbc0d] font-black text-5xl leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" },
    { name: "Sancor Seguros", style: "text-emerald-400 font-serif italic tracking-tight border-b border-emerald-400/30 pb-1" },
    { name: "Giannoni", style: "text-white font-black tracking-[0.4em] uppercase py-1 px-4 border-2 border-white/10" },
    { name: "Patagonia", style: "text-amber-100 font-black italic tracking-tighter" },
    {
        name: "Corona", style: "text-[#c4a15a] font-light tracking-[0.2em] flex items-center gap-2 uppercase",
        icon: <span className="text-2xl">👑</span>
    },
    { name: "Guapaletas", style: "text-white font-black tracking-tight bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-1 rounded-full" },
    { name: "Persicco", style: "text-[#f8f1e7] font-serif italic text-4xl drop-shadow-md" },
    { name: "cabify", style: "text-[#7350ff] font-black tracking-tighter text-5xl" },
    { name: "Uber", style: "text-white font-bold tracking-tight bg-black border border-white/20 px-4 py-1.5 rounded-sm" },
    { name: "MOSTAZA", style: "text-[#e30613] font-black italic tracking-tighter uppercase" },
    {
        name: "", style: "tracking-tighter flex items-center font-black text-4xl",
        custom_el: <><span className="text-[#00A3E0] font-black">DIREC</span><span className="text-white font-extralight">TV</span></>
    },
    { name: "SAMSUNG", style: "text-white font-bold tracking-tighter bg-[#034ea2] px-6 py-1 rounded-full" },
    {
        name: "", style: "font-black tracking-tighter flex items-center gap-2 text-3xl",
        custom_el: <><span className="text-[#00387b] font-black">Maxi</span><span className="text-[#ed1c24] font-black">Carrefour</span></>
    },
    { name: "TORIBIO ACHAVAL", style: "text-white font-serif tracking-[0.3em] uppercase text-lg border-y border-white/10 py-2" },
    { name: "BNA", style: "text-white font-black italic bg-[#004a99] px-4 py-1.5 rounded-sm border-b-4 border-[#00356b]" },
    { name: "PAMELI", style: "text-[#f37021] font-black tracking-[0.25em] uppercase" },
    {
        name: "Sinteplast", style: "text-white font-black tracking-tighter flex items-center gap-2",
        icon: <div className="flex gap-1"><div className="w-3 h-6 bg-[#ed1c24]" /><div className="w-3 h-6 bg-[#ffcb05]" /><div className="w-3 h-6 bg-[#00aeef]" /></div>
    },
    { name: "Mercado Libre", style: "text-[#2d3277] font-bold tracking-tight bg-[#fff159] px-5 py-2 rounded-md" },
    { name: "Sodimac", style: "text-[#ed1c24] font-black tracking-tighter border-l-8 border-[#00387b] pl-3 py-1" },
    { name: "Betano", style: "text-[#ff7900] font-black tracking-tighter italic text-5xl drop-shadow-lg" },
    {
        name: "YPF", style: "text-[#005ea8] font-black tracking-tight uppercase flex items-center gap-2",
        extra: <span className="bg-[#ffcb05] text-black px-2 py-0.5 text-xs font-black rounded-sm">FULL</span>
    },
    {
        name: "Movistar", style: "text-[#00a9e0] font-black tracking-tighter flex items-center gap-2",
        icon: <div className="w-8 h-8 rounded-full border-4 border-[#00a9e0] flex items-center justify-center font-black text-sm">M</div>
    },
    { name: "ALIKAL", style: "text-white font-black tracking-[0.4em] uppercase bg-white/5 px-6 py-2 border border-white/10 rounded-lg" },
];

// Separator between brands
function Dot() {
    return <span className="text-white/10 text-3xl mx-2 select-none">◆</span>;
}

function BrandItem({ brand }: { brand: typeof brands[0] }) {
    return (
        <span className={`inline-flex items-center text-2xl md:text-3xl shrink-0 ${brand.style}`}>
            {brand.icon && brand.icon}
            {brand.custom_el ? brand.custom_el : brand.name}
            {brand.extra && brand.extra}
        </span>
    );
}

export function BrandMarquee() {
    return (
        <div className="relative overflow-hidden w-full py-12 group">
            <style>{`
                @keyframes marquee-scroll {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee-scroll 80s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div
                className="marquee-track items-center gap-12 md:gap-20 opacity-40 group-hover:opacity-100 transition-opacity duration-700"
            >
                {/* Primer set */}
                {brands.map((brand, idx) => (
                    <span key={`a-${idx}`} className="inline-flex items-center gap-12 md:gap-20 shrink-0">
                        <BrandItem brand={brand} />
                        <Dot />
                    </span>
                ))}
                {/* Copia exacta para loop perfecto */}
                {brands.map((brand, idx) => (
                    <span key={`b-${idx}`} className="inline-flex items-center gap-12 md:gap-20 shrink-0">
                        <BrandItem brand={brand} />
                        <Dot />
                    </span>
                ))}
            </div>

            {/* Fades en los bordes */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </div>
    );
}
