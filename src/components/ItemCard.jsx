import React from 'react';
import { Card } from "react-bootstrap";

export default function ItemCard({ imageUrl, name }) {

  return (
    <Card className="card">
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
        </Card.Body>
    </Card>
  );
}
