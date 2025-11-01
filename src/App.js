import React, { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import { Upload, X, MapPin, Menu, Info } from "lucide-react";
import Papa from "papaparse";
import { motion, AnimatePresence } from "framer-motion";
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

// --- Paleta fija de colores base ---
const baseColors = [
  "#6b21a8", // violeta
  "#991b1b", // rojo oscuro
  "#ea580c", // naranja
  "#dc2626", // rojo
  "#f59e0b", // amarillo oscuro
  "#facc15", // amarillo claro
  "#2563eb", // azul
  "#16a34a", // verde
];

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

function App() {
  const [markers, setMarkers] = useState([]);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [legendOpen, setLegendOpen] = useState(false);
  const [categories, setCategories] = useState([]); // ← categorías dinámicas
  const fileInputRef = useRef(null);

  // --- Generar un color según el índice o de forma aleatoria ---
  const getColorForCategory = (category, index) => {
    if (index < baseColors.length) return baseColors[index];
    // si hay más categorías que colores base → genera uno aleatorio
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 50%)`;
  };

  // --- Procesar CSV ---
  const processCSV = (file) => {
    setError("");
    setFileName(file.name);

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const newMarkers = [];
          const foundCategories = new Set();

          results.data.forEach((row, index) => {
            const latRaw =
              row.latitude || row.lat || row.Latitude || row.LAT || row.latitud;
            const lngRaw =
              row.longitude || row.lng || row.lon || row.Longitude || row.LONGITUD;
            const descripcion =
              row.descripcion ||
              row.DESCRIPCION ||
              row.tipo ||
              row.TIPO ||
              "Sin descripción";

            if (latRaw && lngRaw) {
              const lat = parseFloat(String(latRaw).replace(",", "."));
              const lng = parseFloat(String(lngRaw).replace(",", "."));
              if (!isNaN(lat) && !isNaN(lng)) {
                newMarkers.push({ id: index, lat, lng, data: row });
                foundCategories.add(descripcion.trim());
              }
            }
          });

          if (newMarkers.length === 0) {
            setError("No se encontraron coordenadas válidas.");
            return;
          }

          // Crear paleta de colores dinámica
          const catArray = Array.from(foundCategories).map((cat, i) => ({
            label: cat,
            color: getColorForCategory(cat, i),
          }));

          setCategories(catArray);
          setMarkers(newMarkers);
        } catch (err) {
          setError("Error al procesar el archivo: " + err.message);
        }
      },
      error: (err) => setError("Error al leer el archivo: " + err.message),
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".csv")) processCSV(file);
    else setError("Seleccioná un archivo CSV válido");
  };

  const clearData = () => {
    setMarkers([]);
    setFileName("");
    setError("");
    setCategories([]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // --- Obtener color según descripción dinámica ---
  const getColorFromCategory = (descripcion) => {
    const found = categories.find((c) => c.label === descripcion);
    return found ? found.color : "#3b82f6";
  };

  return (
    <div
      className="h-screen w-screen relative overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Botón menú lateral */}
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="absolute top-4 right-4 z-[999] bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
      >
        <Menu size={22} />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="absolute right-0 top-0 h-full w-80 bg-white border-l border-gray-300 shadow-2xl z-[998] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="text-blue-500" /> Cargar datos CSV
              </h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 flex-1 overflow-y-auto text-sm text-gray-600">
              {!fileName ? (
                <>
                  <p className="mb-3">
                    Subí un archivo CSV con columnas:
                    <br />
                    <code>latitude, longitude, tipo, descripcion</code>
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md cursor-pointer"
                  >
                    Seleccionar archivo CSV
                  </label>
                  {error && <p className="text-red-600 mt-3 text-xs">{error}</p>}
                </>
              ) : (
                <div className="space-y-3">
                  <p>
                    <strong>Archivo:</strong> {fileName}
                  </p>
                  <p className="text-blue-500">{markers.length} ubicaciones cargadas</p>
                  <button
                    onClick={clearData}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
                  >
                    Borrar datos
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mapa */}
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

      {/* Botón flotante para abrir/cerrar leyenda */}
      {categories.length > 0 && (
        <button
          onClick={() => setLegendOpen((prev) => !prev)}
          className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-[999]"
          title="Mostrar leyenda"
        >
          <Info size={22} />
        </button>
      )}

      {/* Leyenda dinámica */}
      <AnimatePresence>
        {legendOpen && categories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-6 bg-white border border-gray-300 rounded-lg shadow-md p-3 text-sm z-[999]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-700">Leyenda</h4>
              <button
                onClick={() => setLegendOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                <X size={16} />
              </button>
            </div>
            {categories.map((item) => (
              <div key={item.label} className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: item.color }}
                ></div>
                <span className="text-gray-700 text-xs">{item.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
