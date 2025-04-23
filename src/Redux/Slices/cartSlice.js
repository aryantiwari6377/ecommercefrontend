

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({ 
  name: 'cart', 
  initialState, 
  reducers: {   
    addToCart: (state, action) => { 
      const { productId, quantity, price, name } = action.payload;
      console.log(productId, quantity, price, name);
      const existingItem = state.items.find(item => item.productId === productId);
       
      if (existingItem) {
        console.log(`Updating item ${productId}:`, existingItem);
        existingItem.quantity += quantity;
        console.log(`New quantity for item ${productId}:`, existingItem.quantity);
      } else {
        console.log(`Adding new item ${productId}:`, { productId, quantity, price, name });
        state.items.push({ productId, quantity, price, name });
      }
      console.log('Current cart state after addToCart:', state.items);
    },

    // updateQuantity: (state, action) => {
    //   const { productId, quantity } = action.payload;
    //   const existingItem = state.items.find(item => item.productId === productId);

    //   if (existingItem) {
    //     console.log(`Updating quantity for item ${productId}:`, existingItem);
    //     existingItem.quantity = quantity;
    //     console.log(`New quantity for item ${productId}:`, existingItem.quantity);
    //   }
    //   console.log('Current cart state after updateQuantity:', state.items);
    // },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(item => item.productId === productId);
    
      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    
    removeFromCart: (state, action) => {
      console.log(`Removing item ${action.payload.productId}`);
      state.items = state.items.filter(item => item.productId !== action.payload.productId);
      console.log('Current cart state after removeFromCart:', state.items);
    },
    setCartItems: (state, action) => {
        state.items = action.payload;
      },
  },
});

export const { addToCart, updateQuantity, removeFromCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
