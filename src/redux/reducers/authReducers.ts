import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../types/reduxTypes';

interface User {
  name: string;
  email: string;
}

const initialState = {
  user: {} as User,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
