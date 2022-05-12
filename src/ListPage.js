import React from 'react';
import { useState, useEffect } from 'react';
import { getResturants } from './services/fetch-utils';
import Resturant from './Resturant';

export default function ListPage() {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getResturants();

      setResturants(data);
    }
    load();
  }, []);

  return (
    <div className="resturants">
      {resturants.map((resturant, i) => (
        <Resturant key={resturant + i} resturant={resturant} />
      ))}
    </div>
  );
}
