import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function ItemCard({ imageUrl, name, contractAddress, tokenId }) {

  return (
    <Link to={`/${contractAddress}/${tokenId}`}>
        <Card className="card">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
        </Card>
    </Link>
  );
}
