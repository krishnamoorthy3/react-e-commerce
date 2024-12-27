import PropTypes from "prop-types"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
const ProductIncDec = ({cartquantity,id,handelincDec}) => {
    const [cartquantaty,setCartQuantaty]=useState(cartquantity)
    const notify = (val) => toast(val);
    const handelDec=()=>{
            if(cartquantaty>1){
                    const newQty = cartquantaty - 1;
                    setCartQuantaty(newQty) 
                    handelincDec(id, newQty);
            }else{
                notify("Min quantity is 1")
            }
    }
    const handelInc=()=>{
            if(cartquantaty<10){
                    const newQty = cartquantaty + 1;
                    setCartQuantaty(newQty) 
                    handelincDec(id, newQty);
            }else{
                notify("Max quantity is 10")
            }
    }
    const handelonChange=(e)=>{
        if(e.target.value*1 <10 &&e.target.value*1>1){
            const newQty = e.target.value*1;
                    setCartQuantaty(newQty) 
                    handelincDec(id, newQty);
        }else{
            notify("Enter quantity between 1 and 10")
        }
    }
    return (
        <>
            <div className="cart-incdec-wrapper mt-4">
                <button className="cart-incdec-btn" onClick={handelDec}
                >-</button>
                <input type="number" className="cartinc-inp" value={cartquantaty} max="10" min="1" onChange={(e)=>handelonChange(e)}/>
                <button className="cart-incdec-btn" onClick={handelInc}>
                    +</button>
                <ToastContainer />
            </div>
        </>
    )
}
ProductIncDec.propTypes={
    cartquantity:PropTypes.number,
    id:PropTypes.number,
    handelincDec:PropTypes.func
}
export default ProductIncDec
