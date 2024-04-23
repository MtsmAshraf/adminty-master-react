import { configureStore } from '@reduxjs/toolkit';
import sideChatReducer from './sideChatSlice';

export const store = configureStore({
  reducer: {
    sideChat: sideChatReducer,
    // Add other reducers here if you have them
  },
});

