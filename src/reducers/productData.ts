import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Item = {
  id: number;
  name: string;
};

type ItemsState = {
  items: Item[];
};

const initialState: ItemsState = {
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
