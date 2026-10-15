import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function CharacterCard({ character }) {
  if (!character) {
return <p>Character data is loading...</p>;
}
  return (
    
    
    <Link to={`/characters/${character.id}`} className="card">
      
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>{character.species}</p>
      <StatusBadge status={character.status} />
    </Link>
  );
}