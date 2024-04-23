import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shown: false,
};

const sideChatSlice = createSlice({
  name: 'sideChat',
  initialState,
  reducers: {
    toggleSideChat: (state) => {
      state.shown = !state.shown;
    },
  },
});

export const { toggleSideChat } = sideChatSlice.actions;

export default sideChatSlice.reducer;