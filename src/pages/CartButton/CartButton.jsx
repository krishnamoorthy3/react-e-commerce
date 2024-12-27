import { FaOpencart } from "react-icons/fa";
import PropTypes from "prop-types";
const CartButton = ({handelcart,category,id}) => {
    
    return (
        <>
            <button className="cart-btn" onClick={()=>handelcart(id,category)}>Add to Cart <FaOpencart/></button>
        </>
    )
}
CartButton.propTypes={
    handelcart:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired,
    category:PropTypes.string
}
export default CartButton
