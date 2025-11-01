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
  { name: "BUENOS AIRES", value: 285 },
  { name: "CÓRDOBA", value: 95 },
  { name: "SANTA FE", value: 78 },
  { name: "CHACO", value: 42 },
  { name: "CABA", value: 38 },
  { name: "SANTIAGO DEL ESTERO", value: 35 },
  { name: "MENDOZA", value: 28 },
  { name: "SALTA", value: 24 },
  { name: "MISIONES", value: 18 },
  { name: "ENTRE RÍOS", value: 12 },
];

export default function ProvincesChart() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold">
        Top 10 Provincias con más Anomalías
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            width={110}
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#3b82f6" radius={[0, 8, 8, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
