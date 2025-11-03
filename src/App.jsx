import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import KPISection from "./components/kpiSection";
import NeighborhoodEnvironmentChart from "./components/graficos/BarrioAmbienteChart";
import NeighborhoodActivitiesChart from "./components/graficos/ActividadBarriosChart";
import NeighborhoodSafetyChart from "./components/graficos/BarrioSeguridadChart";
import DaySafetyPerceptionChart from "./components/graficos/PercepcionSeguridadDia";
import SectionCard from "./components/sectionCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 p-6">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <KPISection />
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <SectionCard title="Seccion 1 - Caracteristicas del barrio - Pregunta 1">
                  <NeighborhoodEnvironmentChart />
                </SectionCard>
                <SectionCard title="Seccion 1 - Caracteristicas del barrio - Pregunta 2">
                  <NeighborhoodActivitiesChart />
                </SectionCard>
                <SectionCard title="Seccion 1 - Caracteristicas del barrio - Pregunta 3">
                  <NeighborhoodSafetyChart />
                </SectionCard>
                <SectionCard title="Seccion 2 - Percepción de la seguridad - Pregunta 1">
                  <DaySafetyPerceptionChart />
                </SectionCard>
              </div>
            </>
          }
        />
      </Routes>
      {/* <Route path="/mapa" element={} /> aca pone tu mapa amor  */}
    </div>
  );
}
