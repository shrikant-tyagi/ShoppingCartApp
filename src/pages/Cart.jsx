import { Link } from "react-router-dom";
import CartItem from '../components/CartItem'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log(cart);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(() => {
      setTotalAmount(cart.reduce((acc,curr) => acc+curr.price , 0));
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (<div>
          {
            cart.map((item,index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))
          }
        </div>) : 
        (<div>
           <h1>Cart Empty</h1>
           <Link to='/'>
            <button>
               Shop Now
            </button>
           </Link>
        </div>)
      }

      <div>
        <div>
          <div>Your Cart</div>
          <div>Your Summary</div>
          <div>
            <sapn>Total Items : {cart.length}</sapn>
          </div>
        </div>

        <div>
          <p>Total Amount : ${totalAmount}</p>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
