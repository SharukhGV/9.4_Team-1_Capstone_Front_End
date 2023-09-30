import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
  "pk_live_51NsFCIL72op192vmLS092JkFA0HCOUAHUvZfs9aw6nGLMkYqVoWLKZGi5oRcQgvMDLqUc2i7aWaWwgbrnVekf9gQ00SIRQub0v"
);
// import CheckoutForm from "./CheckoutForm";

export default function CheckoutFormMain(props) {


  function handleCheckout() {
    // const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
let amountDollarInteger = Math.ceil(props.grandTotal)
    fetch('/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amountDollarInteger }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("successfully checked out")
        // Handle the response, e.g., display a success message
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
    const options = {
        mode: 'payment',
        amount: props.grandTotal,
        currency: 'usd',
        // Fully customizable with appearance API.
      };

      

  return (

    <div>
        <div>
        </div>
        <div></div>
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm handleCheckout={handleCheckout}/>
    </Elements></div>
  );
}
