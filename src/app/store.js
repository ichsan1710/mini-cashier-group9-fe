import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import productReducer from '../product/productSlice'
// import cartReducer from "../features/counter/cart/cartSlice"

export default configureStore({
    reducer: {
        // counter: counterReducer,
        product: productReducer,
        // cart: cartReducer
    },
})