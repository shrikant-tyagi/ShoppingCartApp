import React from 'react'
import { MdDelete } from "react-icons/md";
import { removeItem } from '../redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

const CartCard = ({item}) => {

    const dispatch = useDispatch();

    function remove(){
      dispatch(removeItem(item));
      toast.error("Item removed");
    }

  return (
    <div className='border-b-2 border-slate-500 pb-2 flex gap-x-6 min-w-[450px]'>
        <div className='w-[300px]'><img src={item.image} alt=''/></div>
        <div className='flex flex-col justify-between'>
            <h2 className='font-semibold text-slate-900'>{item.title.substring(0,50)}</h2>
            <p className='text-slate-400'>{item.description.substring(0,100)}...</p>
            <div className='flex justify-between'>
                <p className='text-green-600'>${item.price}</p>
                <button onClick={remove} className='w-[30px] h-[30px] flex justify-center items-center
                rounded-full bg-red-300'><MdDelete color='#8B0000'/></button>
            </div>
        </div>
    </div>
  )
}

export default CartCard