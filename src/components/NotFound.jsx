import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn">Go to Home</Link>

    </div>
  )
}

export default NotFound