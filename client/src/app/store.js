import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/User/userSlice';
import notesReducer from '../features/Notes/notesSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    notes: notesReducer
  },
});
