import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logoImage from '../logo.png'

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="flex flex-row justify-between 
    items-center h-20 max-w-6xl mx-auto text-white">
      
      <div className='ml-5'>
        <NavLink to='/'>
            <img src={logoImage} alt='product'
              className='h-14'
            />
        </NavLink>
      </div>

      <div className='flex items-center my-auto '>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        
        <NavLink to='/cart'>
          <div className='relative w-[50px] h-[50px]  flex justify-center items-center baseline-center'>
            {
              cart.length > 0  && 
              <span className='absolute -top-[0.01rem] -right-[0.01rem] bg-green-600
              w-5 animate-bounce h-5 rounded-full flex justify-center
              items-center text-white'>
                {cart.length}
              </span>
            }
            <FaShoppingCart className='text-2xl'/>
          </div>
        </NavLink>  
      </div>

    </div>);
};

export default Navbar;