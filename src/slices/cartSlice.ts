import {createSlice} from '@reduxjs/toolkit';

const initialState: {state: CourseInterface[]} = {
  state: []
};

export const setCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.state = [...state.state, ...action.payload];
    },
  },
});

export const {setCart} = setCartSlice.actions;

export interface CourseInterface {
    courseId:     string;
    teacherId:    string;
    title:        string;
    category:     string;
    level:        string;
    description:  string;
    about:        string;
    courseImg:    string;
    isFor:        any[];
    wouldLearn:   any[];
    requirements: any[];
    price:        number;
    students:     number;
    rating:       number;
    status:       string;
    createdAt:    Date;
}

export default setCartSlice.reducer;
