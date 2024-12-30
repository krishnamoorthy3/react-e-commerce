import "./CartWp.css"
import { FaTrash } from "react-icons/fa";
import CartButton from "../CartButton/CartButton"
import ProductIncDec from "./ProductIncDec";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const CartWp = ({IncDec,handelcart,product,handelremove,handelincDec}) => {
    return (
        <>
            <div className="row bg-white p-1 pt-3 ">
                <div className="col-md-4 col-12">
                    <Link to={`/ProductDetail/${product.id}/${product.categoryref}`} className="wish-content-wrapper-link"><img src={product.thumbnail} alt="" className="w-100" /></Link>
                    
                </div>
                <div className="col-md-8 col-12">
                    <div className="wish-content-wrapper">
                        <Link to={`/ProductDetail/${product.id}/${product.categoryref}`} className="wish-content-wrapper-link">
                            <h5>{product.title}</h5>
                            <div className="hp-disc-conte">
                                <p>${(product.price-(product.price*product.discountPercentage/100))}</p>
                                <p>${product.price}</p>
                                <p>-{product.discountPercentage}%</p>
                            </div>
                        </Link>
                        {IncDec && <ProductIncDec cartquantity={product.cartquantity} id={product.id} handelincDec={handelincDec} />}
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <button className="cart-btn" onClick={()=>handelremove(product.id)}><FaTrash />Remove </button>
                            {!IncDec&&<CartButton handelcart={handelcart} id={product.id} category={product.categoryref} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
CartWp.propTypes={
    IncDec:PropTypes.bool.isRequired,
    handelcart:PropTypes.func,
    handelincDec:PropTypes.func,
    handelremove:PropTypes.func,
    product:PropTypes.object,
}
export default CartWp
