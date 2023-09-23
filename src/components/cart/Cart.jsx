import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
export default function Cart({items}) {
  const [total, setTotal] = useState(0);
  let price = 0;
  return (
    <div className='cart'>
      <h3 style={{margin: 0}}>Your Cart</h3>
      <hr></hr>

      {items.length > 0 ? (
        items.map(item => {
          price += item.price;
          setTotal(price);
          return <aside>{console.log(item)}</aside>;
        })
      ) : (
        <aside>
          <h4>Cart is empty</h4>
          <Link>Browse items now</Link>
        </aside>
      )}
      <hr></hr>
      <p className='cart-total'>Total:{total}</p>
    </div>
  );
}
