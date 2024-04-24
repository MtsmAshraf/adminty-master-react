import { configureStore } from '@reduxjs/toolkit';
import sideChatReducer from './sideChatSlice';
import sideBarReducer from './sideBarSlice';

export const store = configureStore({
  reducer: {
    sideChat: sideChatReducer,
    sideBar: sideBarReducer,
    // Add other reducers here if you have them
  },
});

