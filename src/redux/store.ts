import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './slices/rootSlice'; // Ensure this file is correctly imported

const store = configureStore({
  reducer: {
    rootSlice: rootSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
