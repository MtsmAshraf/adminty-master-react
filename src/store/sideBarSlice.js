import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shown: false,
};

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
        state.shown = !state.shown;
    },
  },
});

export const { toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer;