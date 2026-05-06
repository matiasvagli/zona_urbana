"use client";

import { MapContainer, TileLayer, Polygon, Marker, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix for default marker icon in Next.js
const icon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Billboard locations data
const billboards = [
    { id: 1, pos: [-34.80, -58.39] as [number, number], title: "Columna Premium - Adrogué", type: "Digital" },
    { id: 2, pos: [-34.72, -58.39] as [number, number], title: "Frontlight - Lomas de Zamora", type: "Estático" },
    { id: 3, pos: [-34.66, -58.37] as [number, number], title: "Pantalla LED - Avellaneda", type: "Digital" },
    { id: 4, pos: [-34.82, -58.46] as [number, number], title: "Cartel Ruta - Monte Grande", type: "Estático" },
    { id: 5, pos: [-34.70, -58.26] as [number, number], title: "Estructura Especial - Quilmes", type: "Estático" },
    { id: 6, pos: [-34.92, -57.95] as [number, number], title: "Mega Pantalla - La Plata", type: "Digital" },
];

const center: [number, number] = [-34.80, -58.39];

export default function MapComponent() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <MapContainer
            center={center}
            zoom={10}
            scrollWheelZoom={false}
            className="w-full h-full z-0"
            style={{ height: "100%", width: "100%", background: "#111" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {billboards.map((billboard) => (
                <CircleMarker 
                    key={billboard.id} 
                    center={billboard.pos} 
                    pathOptions={{ 
                        color: billboard.type === "Digital" ? "#3b82f6" : "#ffffff", 
                        fillColor: billboard.type === "Digital" ? "#3b82f6" : "#ffffff", 
                        fillOpacity: 0.6,
                        weight: 2
                    }} 
                    radius={8}
                >
                    <Popup className="premium-popup">
                        <div className="p-2">
                            <h3 className="font-bold text-black">{billboard.title}</h3>
                            <p className="text-sm text-neutral-600">{billboard.type}</p>
                            <button className="mt-2 text-xs font-bold text-blue-600 uppercase">Consultar Disponibilidad</button>
                        </div>
                    </Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    );
}
