export default function KPICard({ label, value, description }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="pb-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {label}
        </p>
      </div>
      <div>
        <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
