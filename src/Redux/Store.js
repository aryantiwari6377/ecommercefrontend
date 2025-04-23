
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice';
import profileReducer from './Slices/profileSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer,
  },
});

export default store;
