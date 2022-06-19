import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteShop } from '../features/Shops';

let shops;

const DisplayShops = () => {
  shops = useSelector((state) => state.shops.value);
  const dispatch = useDispatch();
  return (
    <>
      <h2>List of all Shops</h2>
      <div className="cardContainer">
        {shops[0].map((shop, i) => (
          <div key={i} className="shopCard">
            <h3>{shop.name}</h3>
            <hr />
            <span>Category : {shop.category}</span> <br />
            <span>Location : {shop.area}</span> <br /> <br />
            <span className="date">
              Open Date : {new Date(shop.openDate).toLocaleDateString('en-gb')}{' '}
              <br />
              Close Date :{' '}
              {new Date(shop.closeDate).toLocaleDateString('en-gb')}
            </span>
            <br />
            <button onClick={() => dispatch(deleteShop({ id: shop.id }))}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export const updatedShops = shops;

export default DisplayShops;
