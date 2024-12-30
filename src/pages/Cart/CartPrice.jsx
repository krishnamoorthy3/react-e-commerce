import PropTypes from "prop-types"
const CartPrice = ({totalBill,totalDiscount,totalproduct}) => {
    return (
        <>
            <div className="bg-white pr-detail-wrapper">
                <div className="border-b-dot p-3">
                    <h4 className="ft-b">Price details</h4>
                </div>
                <div className="p-3 prd-pf">
                    <p>Price ({totalproduct} items)</p>
                    <p>₹{totalBill}</p>
                </div>
                <div className="p-3 prd-pf">
                    <p>Discount</p>
                    <p className="ft-c-g">− ₹{Math.floor(totalBill-totalDiscount)}</p>
                </div>
                <div className="p-3 prd-pf border-b-dot">
                    <p>Delivery Charges</p>
                    <p><span className="txt-dash">₹400</span> <span className="ft-c-g">Free</span></p>
                </div>
                <div className="p-3 prd-pf border-b-dot">
                    <p>Total Amount</p>
                    <p>₹{totalBill-Math.floor(totalBill-totalDiscount)}</p>
                </div>
                <div className=" p-3">
                    <h6 className="ft-b">You will save ₹{Math.floor(totalBill-totalDiscount)} on this order</h6>
                </div>
            </div>
        </>
    )
}
CartPrice.propTypes={
    totalBill:PropTypes.number,
    totalDiscount:PropTypes.number,
    totalproduct:PropTypes.number,
}
export default CartPrice
