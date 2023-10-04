import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./success.css"
export default function SuccessPage({ emptyCart }) {
    
  const navigate = useNavigate();

  useEffect(() => {
    emptyCart();
    setTimeout(() => {
      navigate("/home");
    }, 5000);
  }, []);

  return <>
      <div style ={{margine:"auto"}} class="cardCheckmark">

          <div className="checkmark">✓</div>

  <h1>Success</h1> 
        <p>We received your purchase request;<br/> You will be Redirected to the Home Page!</p>
  </div>
  </>;
}
