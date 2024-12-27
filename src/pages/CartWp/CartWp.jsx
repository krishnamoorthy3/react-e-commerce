import "./CartWp.css"
import { FaTrash } from "react-icons/fa";
import CartButton from "../CartButton/CartButton"
import ProductIncDec from "./ProductIncDec";
import PropTypes from "prop-types";
import Saveforlaterbtn from "../SaveforLaterbtn.jsx/Saveforlaterbtn";
const CartWp = ({IncDec,handelcart,product,handelremovecart,handelincDec}) => {
    return (
        <>
            <div className="row bg-white p-1 pt-3 mr-2">
                <div className="col-4">
                    <img src={product.thumbnail} alt="" className="w-100" />
                </div>
                <div className="col-8">
                    <div className="wish-content-wrapper">
                        <h5>{product.title}</h5>
                        <div className="hp-disc-conte">
                            <p>${(product.price-(product.price*product.discountPercentage/100))}</p>
                            <p>${product.price}</p>
                            <p>-{product.discountPercentage}%</p>
                        </div>
                        {IncDec && <ProductIncDec cartquantity={product.cartquantity} id={product.id} handelincDec={handelincDec} />}
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <button className="cart-btn" onClick={()=>handelremovecart(product.id)}><FaTrash />Remove </button>
                            {IncDec?<Saveforlaterbtn/>:<CartButton handelcart={handelcart}id={product.id} category={product.categoryref} />}
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
    handelremovecart:PropTypes.func,
    product:PropTypes.object
}
export default CartWp
