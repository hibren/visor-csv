import { BarChart3, Map } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isMapPage = location.pathname === "/mapa";

  return (
    <div className="mb-8 flex flex-col gap-6 rounded-3xl bg-linear-to-r from-blue-500 to-blue-600 p-8 text-center text-white shadow-lg md:flex-row md:items-center md:justify-between md:text-left">
      <div className="w-full">
        <div className="mb-2 flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-3">
          <div className="hidden sm:block">
            <BarChart3 size={32} />
          </div>
          <h1 className="text-3xl font-bold md:text-4xl">
            Encuesta de Entorno Barrial
          </h1>
        </div>
        <p className="text-blue-100">
          Visualizacion de datos preliminares del trabajo de criminalistica en
          barrios formoseños.
        </p>
      </div>
      <Link to={isMapPage ? "/" : "/mapa"} className="w-full md:w-auto">
        <button className="mx-auto flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-blue-600 shadow-md md:w-auto">
          {isMapPage ? (
            <>
              <BarChart3 size={20} className="hidden sm:block" />
              Ver Estadísticas
            </>
          ) : (
            <>
              <Map size={20} className="hidden sm:block" />
              Ver Mapa
            </>
          )}
        </button>
      </Link>
    </div>
  );
}
