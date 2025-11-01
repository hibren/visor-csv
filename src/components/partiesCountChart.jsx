import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "ALIANZA FUERZA PATRIA", value: 115 },
  { name: "ALIANZA LA LIBERTAD AVANZA", value: 98 },
  { name: "UNIÓN LIBERAL", value: 65 },
  { name: "COALICIÓN CÍVICA - A.R.I.", value: 42 },
  { name: "LA LIBERTAD AVANZA", value: 38 },
  { name: "FRENTE DE IZQUIERDA Y DE TRABA", value: 32 },
  { name: "FUERZA PATRIA", value: 28 },
  { name: "FE", value: 25 },
  { name: "FRENTE CÍVICO POR SANTIAGO", value: 22 },
  { name: "PARTIDO NUEVO BUENOS AIRES", value: 18 },
];

export default function PartiesCountChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold">
        Top 10 Partidos por Cantidad de Anomalías
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
          <Bar dataKey="value" fill="#7c3aed" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
