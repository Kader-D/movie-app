import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FilmCard = ({ film }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={film.posterUrl} alt={film.title} />
      <Card.Body>
        <Card.Title>{film.title}</Card.Title>
        <Card.Text>Note: {film.rating}</Card.Text>
        <Link to={`/film/${film.id}`}>
          <Button variant="primary">Voir la description</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
