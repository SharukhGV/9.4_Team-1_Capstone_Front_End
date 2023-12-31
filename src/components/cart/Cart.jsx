import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import CartItem from './CartItem';
import './cart.css';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
import {useNavigate} from 'react-router-dom';
const stripePromise = loadStripe(
  'pk_live_51NsFCIL72op192vmLS092JkFA0HCOUAHUvZfs9aw6nGLMkYqVoWLKZGi5oRcQgvMDLqUc2i7aWaWwgbrnVekf9gQ00SIRQub0v'
);

export default function Cart({items, handleClose, removeItem, setGrandTotal}) {
  // const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);
  let price = 0;
  const navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
    setGrandTotal(totalPrice);
    setTotal(totalPrice);
  }, [items]);
  
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
      {/* <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements> */}
      <h4 style={{margin: 0}}>Cart</h4>
      <br />
      <div className='adiv'>
        {items.length > 0 ? (
          items.map((item, i) => {
            price += item.price;
            return (
              <aside key={uuid()}>
                <CartItem tool={item} index={i} removeItem={removeItem} />
              </aside>
            );
          })
        ) : (
          <aside>
            <h4>Cart is empty</h4>
            <Link to='/tools'>Browse items now</Link>
          </aside>
        )}

        {items.length > 0 && (
          <div>
            <h5>Total - ${total.toFixed(2)}</h5>
            <Link to='/tools'>Browse items now</Link>
            <Link
              to='/checkout'
              style={{textDecoration: 'none', color: '#388E3C'}}
            >
              Go to Checkout
            </Link>{' '}
          </div>
        )}
      </div>
    </div>
  );
}
