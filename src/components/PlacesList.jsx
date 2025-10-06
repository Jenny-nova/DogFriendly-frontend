import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function PlacesList({ user }) {
  const [places, setPlaces] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/places")
      .then(r => setPlaces(r.data))
      .finally(() => setLoading(false));
  }, []);


  const filtered = places.filter(p =>
    p.city.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <div className="card">
      <h2>Restaurantes pet-friendly</h2>
      <input
        placeholder="Selecciona ciudad"
        value={city}
        onChange={e => setCity(e.target.value)}
        className="input-field"
      />

      {city === "" ? null : (
        loading ? (
          <div>Cargando...</div>
        ) : filtered.length > 0 ? (
          <ul>
            {filtered.map(p => (
              <li key={p.id}>
                <b>{p.name}</b> - {p.address}, {p.city}, {p.country}
              </li>
            ))}
          </ul>
        ) : (
          <i>No hay lugares</i>
        )
      )}
    </div>
  );
}