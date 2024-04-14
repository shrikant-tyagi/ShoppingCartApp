import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import { clear } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const [price,setPrice] = useState(0);

  function calcPrice(){
      let sum = 0;
      cartItems.forEach(element => {
         sum+=element.price;
      });
      setPrice(sum);
  }

  function checkout(){
    dispatch(clear());
    toast.success("Items Checked Out Successfully");
  }

  useEffect(() => {
    calcPrice();
    // eslint-disable-next-line
  },[cartItems]);

  return (
    <div>
      {
        cartItems.length === 0 ? (<div className="flex flex-col gap-y-2 justify-center h-[calc(100vh-150px)] items-center">
           <div className="text-xl font-semibold">Card is Empty</div>
           <NavLink to={'/'} className='bg-green-600 p-2 rounded-md text-xl'>Add Items</NavLink>
         </div>) : (
          <div className="flex w-10/12 p-10 mx-auto gap-x-[100px] h-fit flex-wrap lg:flex-nowrap">
            <div className="flex flex-wrap justify-between gap-y-10 w-1/2">
                {
                  cartItems.map(item => {
                    return <CartCard key={item.id} item={item}/>
                  })
                }
            </div>
            
            <div className="flex flex-col w-full lg:w-1/2 pt-10 justify-between max-h-[calc(100vh-200px)] gap-y-8">
              <div className="text-green-600 font-semibold">
                <h2 className="text-xl ">Your Cart</h2>
                <p className="text-3xl uppercase ">Summary</p>
                <div className="text-slate-900">Total Items: {cartItems.length}</div>
              </div>
              <div>
                <div>Total Amount : ${price.toFixed(2)}</div>
                <button className="bg-green-600 w-full p-2 text-white font-semibold rounded-md"
                onClick={checkout}>Checkout Now</button>
              </div>
            </div>
          </div>
         )
      }
    </div>
  );
};

export default Cart;
