
import { useEffect } from "react"

export default function SuccessPage({emptyCart}){

useEffect(()=>{
    emptyCart()


},[])

return(

<>Your Payment was successful!</>

)


}