import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast';
import {add , remove} from '../redux/Slices/CartSlice'

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
     dispatch(add(post));
     toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className='flex flex-col items-center justify-between
    hover:scale-110 transition-all duration-300 ease-in gap-4 h-[400px] border-2 border-slate-200 rounded-md py-3'>

      <div className='text-gray-700 font-semibold text-lg text-left
      turncate w-40 mt-1'>
        <p>{post.title.substr(0,10)}</p>
      </div>

    <div>
      <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
        {post.description.split(" ").slice(0,10).join(" ")}
      </p>
    </div>

    <div className=''>
      <img src={post.image} alt='' className='h-[180px] w-full'/>
    </div>
    
    
    <div className='flex justify-between gap-12'>
      <div className='text-green-600 font-semibold'> 
        ${post.price}
      </div>

      <button className='text-gray-700 border-2 border-gray-700 rounded-full
      font-semibold text-[12px] px-3 uppercase hover:bg-gray-700
      hover:text-white transition-all duration-300 ease-in'>
        {
          cart.some((p) => p.id === post.id) ? 
          <p onClick={removeFromCart}>Remove Item</p> : 
          <p onClick={addToCart}>Add to Cart</p>
        }
      </button>
    </div>

    </div>
  )
}

export default Product