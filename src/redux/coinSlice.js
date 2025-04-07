import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async (page) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 10,
        page,
        sparkline: false
      }
    }
  );
  return response.data;
});

const coinSlice = createSlice({
  name: 'coin',
  initialState: {
    coins: [],
    status: 'idle'
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.coins = [...state.coins, ...action.payload];
      });
  }
});

export default coinSlice.reducer;