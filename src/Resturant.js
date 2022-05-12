import React from 'react';
import { Link } from 'react-router-dom';

export default function Resturant({ resturant }) {
  return (
    <div className="resturant">
      <Link to={`/resturants/${resturant.id}`}>
        <h3>{resturant.name}</h3>
        <p>
          <b>Price Range:</b> {resturant.price_range}
        </p>
        <p>
          <b>Address:</b> {resturant.address}
        </p>
        <p>
          <b>Hours:</b> {resturant.hours}
        </p>
        <p>
          <b>Rating:</b> {resturant.rating}
        </p>
      </Link>
    </div>
  );
}
