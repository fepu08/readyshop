import { createSlice } from '@reduxjs/toolkit';

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export interface AuthSliceState {
  userInfo: UserInfo | null;
}

const initialState: AuthSliceState = {
  userInfo: localStorage.getItem('userInfo') ? (JSON.parse(localStorage.getItem('userInfo')!) as UserInfo) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
