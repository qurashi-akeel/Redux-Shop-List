import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addShop } from '../features/Shops';

const AddShop = () => {
  const [shop, setShop] = useState({
    id: 0,
    name: '',
    category: '',
    area: '',
    openDate: '',
    closeDate: '',
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="addShopComp" onSubmit={handleSubmit}>
      <h2>Add Shop :</h2>
      <input
        type="text"
        placeholder="Shop Name..."
        pattern="[a-zA-Z\s]+"
        required
        onChange={(event) =>
          setShop({
            ...shop,
            name: event.target.value,
            id: Math.floor(Math.random() * 10000000),
          })
        }
      />
      <select
        name="shopCategory"
        required
        id="shopCategory"
        onChange={(event) => setShop({ ...shop, category: event.target.value })}
      >
        <option defaultValue={'Grocery'} hidden>
          Grocery
        </option>
        {['Grocery', 'Butcher', 'Baker', 'Chemist', 'Stationery Shop'].map(
          (cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          )
        )}
      </select>
      <select
        name="shopArea"
        required
        id="shopArea"
        onChange={(event) => setShop({ ...shop, area: event.target.value })}
      >
        <option defaultValue={'Pune'} hidden>
          Pune
        </option>
        {[
          'Pune',
          'Thane',
          'Mumbai Suburban',
          'Nashik',
          'Nagpur',
          'Ahmednagar',
          'Solapur',
        ].map((area, i) => (
          <option key={i} value={area}>
            {area}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="open"
        id="open"
        required
        onChange={(event) =>
          setShop({
            ...shop,
            openDate: new Date(event.target.value),
          })
        }
      />
      <input
        type="date"
        name="close"
        id="close"
        required
        onChange={(event) =>
          setShop({
            ...shop,
            closeDate: new Date(event.target.value),
          })
        }
      />
      <br />
      {shop.id !== 0 &&
      /^[a-zA-Z ]+$/.test(shop.name) &&
      new Date(shop.openDate).getTime() < new Date(shop.closeDate).getTime() ? (
        <button onClick={() => dispatch(addShop(shop))}>Add Shop</button>
      ) : (
        <>
          <button style={{ color: `#fe5b5b`, cursor: 'not-allowed' }} disabled>
            Add Shop
          </button>
          <br />
        </>
      )}
    </form>
  );
};

export default AddShop;
