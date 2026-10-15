import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>home hai</h1>
        <Link to="/characters" className="btn">See characters</Link>
    </div>

  )
}

export default Home