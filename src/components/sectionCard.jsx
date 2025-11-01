export default function SectionCard({ title, children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-500">
        {title}
      </p>
      {children}
    </div>
  );
}
