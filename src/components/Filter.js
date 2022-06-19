import { useState } from 'react';

const Filter = (shops) => {
  const shopsArray = shops['shops'][0];
  const [filteredShops, setfilteredShops] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (
      Object.fromEntries(data.entries()).shopCategory !== '' &&
      Object.fromEntries(data.entries()).shopArea !== ''
    )
      setfilteredShops(
        shopsArray.filter(
          (shop) =>
            shop.category === Object.fromEntries(data.entries()).shopCategory &&
            shop.area === Object.fromEntries(data.entries()).shopArea
        )
      );
    else if (Object.fromEntries(data.entries()).shopCategory !== '') {
      setfilteredShops(
        shopsArray.filter(
          (shop) =>
            shop.category === Object.fromEntries(data.entries()).shopCategory
        )
      );
    } else if (Object.fromEntries(data.entries()).shopArea !== '') {
      setfilteredShops(
        shopsArray.filter(
          (shop) => shop.area === Object.fromEntries(data.entries()).shopArea
        )
      );
    }
  };

  return (
    <>
      <form className="" onSubmit={handleSubmit}>
        <h3>
          Filter:
          <select name="shopCategory" id="shopCategory">
            <option value={''} hidden>
              Select Category
            </option>
            {['Grocery', 'Butcher', 'Baker', 'Chemist', 'Stationery Shop'].map(
              (cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              )
            )}
          </select>
          <select name="shopArea" id="shopArea">
            <option value={''} hidden>
              Select Area
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
          <button>Filter</button>
        </h3>
        {/* Filtered Shops */}
        {filteredShops.length ? <h2>Filtered Shops</h2> : ''}
        <div className="cardContainer">
          {filteredShops?.map((shop, i) => (
            <div key={i} className="shopCard">
              <h3>{shop.name}</h3>
              <hr />
              <span>Category : {shop.category}</span> <br />
              <span>Location : {shop.area}</span> <br /> <br />
              <span className="date">
                Open Date :{' '}
                {new Date(shop.openDate).toLocaleDateString('en-gb')} <br />
                Close Date :{' '}
                {new Date(shop.closeDate).toLocaleDateString('en-gb')}
              </span>
              <br />
            </div>
          ))}
        </div>
        <hr />
      </form>
    </>
  );
};

export default Filter;
