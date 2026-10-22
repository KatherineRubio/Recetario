export default function RecetaDetalle({ receta, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="detalle" onClick={(e) => e.stopPropagation()}>
        <button className="cerrar" onClick={onClose}>✕</button>
        <img src={receta.imagen} alt={receta.nombre} />
        <div className="detalle-body">
          <h2>{receta.nombre}</h2>
          <p className="info">⏱ {receta.tiempo} · 🍽 {receta.porciones} porciones</p>

          <h3>Ingredientes</h3>
          <ul>
            {receta.ingredientes.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>

          <h3>Preparación</h3>
          <ol>
            {receta.pasos.map((paso) => (
              <li key={paso}>{paso}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}