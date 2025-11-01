import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "ALIANZA FUERZA PATRIA", value: -12500 },
  { name: "ALIANZA LA LIBERTAD AVANZA", value: -8900 },
  { name: "UNIÓN LIBERAL", value: 6200 },
  { name: "LA LIBERTAD AVANZA", value: -3200 },
  { name: "COALICIÓN CÍVICA - A.R.I.", value: 4500 },
  { name: "FRENTE DE IZQUIERDA Y DE TRABA", value: 2100 },
  { name: "FUERZA PATRIA", value: -1800 },
  { name: "FRENTE CÍVICO POR SANTIAGO", value: -1200 },
  { name: "FE", value: 1600 },
  { name: "MOVIMIENTO AVANZADA SOCIALISTA", value: 900 },
];

export default function PartiesImpactChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold">
        Top 10 Partidos por Impacto en Votos
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 200, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            width={190}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Bar dataKey="value" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.value < 0 ? "#ef4444" : "#10b981"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
