import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCoins, fetchCoinDetails } from "./coinAPI";

export const loadCoins = createAsyncThunk("coins/load", fetchCoins);
export const getCoinDetails = createAsyncThunk("coins/details", fetchCoinDetails);

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    items: [],
    page: 1,
    loading: false,
    searchQuery: "",
    selectedCoin: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearSelectedCoin: (state) => {
      state.selectedCoin = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadCoins.fulfilled, (state, action) => {
        state.items = [...state.items, ...action.payload];
        state.page += 1;
        state.loading = false;
      })
      .addCase(getCoinDetails.fulfilled, (state, action) => {
        state.selectedCoin = action.payload;
      });
  },
});

export const { setSearchQuery, clearSelectedCoin } = coinSlice.actions;

export default coinSlice.reducer;
