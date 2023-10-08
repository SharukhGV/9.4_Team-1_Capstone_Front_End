import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {v4 as uuid} from 'uuid';
import {Tooltip} from '@mui/material';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

import './checkoutForm.css';

export default function CheckoutForm(props) {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  function handleCheckout(props) {
    fetch('/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({amount: props.options.amount}),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response, e.g., display a success message
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // navigate('/success')
  }

  return (
    <div className='checkout-page'>
      <aside className='cart-view'>
        <h2>Shopping Cart</h2>
        <hr />
        {props.cart?.map((item,index) => (
          <div className='cart-item' key={uuid()}>
            <img
              src={item.thumbnail ? item.thumbnail : Empty}
              alt='tool thumbnail'
              className='cart-item-thumbnail'
              loading='lazy'
            />
            <aside
              className='cart-item-details'
              onClick={() => navigate(`/tools/${item.tool_id}`)}
            >
              <p className='item-name'>{item.name}</p>
              <p>${item.price}</p>
            </aside>
            <Tooltip title='Remove'>
              <DeleteIcon
                color='#3C415C'
                className='cart-item-delete'
                onClick={() => props.removeItem(index)}
              />
            </Tooltip>
          </div>
        ))}
        <span className='total'>
          Subtotal({props.cart.length} item{props.cart.length > 1 ? 's' : null}
          ): <b>${props.grandTotal.toFixed(2)}</b>
        </span>
      </aside>
      <form
        className='checkout-form'
        onSubmit={e => {
          e.preventDefault();
          handleCheckout();
        }}
      >
        <PaymentElement />
          <button
          onClick={()=>navigate('/success')}
            className='pay-btn'
            type='submit'
            disabled={!stripe || !elements}
          >
            Pay
          </button>
          <button className='secondary-btn' onClick={()=>navigate('/tools')}>
            Keep Shopping
          </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </div>
  );
}
