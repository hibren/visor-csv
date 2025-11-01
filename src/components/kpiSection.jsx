import KPICard from "./kpiCard";

const RESPONSES = {
  limpio: 26,
  sucio: 10,
  iluminado: 19,
  oscuro: 9,
};

const totalResponses =
  RESPONSES.limpio + RESPONSES.sucio + RESPONSES.iluminado + RESPONSES.oscuro;
const positiveResponses = RESPONSES.limpio + RESPONSES.iluminado;
const negativeResponses = RESPONSES.sucio + RESPONSES.oscuro;

export default function KPISection() {
  const kpis = [
    {
      label: "Respuestas registradas",
      value: totalResponses.toString(),
      description: "Vecinos encuestados para la pregunta 1",
    },
    {
      label: "Percepcion favorable",
      value: `${positiveResponses} (${Math.round(
        (positiveResponses / totalResponses) * 100
      )}%)`,
      description: "Entorno percibido como limpio o bien iluminado",
    },
    {
      label: "Percepcion desfavorable",
      value: `${negativeResponses} (${Math.round(
        (negativeResponses / totalResponses) * 100
      )}%)`,
      description: "Entorno percibido como sucio o mal iluminado",
    },
    {
      label: "Opciones evaluadas",
      value: "4",
      description: "Categorias de respuesta disponibles",
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
