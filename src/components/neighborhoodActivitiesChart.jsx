import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { name: "Comercial", value: 33, fill: "#1d4ed8" },
  { name: "Mixto", value: 20, fill: "#60a5fa" },
  { name: "Residencial", value: 7, fill: "#38bdf8" },
  { name: "Industrial", value: 3, fill: "#f97316" },
];

const totalResponses = data.reduce((sum, item) => sum + item.value, 0);

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null;
  }

  const { name, value, fill } = payload[0].payload;
  const percentage = ((value / totalResponses) * 100).toFixed(1);

  return (
    <div className="w-60 rounded-xl border border-blue-100 bg-white p-4 shadow-lg">
      <p className="text-sm font-semibold text-gray-900">{name}</p>
      <p className="text-2xl font-bold text-gray-900">
        {value}
        <span className="text-sm font-medium text-gray-500"> respuestas</span>
      </p>
      <p className="text-sm font-medium" style={{ color: fill }}>
        {percentage}% del total
      </p>
    </div>
  );
}

export default function NeighborhoodActivitiesChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
            Caracteristicas del barrio
          </p>
          <h2 className="text-xl font-bold text-gray-900">
            Que tipo de actividades se realizan en su barrio?
          </h2>
          <p className="text-sm text-gray-500">
            Distribucion de {totalResponses} respuestas por uso predominante.
          </p>
        </div>
        <div className="rounded-full border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          4 categorias
        </div>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 80, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" allowDecimals={false} />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fontSize: 12 }}
            width={90}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(37, 99, 235, 0.12)" }} />
          <Bar dataKey="value" radius={[0, 8, 8, 0]} maxBarSize={28}>
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
