export default function RecetaCard({ receta, onSelect }) {
  return (
    <article className="card" onClick={() => onSelect(receta)}>
      <img src={receta.imagen} alt={receta.nombre} />
      <h2>{receta.nombre}</h2>
    </article>
  );
}