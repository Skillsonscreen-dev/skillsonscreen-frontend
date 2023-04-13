import {createSlice} from '@reduxjs/toolkit';

const initialState: {state: CategoryInterface} = {
  state: {
    isLoading: false,
    hasFetched: false,
    items: []
  }
};

export const setCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.state = {...state.state, ...action.payload};
    },
  },
});

export const {setCategory} = setCategorySlice.actions;

export interface CategoryInterface {
  items: CategoryItemsInterface[]
  isLoading: boolean
  hasFetched: boolean
}

export interface CategoryItemsInterface {
  categoryId: string
  title: string
  description: string
  slug: string
  img: string
  students: number
  courses: number
}

export default setCategorySlice.reducer;
