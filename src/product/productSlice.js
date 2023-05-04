import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const productSlice = createSlice({
    name: "product",
    initialState: {
        productList: [],
        id_product: "",
        name: "",
        price: "",
        category: ""
    },
    reducers: {
        setProductList: (state, action) => {
            state.productList = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
})

export const { setProductList, setProduct } = productSlice.actions


export function fetchProducts(){
    return async (dispatch) => {
        let response = await axios.get("http://localhost:8001/products")
        dispatch(setProductList(response.data))
    }
}

export default productSlice.reducer