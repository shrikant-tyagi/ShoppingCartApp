import {AiTwotoneDelete} from 'react-icons/ai'
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({item , itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }

  return <div>
    <div>
      <div>
        <img src={item.image} alt=''/>
      </div>

      <div>
        <h1>{item.title}</h1>
        <h1>{item.description}</h1>
      </div>

      <div>
        <p>${item.price}</p>
        <button onClick={removeFromCart}>
          <AiTwotoneDelete/>
        </button>
      </div>
    </div>
  </div>;
};

export default CartItem;
