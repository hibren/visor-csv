import KPISection from "./kpiSection";
import NeighborhoodEnvironmentChart from "./graficos/BarrioAmbienteChart";
import NeighborhoodActivitiesChart from "./graficos/ActividadBarriosChart";
import NeighborhoodSafetyChart from "./graficos/BarrioSeguridadChart";
import DaySafetyPerceptionChart from "./graficos/PercepcionSeguridadDia";
import SectionCard from "./sectionCard";

const Dashboard = () => {
  return (
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
  );
};

export default Dashboard;
