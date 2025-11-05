import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  Legend,
} from "recharts";

const data = [
  {
    name: "Iluminación deficiente",
    value: 59,
    fill: "#facc15",
    description:
      "Percepción de que la iluminación deficiente contribuye a la delincuencia.",
  },
  {
    name: "Falta de vigilancia policial",
    value: 91,
    fill: "#f97316",
    description:
      "Percepción de que la falta de vigilancia policial contribuye a la delincuencia.",
  },
  {
    name: "Lugares abandonados o en ruinas",
    value: 57,
    fill: "#ef4444",
    description:
      "Percepción de que la presencia de lugares abandonados o en ruinas contribuye a la delincuencia.",
  },
  {
    name: "Drogas o alcohol en la zona",
    value: 101,
    fill: "#dc2626",
    description:
      "Percepción de que la presencia de drogas o alcohol en la zona contribuye a la delincuencia.",
  },
];

const totalResponses = data.reduce((sum, item) => sum + item.value, 0);

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const { value } = payload[0];
    const entry = data.find((item) => item.name === label);
    const percentage = ((value / totalResponses) * 100).toFixed(1);

    return (
      <div className="w-60 rounded-xl border border-blue-100 bg-white p-4 shadow-lg">
        <p className="text-sm font-semibold text-gray-900">{label}</p>
        <p className="text-2xl font-bold text-gray-900">
          {value}{" "}
          <span className="text-sm font-medium text-gray-500">respuestas</span>
        </p>
        <p className="mb-2 text-sm font-medium" style={{ color: entry.fill }}>
          {percentage}% del total
        </p>
        <p className="text-xs text-gray-500">{entry.description}</p>
      </div>
    );
  }

  return null;
}

export default function FactoresDelincuenciaChart() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            ¿Qué factores cree que contribuyen a la delincuencia en su barrio?
          </h2>
          <p className="text-sm text-gray-500">
            Total de respuestas: {totalResponses}
          </p>
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
