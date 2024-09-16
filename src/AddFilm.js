import React, { useState } from 'react';

const AddFilm = ({ addFilm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFilm = {
      id: Math.random(), 
      title,
      description,
      posterUrl,
      rating: parseFloat(rating),
    };
    addFilm(newFilm);
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button type="submit">Ajouter un film</button>
    </form>
  );
};

export default AddFilm;
