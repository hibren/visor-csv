import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const data = [
  {
    name: "Sí",
    value: 129,
    fill: "#ef4444", // Rojo para inseguro
    description: "Vecinos que consideran su barrio inseguro.",
  },
  {
    name: "No",
    value: 111,
    fill: "#22c55e", // Verde para seguro
    description: "Vecinos que no consideran su barrio inseguro.",
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

export default function NeighborhoodSafetyChart() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            ¿Hay algún lugar en su barrio que considere inseguro o propenso a la
            delincuencia?
          </h2>
          <p className="text-sm text-gray-500">
            Total de respuestas: {totalResponses}
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            labelLine={false}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.fill} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
