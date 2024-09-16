import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmList from './FilmList';
import FilmDetail from './FilmDetail';
import AddFilm from './AddFilm';

function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "Film 1",
      description: "Description du Film 1",
      posterUrl: "url_to_poster1",
      rating: 4.5,
      trailerLink: "https://www.youtube.com/embed/xyz"
    },
    // Ajoutez d'autres films ici
  ]);

  const addFilm = (newFilm) => {
    setFilms([...films, newFilm]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FilmList films={films} />} />
        <Route path="/film/:id" element={<FilmDetail films={films} />} />
        <Route path="/add" element={<AddFilm addFilm={addFilm} />} />
      </Routes>
    </Router>
  );
}

export default App;