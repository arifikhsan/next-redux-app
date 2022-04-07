import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import profileSlice from './profile-slice';

const makeStore = () => configureStore({
  reducer: {
    profile: profileSlice
  },
  devTools: true
})

export const wrapper = createWrapper(makeStore)
