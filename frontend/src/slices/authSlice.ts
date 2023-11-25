import { createSlice } from '@reduxjs/toolkit';

const initialState: AuthSliceState = {
  // FIXME: give the correct type to userInfo
  userInfo: localStorage.getItem('userInfo') ? (JSON.parse(localStorage.getItem('userInfo')) as object) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: (sate, action) => {
    state.userInfo = action.payload;
    localStorage.setItem('userInfo', JSON.stringify(action.payload));
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
