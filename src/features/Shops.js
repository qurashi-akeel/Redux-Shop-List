import { createSlice } from '@reduxjs/toolkit';

import ShopData from '../ShopList';

export const shopSlice = createSlice({
  name: 'shopList',
  initialState: { value: [ShopData] },
  reducers: {
    addShop: (state, action) => {
      state.value[0].push(action.payload);
    },
    deleteShop: (state, action) => {
      state.value[0] = state.value[0].filter((shop) => shop.id !== action.payload.id);
    },
  },
});

export const { addShop, deleteShop, filterShop } = shopSlice.actions;

export default shopSlice.reducer;
