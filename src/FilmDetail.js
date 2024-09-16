import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = ({ films }) => {
  const { id } = useParams();
  const film = films.find((film) => film.id === parseFloat(id));

  if (!film) {
    return <p>Film non trouvé</p>;
  }

  return (
    <div>
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <iframe
        width="560"
        height="315"
        src={film.trailerLink}
        title="Bande-annonce"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Retour à la liste des films</Link>
    </div>
  );
};

export default FilmDetail;
