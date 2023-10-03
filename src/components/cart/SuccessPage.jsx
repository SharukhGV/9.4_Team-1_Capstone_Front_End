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
      <div class="cardCheckmark">

<div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
          <p className="checkmark">✓</p>

  <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
  </div></div>
  </>;
}
