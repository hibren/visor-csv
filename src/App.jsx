import Header from "./components/header";
import KPISection from "./components/kpiSection";
import NeighborhoodEnvironmentChart from "./components/neighborhoodEnvironmentChart";
import NeighborhoodActivitiesChart from "./components/neighborhoodActivitiesChart";
import SectionCard from "./components/sectionCard";

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50 p-6">
      <Header />
      <SectionCard title="Seccion 1 - Caracteristicas del barrio">
        <KPISection />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <NeighborhoodEnvironmentChart />
        <NeighborhoodActivitiesChart />
      </div>
      </SectionCard>
    </div>
  );
}
