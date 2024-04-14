import { NavLink } from 'react-router-dom';
import imageUrl from '../logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className='p-3 bg-slate-900 text-white'>
      <div className='flex w-8/12 justify-between mx-auto'>
        <NavLink to={'/'} ><img src={imageUrl} alt="" className='w-[120px]'/></NavLink>
        <div className='flex gap-x-4 items-center text-[1.2rem]'>
          <NavLink to={'/'}><div>Home</div></NavLink>
          <NavLink to={'/cart'} >
              <div className='flex relative'>
                <FaShoppingCart fontSize='1.4rem'/>
                {
                  cartItems.length > 0  && 
                  (<div className='absolute bg-green-600 flex -top-2 -right-3 text-[1rem] animate-bounce
                  justify-center items-center w-5 h-5 rounded-full'>{cartItems.length}</div>)
                }
              </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;