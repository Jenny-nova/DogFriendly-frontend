import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function PlacesList({ user }) {
  const [places, setPlaces] = useState([]);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city.trim() === "") {
      setPlaces([]);
      setError("");
      return;
    }

    setLoading(true);
    api.get("/places", { params: { city } })
      .then(r => setPlaces(r.data))
      .catch(err => setError("Error al cargar lugares"))
      .finally(() => setLoading(false));

  }, [city]); 

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
        ) : error ? (
          <div>{error}</div>
        ) : places.length > 0 ? (
          <ul>
            {places.map(p => (
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


