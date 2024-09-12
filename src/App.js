import React, { useState } from 'react';
import FilmList from './FilmList';
import Filter from './Filter';
import { Container, Button, Form } from 'react-bootstrap';

function App() {
  const [films, setFilms] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [newFilm, setNewFilm] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rating: '',
  });

  const handleAddFilm = () => {
    setFilms([...films, newFilm]);
    setNewFilm({ title: '', description: '', posterUrl: '', rating: '' });
  };

  const filteredFilms = films.filter((film) => 
    film.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (ratingFilter === '' || film.rating >= ratingFilter)
  );

  return (
    <Container>
      <h1>Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      <div style={{ margin: '20px 0' }}>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={newFilm.title}
              onChange={(e) => setNewFilm({ ...newFilm, title: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={newFilm.description}
              onChange={(e) => setNewFilm({ ...newFilm, description: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Poster URL</Form.Label>
            <Form.Control
              type="text"
              value={newFilm.posterUrl}
              onChange={(e) => setNewFilm({ ...newFilm, posterUrl: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              value={newFilm.rating}
              onChange={(e) => setNewFilm({ ...newFilm, rating: e.target.value })}
            />
          </Form.Group>
          <Button onClick={handleAddFilm}>Add Film</Button>
        </Form>
      </div>
      <FilmList films={filteredFilms} />
    </Container>
  );
}

export default App;
