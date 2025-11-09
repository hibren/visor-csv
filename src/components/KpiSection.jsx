import KPICard from "./KpiCard";

export default function KPISection() {
  const kpis = [
    {
      label: "Total de Encuestados",
      value: "~250",
      description: "Número aproximado de participantes",
    },
    {
      label: "Percepción General de Seguridad",
      value: "81% Favorable",
      description: "Promedio de percepción de seguridad (día y noche)",
    },
    {
      label: "Principal Factor de Delincuencia",
      value: "Drogas/Alcohol",
      description: "Factor más votado que contribuye a la delincuencia",
    },
    {
      label: "Delito más Común",
      value: "Robo",
      description: "Delito más reportado por los encuestados",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <KPICard
          key={kpi.label}
          label={kpi.label}
          value={kpi.value}
          description={kpi.description}
        />
      ))}
    </div>
  );
}
