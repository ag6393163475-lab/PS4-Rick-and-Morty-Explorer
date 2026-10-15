// import { useEffect, useState } from "react";
// import CharacterCard from "../components/CharacterCard";

// export default function Characters() {
//   const [characters, setCharacters] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     setError("");

//     fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch characters");
//         return res.json();
//       })
//       .then((data) => {
//         setCharacters(data.results);
//         setTotalPages(data.info.pages);
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [page]);

//   return (
//     <section>
//       <h1>Characters</h1>

//       {loading && <p className="message">Loading...</p>}
//       {error && <p className="message error">{error}</p>}

//       {!loading && !error && <CharacterCard characters={characters} />}

//       <div className="pagination">
//         <button className="btn" disabled={page <= 1} onClick={() => setPage(page - 1)}>
//           Prev
//         </button>
//         <span>Page {page} of {totalPages}</span>
//         <button className="btn" disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
//           Next
//         </button>
//       </div>
//     </section>
//   );
// }


import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [page]);

  return (
    <div>
      <h1>Characters</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="characters">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
            />
          ))}
        </div>
      )}

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <span>Page {page} of {totalPages}</span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}