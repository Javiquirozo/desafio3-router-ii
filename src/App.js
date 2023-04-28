import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemones from "./components/Pokemones";
import Pokemon from './components/Pokemon';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} 
          />
          <Route path='/pokemones' element={<Pokemones />} 
          />
          <Route path='/pokemon/:pokemonName' element={<Pokemon />} 
          />
        </Routes>


      </BrowserRouter>
  

    </div>
  );
}

