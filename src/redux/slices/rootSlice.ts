import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StoreItem {
    id:string;
  store: string;
  state: string;
  city: string;
}

interface RootState {
  store: StoreItem[]; 
}

const initialState: RootState = {
  store: [],
};

const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    addStore: (state, action: PayloadAction<StoreItem>) => {
      state.store.push(action.payload);
    },
  },
});

export const { addStore } = rootSlice.actions;
export default rootSlice.reducer;
