import { useDispatch, useSelector } from "react-redux";
import { addItem , removeItem } from "../redux/Slices/CartSlice";
import toast from 'react-hot-toast';

const Product = ({item}) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  function remove(){
    dispatch(removeItem(item));
    toast.error("Item removed");
  }

  function add(){
    dispatch(addItem(item));
    toast.success("Added to Cart");
  }

  return (
    <div className="w-[270px] justify-between border-2 rounded-md text-[0.8rem]
    p-4 flex flex-col gap-y-4 shadow-md hover:scale-110 duration-200 transition-all">
      <div className="font-semibold text-xl">{item.title.substring(0,10)}</div>
      <div className="text-slate-400 text-[13px]">
        {item.description.substring(0,100)}
      </div>
      <img src={item.image} alt="" className="w-[150px] h-[200px] mx-auto"/>

      <div className="flex justify-between items-center">
        <div className="text-green-600 font-semibold">${item.price}</div>
        <div className="border-2 border-slate-900 py-1 px-3 rounded-3xl
         hover:text-white hover:bg-slate-900 font-semibold duration-300 transition-all">
          {
            cartItems.some(ele => ele.id === item.id) ? (<button onClick={remove} >Remove Item</button>) : (
              <button onClick={add}>Add to Cart</button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Product;
