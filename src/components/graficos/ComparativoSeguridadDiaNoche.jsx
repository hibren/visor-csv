import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Muy Seguro", dia: 75, noche: 37 },
  { name: "Seguro", dia: 145, noche: 138 },
  { name: "Inseguro", dia: 18, noche: 48 },
  { name: "Muy Inseguro", dia: 5, noche: 23 },
];

export default function ComparativoSeguridadDiaNoche() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Comparativa de Percepción de Seguridad: Día vs. Noche
          </h2>
          <p className="text-sm text-gray-500">
            Total de respuestas: {data.reduce((acc, cur) => acc + cur.dia + cur.noche, 0)}
          </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={360}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="dia" fill="#22c55e" name="Día" />
          <Bar dataKey="noche" fill="#1d4ed8" name="Noche" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
