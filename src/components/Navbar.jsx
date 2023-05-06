import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
    const navigate = useNavigate()
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(())
    // }, [])

  return (
    <div className="flex flex-row gap-10 justify-center items-center bg-black text-white h-20">
        <button
            onClick={() => {
                navigate('/')
            }}
            className="hover:font-semibold"
            >
                Home
            </button>
        <button
            onClick={() => {
                navigate('/admin')
            }}
            className="hover:font-semibold"
            >
                Transaction
            </button>
        <button
            onClick={() => {
                navigate('/products')
            }}
            className="hover:font-semibold"
            >
                Products
            </button>
        
    </div>
  )
}

export default Navbar