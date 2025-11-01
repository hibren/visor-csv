import { BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <div className="mb-8 rounded-3xl bg-linear-to-r from-blue-500 to-blue-600 p-8 text-white shadow-lg">
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
  );
}
