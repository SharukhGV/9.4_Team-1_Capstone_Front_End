import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {Elements} from '@stripe/react-stripe-js';
const stripePromise = loadStripe(
  'pk_live_51NsFCIL72op192vmLS092JkFA0HCOUAHUvZfs9aw6nGLMkYqVoWLKZGi5oRcQgvMDLqUc2i7aWaWwgbrnVekf9gQ00SIRQub0v'
);
// import CheckoutForm from "./CheckoutForm";

export default function CheckoutFormMain(props) {
  const amountInCents = Math.round(props.grandTotal * 100);

  const options = {
    mode: 'payment',
    amount: amountInCents,
    currency: 'usd',
  };

  return (
    <div>
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm cart={props.cart} grandTotal={props.grandTotal} removeItem={props.removeItem}/>
      </Elements>
    </div>
  );
}
