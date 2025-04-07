import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './coinSlice';

export default configureStore({
  reducer: {
    coin: coinReducer,
  },
});