import { BarChart3, Map } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isMapPage = location.pathname === "/mapa";

  return (
    <div className="mb-8 rounded-3xl bg-linear-to-r from-blue-500 to-blue-600 p-8 text-white shadow-lg flex justify-between items-center">
      <div>
        <div className="mb-2 flex items-center gap-3">
          <BarChart3 size={32} />
          <h1 className="text-4xl font-bold">
            Encuesta de Entorno Barrial - Ciudad de Formosa
          </h1>
        </div>
        <p className="text-blue-100">
          Visualizacion de datos preliminares del trabajo de criminalistica en
          barrios formosenos.
        </p>
      </div>
      <Link to={isMapPage ? "/" : "/mapa"}>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md flex items-center gap-2">
          {isMapPage ? (
            <>
              <BarChart3 size={20} />
              Ver Estadísticas
            </>
          ) : (
            <>
              <Map size={20} />
              Ver Mapa
            </>
          )}
        </button>
      </Link>
    </div>
  );
}
