


export default function CartItem({tool}){
    return (
        <div className='cart-item'>
            <span>{tool.name}</span>
            <span>{tool.price}</span>
        </div>
    )
}