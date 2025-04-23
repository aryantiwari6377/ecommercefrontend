
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   profileUrl: "", 
// };

// const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     setProfileUrl: (state, action) => {
//       state.profileUrl = action.payload; 
//     },
//   },
// });

// export const { setProfileUrl } = profileSlice.actions;
// export default profileSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

// Load initial state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('profile');
    if (serializedState === null) return { profileUrl: "" };
    return JSON.parse(serializedState);
  } catch (err) {
    return { profileUrl: "" };
  }
};

const initialState = loadState(); 

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileUrl: (state, action) => {
      state.profileUrl = action.payload;
      // Save state to localStorage
      try {
        localStorage.setItem('profile', JSON.stringify(state));
      } catch (err) {
        console.error('Could not save profile to localStorage', err);
      }
    },
  },
});

export const { setProfileUrl } = profileSlice.actions;
export default profileSlice.reducer;
