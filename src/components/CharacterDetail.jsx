

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
<div className="character-detail">
<img
     src={character.image}
     alt={character.name}
     className="character-image"
   />

  <div className="character-content">
    <span className="character-species">
      {character.species}
    </span>

    <h2 className="character-name">
      {character.name}
    </h2>

    <p>
      Gender: <strong>{character.gender}</strong>
    </p>

    <p>Location: {character.location.name}</p>

    <div className="character-details">
      <span>{character.episode.length} episodes</span>
    </div>
  </div>
</div>
  );
}

export default CharacterDetail;