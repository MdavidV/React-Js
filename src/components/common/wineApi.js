import React, { useEffect, useState } from "react";

export const WineApi = () => {
  const [id, setId] = useState(1);

  const [pokemon, setPokemon] = useState(null);

  const handleNext = () => {
    setId(id + 1);
  };

  const handlePrev = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  console.log(pokemon);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [id]);

  console.log(id);
  return (
    <div>
      <h2>Poke Api</h2>
      <hr />

      {pokemon ? (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Ataque: {pokemon.moves[id].move.name}</p>
        </div>
      ) : (
        <h3>Cargando...</h3>
      )}

      <button className="btn btn-outline-danger" onClick={handlePrev} disabled={id === 1}>
        Prev
      </button>
      <button className="btn btn-outline-danger mx-2" onClick={handleNext} >
        Next
      </button>
    </div>
  );
};
