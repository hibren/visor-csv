import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  {
    name: "Limpio y ordenado",
    value: 26,
    fill: "#0ea5e9",
    description: "Calles cuidadas y espacios comunes prolijos.",
  },
  {
    name: "Sucio y desordenado",
    value: 10,
    fill: "#f97316",
    description: "Presencia de residuos y falta de mantenimiento.",
  },
  {
    name: "Bien iluminado",
    value: 19,
    fill: "#38bdf8",
    description: "Alumbrado publico suficiente y en funcionamiento.",
  },
  {
    name: "Mal iluminado",
    value: 9,
    fill: "#ef4444",
    description: "Zonas oscuras o con luminarias fuera de servicio.",
  },
];

const totalResponses = data.reduce((sum, item) => sum + item.value, 0);

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null;
  }

  const { name, value, description, fill } = payload[0].payload;
  const percentage = ((value / totalResponses) * 100).toFixed(1);

  return (
    <div className="w-60 rounded-xl border border-blue-100 bg-white p-4 shadow-lg">
      <p className="text-sm font-semibold text-gray-900">{name}</p>
      <p className="text-2xl font-bold text-gray-900">
        {value}{" "}
        <span className="text-sm font-medium text-gray-500">respuestas</span>
      </p>
      <p className="mb-2 text-sm font-medium" style={{ color: fill }}>
        {percentage}% del total
      </p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
}

export default function NeighborhoodEnvironmentChart() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Como describiria el entorno fisico de su barrio?
          </h2>
          <p className="text-sm text-gray-500">
            Distribucion de respuestas de {totalResponses} vecinos encuestados.
          </p>
        </div>
        <div className="rounded-full border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          4 opciones de respuesta
        </div>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            angle={-10}
            textAnchor="end"
            interval={0}
          />
          <YAxis allowDecimals={false} />
          <Tooltip
            cursor={{ fill: "rgba(125, 211, 252, 0.15)" }}
            content={<CustomTooltip />}
          />
          <Bar dataKey="value" radius={[8, 8, 0, 0]} maxBarSize={70}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
