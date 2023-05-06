import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createProducts, editProducts } from '../product/productSlice'

export default function Modal({ visible, onClose, initialData, }) {
    const dispatch = useDispatch()

    const [ form, setForm ] = useState({})

    const handleOnClose = (e) => {
        if(e.target.id === 'container') {
            onClose()
        }
    }
    const handleOnClick = (e) => {
        if(!initialData.id_product) {
            dispatch(createProducts(form))
        }else {
            dispatch(editProducts(form))
        }
        onClose()
    }

    useEffect(() => {
       setForm(initialData)
    }, [initialData])

     if(!visible) {
        return null
     }

    return (
        <div 
        id='container'
        onClick={handleOnClose} 
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
             <div className="bg-white p-2 rounded w-72">
                <h1 className="font-semibold text-center text-xl text-gray-700">
                    {!initialData.id_product ? "Add Product" : "Edit Product"}
                </h1>
            <p className="text-center text-gray-700 mb-5"></p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="name"
            value={form.name}
            onChange={(e) => {
                setForm({...form, name: e.target.value})
            }}
          />
          <input
            type="number"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="price"
            value={form.price}
            onChange={(e) => {
                setForm({...form, price: e.target.value})
            }}
          />
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            placeholder="category"
            value={form.category}
            onChange={(e) => {
                setForm({...form, category: e.target.value})
            }}
        />        
        </div>

        <div className="text-center">
          <button onClick={handleOnClick} className="px-5 py-2 bg-gray-700 text-white rounded">
            {!initialData.id_product ? "Add" : "Edit"}
          </button>
        </div>
      </div>
    </div>
    )
}