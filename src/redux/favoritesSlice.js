import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
    lastUpdated: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find((x) => x.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
      state.lastUpdated = Date.now();
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((x) => x.id !== action.payload);
      state.lastUpdated = Date.now();
    },
    clearFavorites: (state) => {
      state.items = [];
      state.lastUpdated = Date.now();
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
