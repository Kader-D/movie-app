import React, { useState } from 'react';
import FilmCard from './FilmCard';

const FilmList = ({ films }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [minRating, setMinRating] = useState(0);

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      film.rating >= minRating
  );

  return (
    <div>
      <h2>Liste des Films</h2>
      <input
        type="text"
        placeholder="Filtrer par titre"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filtrer par note"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredFilms.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
};

export default FilmList;
