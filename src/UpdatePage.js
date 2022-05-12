import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getResturantById, updateResturant } from './services/fetch-utils';
import { useState, useEffect } from 'react';

export default function UpdatePage() {
  const params = useParams();
  const history = useHistory();
  const [resturant, setResturant] = useState({});

  useEffect(() => {
    async function load() {
      const thisResturant = await getResturantById(params.id);
      setResturant(thisResturant);
    }
    load();
  }, [params.id]);

  async function handleSubmit(e) {
    e.preventDefault();
    await updateResturant(resturant);

    history.push('/resturants');

    // create a game

    // use history.push to send the user to the list page
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add Resturant</h2>

        <label>
          Name
          <input
            value={resturant.name}
            onChange={(e) =>
              setResturant({
                ...resturant,
                name: e.target.value,
              })
            }
          />
        </label>
        <label>
          Price Range
          <input
            value={resturant.price_range}
            onChange={(e) =>
              setResturant({
                ...resturant,
                price_range: e.target.value,
              })
            }
          />
        </label>
        <label>
          Address
          <textarea
            value={resturant.address}
            onChange={(e) =>
              setResturant({
                ...resturant,
                address: e.target.value,
              })
            }
          />
        </label>
        <label>
          Hours
          <input
            value={resturant.hours}
            onChange={(e) =>
              setResturant({
                ...resturant,
                hours: e.target.value,
              })
            }
          />
        </label>
        <label>
          Rating
          <input
            value={resturant.rating}
            onChange={(e) =>
              setResturant({
                ...resturant,
                rating: e.target.value,
              })
            }
          />
        </label>
        <button>Update Resturant</button>
      </form>
    </div>
  );
}
