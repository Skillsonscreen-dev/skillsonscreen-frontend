import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from '../slices/navigationSlice'
import profileReducer from '../slices/profileSlice'
import cartReducer from '../slices/cartSlice'
import categoryReducer from '../slices/categorySlice'


export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        profile: profileReducer,
        cart: cartReducer,
        category: categoryReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch