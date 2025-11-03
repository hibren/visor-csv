import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
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
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
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
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            labelLine={false}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
