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

export function editProducts(form){
    return async (dispatch) => {
        await axios.patch(`http://localhost:8001/edit-products/${form.id_product}`, form)
        dispatch(fetchProducts())

    }
}
export function createProducts(form){
    return async (dispatch) => {
        await axios.post(`http://localhost:8001/`, form)
        dispatch(fetchProducts())

    }
}

export default productSlice.reducer