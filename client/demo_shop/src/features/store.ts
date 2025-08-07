import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from '@/features/reducers/filterReducer';
import { cartReducer } from '@/features/reducers/cartReducer'

export const store = configureStore({
  reducer: {    
    filter: filterReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;