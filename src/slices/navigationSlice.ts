import {createSlice} from '@reduxjs/toolkit';
import AxiosCall from '../utils/axios';

const initialState = {
  state: false
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.state =  !state.state;
    },
  },
});

export const {setNavigation} = navigationSlice.actions;

export default navigationSlice.reducer;
