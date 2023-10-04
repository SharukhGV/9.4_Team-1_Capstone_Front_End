import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function CheckoutForm(props) {
    // const { emptyCart } = props;

  const stripe = useStripe();
  const elements = useElements();
// const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (elements == null) {
//       return;
//     }

//     // Trigger form validation and wallet collection
//     const {error: submitError} = await elements.submit();
//     if (submitError) {
//       // Show error to your customer
//       setErrorMessage(submitError.message);
//       return;
//     }

//     // Create the PaymentIntent and obtain clientSecret from your server endpoint
//     const res = await fetch('/create-intent', {
//       method: 'POST',
//     });

//     const {client_secret: clientSecret} = await res.json();

//     const {error} = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       clientSecret,
//       confirmParams: {
//         return_url: 'https://example.com/order/123/complete',
//       },
//     });

//     if (error) {
//       // This point will only be reached if there is an immediate error when
//       // confirming the payment. Show error to your customer (for example, payment
//       // details incomplete)
//       setErrorMessage(error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

// const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     if (!stripe || !elements) {
//       return;
//     }
  
//     const cardElement = elements.getElement(CardElement);
  
//     // Fetch the PaymentIntent client secret from the backend
//     const res = await fetch('/create-intent', { method: 'POST' });
//     const { clientSecret } = await res.json();
  
//     // Confirm the payment with the client secret
//     const { error } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//       },
//     });
  
//     if (error) {
//       console.error(error);
//     } else {
//       // Payment succeeded
//       console.log('Payment Success!');
//     }
//   };
//   function handleCheckout() {
//     const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

//     fetch('/checkout', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: totalAmount }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }



function handleCheckout(props) {
    // const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: props.options.amount }),
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
    <form onSubmit={(e) => {
        e.preventDefault(); 
        handleCheckout();
    //    emptyCart();
    }}>
      <PaymentElement />
      <Link to="/success"><button type="submit" disabled={!stripe || !elements}>
        Pay
      </button></Link>
      {/* Show error message to your customers */}
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
