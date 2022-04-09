import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
  },
  reducers: {
    setProfile: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // keep state from client side
      if (state.name != action.payload.profile.name) {
        return state;
      }
      
      state.name = action.payload.profile.name;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export const getProfile = (state) => state.profile;

export default profileSlice.reducer;
