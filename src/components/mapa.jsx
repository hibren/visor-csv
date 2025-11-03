import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// --- Ajusta el mapa automáticamente a los marcadores ---
function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0) {
      const bounds = markers.map((m) => [m.lat, m.lng]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [markers, map]);
  return null;
}

// --- Función auxiliar para crear ícono ---
const createIcon = (color) =>
  L.divIcon({
    className: "custom-icon",
    html: `<div style="
      background:${color};
      width:1.3rem;height:1.3rem;
      border-radius:50%;
      border:2px solid white;
      box-shadow:0 0 6px ${color}77;
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

function Mapa({ markers, categories }) {
  // --- Obtener color según descripción dinámica ---
  const getColorFromCategory = (descripcion) => {
    const found = categories.find((c) => c.label === descripcion);
    return found ? found.color : "#3b82f6";
  };

  return (
    <MapContainer
      center={[-26.177, -58.17]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
      />
      <FitBounds markers={markers} />

      {markers.map((marker) => {
        const descripcion =
          marker.data.DESCRIPCION || marker.data.descripcion || "Otro";
        const color = getColorFromCategory(descripcion);

        return (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={createIcon(color)}
          >
            <Popup>
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "10px",
                  padding: "10px 14px",
                  color: "#111",
                  fontFamily: "Poppins, sans-serif",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                  border: `2px solid ${color}`,
                }}
              >
                <h3
                  style={{
                    fontWeight: 600,
                    color,
                    fontSize: "15px",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  {marker.data.TIPO || "Incidente"}
                </h3>
                <p style={{ fontSize: "13px", marginBottom: "4px" }}>
                  <strong>Lat:</strong> {marker.lat.toFixed(5)} <br />
                  <strong>Lng:</strong> {marker.lng.toFixed(5)}
                </p>
                <p style={{ fontSize: "13px" }}>{descripcion}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Mapa;
