import {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import CartItem from './CartItem';
import './cart.css';
export default function Cart({items, handleClose}) {
  const [total, setTotal] = useState(0);
  let price = 0;

  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = event => {
      if (!ref.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <div className='cart' ref={ref}>
      <h3 style={{margin: 0}}>Your Cart</h3>
      <hr></hr>

      {items.length > 0 ? (
        items.map(item => {
          price += item.price;
          // setTotal(price);
          return (
            <aside key={uuid()}>
              <CartItem tool={item} />
            </aside>
          );
        })
      ) : (
        <aside>
          <h4>Cart is empty</h4>
          <Link>Browse items now</Link>
        </aside>
      )}
      <hr></hr>
      <button>Checkout</button>
      <p className='cart-total'>Total:{price}</p>
    </div>
  );
}
