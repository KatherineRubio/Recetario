import { useState } from "react";
import { recetas } from "./recetas";
import RecetaCard from "./RecetaCard";
import RecetaDetalle from "./RecetaDetalle";
import "./App.css";

export default function App() {
  const [seleccionada, setSeleccionada] = useState(null);

  return (
    <>
      <header>
        <h1>🍳 Mi Recetario</h1>
        <p>Recetas fáciles para cada día</p>
      </header>

      <main className="grid">
        {recetas.map((receta) => (
          <RecetaCard key={receta.id} receta={receta} onSelect={setSeleccionada} />
        ))}
      </main>

      {seleccionada && (
        <RecetaDetalle receta={seleccionada} onClose={() => setSeleccionada(null)} />
      )}
    </>
  );
}