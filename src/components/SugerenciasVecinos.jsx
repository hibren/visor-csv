const suggestions = [
  {
    title: "👮‍♂️ Mayor Presencia y Control Policial / Patrullaje",
    details: "Los vecinos solicitan activamente una mayor visibilidad de las fuerzas de seguridad. Esto incluye más patrullajes regulares, especialmente en horarios nocturnos, la implementación de guardias fijas en puntos clave y un control más riguroso para disuadir actividades delictivas. Se busca una sensación de seguridad constante a través de la presencia policial.",
  },
  {
    title: "💡 Mejor Iluminación y Mantenimiento Urbano",
    details: "Una preocupación recurrente es la infraestructura urbana. Los residentes piden una mejora sustancial en la iluminación pública, reparaciones rápidas de luminarias dañadas, y un plan de limpieza y mantenimiento para eliminar baldíos y cuidar espacios abandonados. Se considera que un entorno cuidado y bien iluminado reduce las oportunidades para la delincuencia.",
  },
  {
    title: "📹 Tecnología y Medidas de Seguridad",
    details: "La comunidad demanda la implementación de soluciones tecnológicas para reforzar la seguridad. Esto abarca la instalación de cámaras de seguridad de alta resolución en áreas estratégicas, sistemas de alarmas vecinales conectados, y controles vehiculares más frecuentes, incluyendo pruebas de alcoholemia. El objetivo es prevenir delitos y facilitar la identificación de responsables.",
  },
];

export default function SugerenciasVecinos() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">Sugerencias de los Vecinos</h2>
      <div className="space-y-6">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="p-5 border border-gray-200 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{suggestion.title}</h3>
            <p className="text-base text-gray-700 leading-relaxed">{suggestion.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
