import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Rick and Morty Explorer</h1>
      <p>Browse every character from the multiverse, page by page.</p>
      <Link to="/characters" className="btn">See characters</Link>
    </section>
  );
}