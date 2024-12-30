import CartWp from "../CartWp/CartWp";
import CartPrice from "./CartPrice";
import "./Cart.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const Cart = ({ items, handelcart, cartitem ,localStorages,setCartitem}) => {
    const [totalBill,setTotalBill]=useState(0)
    const [totalDiscount,setTotalDiscount]=useState(0)

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
        setCartitem(filterdata)
    }
    const handelincDec=(id,qty)=>{
        const findp=cartitem.map(item=>
            item.id==id ?{...item,cartquantity:qty}: item
        )
        localStorages("cartitem",findp);
    }

    useEffect(() => {
        console.log(cartProducts); // For debugging
    
        // Function to calculate the total bill
        const handeltotalbill = () => {
            return cartProducts.reduce((acc, item) => {
                // Get the price after applying discount (if any) and add it to the total
                const priceAfterDiscount = item.price - (item.price * item.discountPercentage / 100);
                
                // Update accumulator object
                acc.totalprice += item.price * item.cartquantity;  // Regular price multiplied by quantity
                acc.discountedprice += priceAfterDiscount * item.cartquantity; // Discounted price multiplied by quantity
    
                return acc;
            }, { totalprice: 0, discountedprice: 0 }); // Initial accumulator is an object with totalprice and discountedprice
        };
    
        const totalbillamt = handeltotalbill();
        console.log(totalbillamt);
        
        console.log(totalbillamt); // Log the total bill object with both regular and discounted prices
    
        // Update state with the total amount and discounted amount
        setTotalDiscount(totalbillamt.discountedprice); // Assuming you want to set the discounted price as total
        setTotalBill(totalbillamt.totalprice); // Assuming you want to set the discounted price as total
    
    }, [cartitem, items,cartProducts]); // Recalculate when cart items or product details change
    
    return (
        <>  {
            cartProducts.length ?
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cart-wrapper">
                                <h3 className="ft-b">My Cart ({cartProducts.length})</h3>
                                <div className="row my-4 row-gap-3">
                                    {cartProducts.map(product => (
                                        <div className="col-12 margin-cart" key={product.id}>
                                            <CartWp 
                                                IncDec={true} 
                                                product={product} 
                                                handelcart={handelcart} 
                                                handelremove={handelremovecart}
                                                handelincDec={handelincDec}

                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <CartPrice totalBill={totalBill} totalDiscount={totalDiscount} totalproduct={cartitem.length}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            :
            <div className="no-prod-wrapper">
                <h1>No Product</h1>
            </div>
        }
            
        </>
    );
};

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    cartitem: PropTypes.array.isRequired,
    handelcart: PropTypes.func.isRequired,
    localStorages: PropTypes.func.isRequired,
    setCartitem:PropTypes.func
};

export default Cart;
