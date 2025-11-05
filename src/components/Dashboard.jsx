import KPISection from "./kpiSection";
import SugerenciasVecinos from "./SugerenciasVecinos";
import NeighborhoodEnvironmentChart from "./graficos/BarrioAmbienteChart";
import NeighborhoodActivitiesChart from "./graficos/ActividadBarriosChart";
import NeighborhoodSafetyChart from "./graficos/BarrioSeguridadChart";
import ComparativoSeguridadDiaNoche from "./graficos/ComparativoSeguridadDiaNoche";
import CambioSeguridadBarrioChart from "./graficos/CambioSeguridadBarrioChart";
import FactoresDelincuenciaChart from "./graficos/FactoresDelincuenciaChart";
import ProblemasMantenimientoChart from "./graficos/ProblemasMantenimientoChart";
import DelitosBarrioChart from "./graficos/DelitosBarrioChart";
import TipoDelitoChart from "./graficos/TipoDelitoChart";
import DelincuenciaGruposChart from "./graficos/DelincuenciaGruposChart";
import LimpiezaOrdenDelincuenciaChart from "./graficos/LimpiezaOrdenDelincuenciaChart";
import SectionCard from "./sectionCard";

const Dashboard = () => {
  return (
    <>
      <KPISection />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <SectionCard title="Seccion 1 - Caracteristicas del barrio">
          <NeighborhoodEnvironmentChart />
        </SectionCard>
        <SectionCard title="Seccion 1 - Caracteristicas del barrio">
          <NeighborhoodActivitiesChart />
        </SectionCard>
        <SectionCard title="Seccion 1 - Caracteristicas del barrio">
          <NeighborhoodSafetyChart />
        </SectionCard>
        <SectionCard title="Seccion 2 - Percepción de la seguridad - Comparativa Día y Noche">
          <ComparativoSeguridadDiaNoche />
        </SectionCard>
        <SectionCard title="Seccion 2 - Percepción de la seguridad - Cambio en la seguridad">
          <CambioSeguridadBarrioChart />
        </SectionCard>
        <SectionCard title="Seccion 3 - Factores ambientales - Factores que contribuyen a la delincuencia">
          <FactoresDelincuenciaChart />
        </SectionCard>
        <SectionCard title="Seccion 3 - Factores ambientales - Problemas de mantenimiento">
          <ProblemasMantenimientoChart />
        </SectionCard>
        <SectionCard title="Seccion 3 - Factores ambientales - Limpieza y orden influyen en la delincuencia">
          <LimpiezaOrdenDelincuenciaChart />
        </SectionCard>
        <SectionCard title="Seccion 4 - Comportamiento delictivo - Delitos en el barrio">
          <DelitosBarrioChart />
        </SectionCard>
        <SectionCard title="Seccion 4 - Comportamiento delictivo - Tipo de delito">
          <TipoDelitoChart />
        </SectionCard>
        <SectionCard title="Seccion 4 - Comportamiento delictivo - Relación con grupos o individuos">
          <DelincuenciaGruposChart />
        </SectionCard>
      </div>
      <div className="my-8">
        <SugerenciasVecinos />
      </div>
    </>
  );
};

export default Dashboard;
