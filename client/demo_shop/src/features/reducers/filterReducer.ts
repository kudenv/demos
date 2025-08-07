import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FilterState = {
  priceRange: number[]; 
  paymentType: string; 
};

const INITIAL_STATE: FilterState = {
  priceRange: [0, 100], 
  paymentType: '', 
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setPriceRange: (state, action: PayloadAction<number[]>) => {
      state.priceRange = action.payload;
    },    
    setPaymentType: (state, action: PayloadAction<string>) => {
      state.paymentType = action.payload;
    },    
    resetFilters: () => INITIAL_STATE,  
    setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
      const newState = { ...state, ...action.payload };
      return newState;
    },
  },
});

export const {
  setPriceRange, 
  setPaymentType, 
  resetFilters,  
  setFilter,
} = filterSlice.actions;

export const selectFilter = (state: { filter: FilterState }) => state.filter;

export const filterReducer = filterSlice.reducer;
export default filterReducer;
