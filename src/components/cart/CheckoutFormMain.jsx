import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
  "pk_live_51NsFCIL72op192vmLS092JkFA0HCOUAHUvZfs9aw6nGLMkYqVoWLKZGi5oRcQgvMDLqUc2i7aWaWwgbrnVekf9gQ00SIRQub0v"
);
// import CheckoutForm from "./CheckoutForm";

export default function CheckoutFormMain(props) {


//   function handleCheckout() {
//     // const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
//     fetch('/checkout', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount: props.grandTotal }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Handle the response, e.g., display a success message
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }
const amountInCents = Math.round(props.grandTotal * 100)

    const options = {
        mode: 'payment',
        amount: amountInCents,
        currency: 'usd',
        // Fully customizable with appearance API.
      };

      

  return (

    <div>
        <div>
        </div>
        <div></div>
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements></div>
  );
}
