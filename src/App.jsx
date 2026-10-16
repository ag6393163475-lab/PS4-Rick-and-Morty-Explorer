import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Characters from './components/Characters'
// import CharacterCard from './components/CharacterCard'
import CharacterDetail from './components/CharacterDetail'
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
    <Navbar />
    <main className="container">
    <Routes>
        {/* //kaun se path pe kaun sa element render hoga */}
          <Route path='/' element={<Home/>} />
          <Route path='/Navbar' element={<Navbar/>} />
          <Route path='/characters/' element={<Characters/>} />
          <Route path='/characters/:id' element={<CharacterDetail/>} />
          <Route path="*" element={<NotFound/>} />
       </Routes>
    </main>
    </>
  )
}

export default App