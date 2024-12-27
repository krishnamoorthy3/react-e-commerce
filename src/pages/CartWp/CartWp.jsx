import "./CartWp.css"
import imgd from "../../assets/iphone/1.jpg"
import { FaTrash } from "react-icons/fa";
import CartButton from "../CartButton/CartButton"
import ProductIncDec from "./ProductIncDec";
import PropTypes from "prop-types";
import Saveforlaterbtn from "../SaveforLaterbtn.jsx/Saveforlaterbtn";
const CartWp = ({IncDec}) => {
    return (
        <>
            <div className="row bg-white p-1 pt-3 mr-2">
                <div className="col-4">
                    <img src={imgd} alt="" className="w-100" />
                </div>
                <div className="col-8">
                    <div className="wish-content-wrapper">
                        <h5>SAMSUNG Galaxy S23 5G (Cream, 256 GB)  (8 GB RAM)</h5>
                        <div className="hp-disc-conte">
                            <p>$25199.1</p>
                            <p>$27999</p>
                            <p>-10%</p>
                        </div>
                        {IncDec && <ProductIncDec/>}
                        <div className="d-flex align-items-center gap-3 mt-4">
                            <button className="cart-btn"><FaTrash />Remove </button>
                            {IncDec?<Saveforlaterbtn/>:<CartButton />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
CartWp.propTypes={
    IncDec:PropTypes.bool.isRequired
}
export default CartWp
