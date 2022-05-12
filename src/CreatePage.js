import React from 'react';
import { useState } from 'react';
import { createResturant } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const history = useHistory();

  const [resturantInForm, setResturantInForm] = useState({
    name: '',
    price_range: '',
    address: '',
    hours: '',
    rating: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createResturant(resturantInForm);

    history.push('/resturants');
  }

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h2>Add Resturant</h2>

        <label>
          Name
          <input
            value={resturantInForm.name}
            onChange={(e) =>
              setResturantInForm({
                ...resturantInForm,
                name: e.target.value,
              })
            }
          />
        </label>
        <label>
          Price Range
          <input
            value={resturantInForm.price_range}
            onChange={(e) =>
              setResturantInForm({
                ...resturantInForm,
                price_range: e.target.value,
              })
            }
          />
        </label>
        <label>
          Address
          <textarea
            value={resturantInForm.address}
            onChange={(e) =>
              setResturantInForm({
                ...resturantInForm,
                address: e.target.value,
              })
            }
          />
        </label>
        <label>
          Hours
          <input
            value={resturantInForm.hours}
            onChange={(e) =>
              setResturantInForm({
                ...resturantInForm,
                hours: e.target.value,
              })
            }
          />
        </label>
        <label>
          Rating
          <input
            value={resturantInForm.rating}
            onChange={(e) =>
              setResturantInForm({
                ...resturantInForm,
                rating: e.target.value,
              })
            }
          />
        </label>
        <button>Submit Resturant</button>
      </form>
    </div>
  );
}
