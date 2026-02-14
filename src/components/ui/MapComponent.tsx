"use client";

import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix for default marker icon in Next.js
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

// Coordinates for Zona Sur (Centered on Adrogué)
const center: [number, number] = [-34.80, -58.39];

// Coverage Zone: Zona Sur (Avellaneda -> La Plata / Monte Grande -> Berisso)
const zoneOptions = { color: "#f97316", fillColor: "#f97316", fillOpacity: 0.2, weight: 2 };
const zonePolygon: [number, number][] = [
    [-34.66, -58.37], // Avellaneda (Norte)
    [-34.70, -58.26], // Quilmes
    [-34.86, -57.88], // Berisso (Este)
    [-34.92, -57.95], // La Plata (Sur-Este)
    [-34.82, -58.46], // Monte Grande (Sur-Oeste)
    [-34.72, -58.39], // Lanús / Lomas (Oeste)
];

export default function MapComponent() {

    const [mounted, setMounted] = useState(false);

    // Cleanup function to ensure map removes correctly 
    useEffect(() => {
        setMounted(true);
        return () => {
            // any specific cleanup if needed
        };
    }, []);

    if (!mounted) return null;

    return (
        <MapContainer
            key="map-component"
            center={center}
            zoom={12} // Adjusted zoom to see more context
            scrollWheelZoom={false}
            className="w-full h-full rounded-xl z-0"
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Coverage Zone */}
            <Polygon positions={zonePolygon} pathOptions={zoneOptions} />

        </MapContainer>
    );
}
