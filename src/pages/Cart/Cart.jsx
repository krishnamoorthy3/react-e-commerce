import CartWp from "../CartWp/CartWp";
import CartPrice from "./CartPrice";
import "./Cart.css";
import PropTypes from "prop-types";
import { useState } from "react";
const Cart = ({ items, handelcart, cartitem ,localStorages}) => {
    const [saveforlaterr,setSaveforlater]=useState(JSON.parse(localStorage.getItem("saveforlaterr"))||[])
    const handelSaveforlater=()=>{

    }
    const getCartItems = () => {
        return cartitem.map(cartProduct => {
            const productDetails = items.find(item => item.id === cartProduct.id);
            return productDetails
                ? { 
                    ...productDetails, 
                    cartquantity: cartProduct.cartquantity, 
                    categoryref: cartProduct.category 
                    }
                : null;
        }).filter(item => item !== null);
    };

    const cartProducts = getCartItems();
    const handelremovecart=(id)=>{
        const filterdata=cartitem.filter(item=>item.id!==id)
        localStorages("cartitem",filterdata);
    }
    const handelincDec=(id,qty)=>{
        const findp=cartitem.map(item=>
            item.id==id ?{...item,cartquantity:qty}: item
        )
        localStorages("cartitem",findp);
        
    }
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cart-wrapper">
                                <h3 className="ft-b">My Cart ({cartProducts.length})</h3>
                                <div className="row my-4">
                                    {cartProducts.map(product => (
                                        <div className="col-12" key={product.id}>
                                            <CartWp 
                                                IncDec={true} 
                                                product={product} 
                                                handelcart={handelcart} 
                                                handelremovecart={handelremovecart}
                                                handelincDec={handelincDec}
                                                handelSaveforlater={handelSaveforlater}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="save-wrapper">
                                <h3 className="ft-b">Saved For Later ({saveforlaterr.length})</h3>
                                <div className="row my-4">
                                    <div className="col-12">
                                        {/* <CartWp IncDec={false} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <CartPrice />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    cartitem: PropTypes.array.isRequired,
    handelcart: PropTypes.func.isRequired,
    localStorages: PropTypes.func.isRequired,
};

export default Cart;
