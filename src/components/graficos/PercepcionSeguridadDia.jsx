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
    name: "Muy Seguro",
    value: 20,
    fill: "#16a34a", // Verde oscuro
    description: "Se siente completamente seguro en su barrio durante el día.",
  },
  {
    name: "Seguro",
    value: 40,
    fill: "#22c55e", // Verde
    description: "Se siente seguro en su barrio durante el día.",
  },
  {
    name: "Inseguro",
    value: 3,
    fill: "#f97316", // Naranja
    description: "Se siente inseguro en su barrio durante el día.",
  },
  {
    name: "Muy Inseguro",
    value: 1,
    fill: "#ef4444", // Rojo
    description: "Se siente muy inseguro en su barrio durante el día.",
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

export default function DaySafetyPerceptionChart() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            ¿Cómo se siente de seguro en su barrio durante el día?
          </h2>
          <p className="text-sm text-gray-500">
            Distribución de respuestas de {totalResponses} vecinos encuestados.
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
