
const CartPrice = () => {
    return (
        <>
            <div className="bg-white pr-detail-wrapper">
                <div className="border-b-dot p-3">
                    <h4 className="ft-b">Price details</h4>
                </div>
                <div className="p-3 prd-pf">
                    <p>Price (7 items)</p>
                    <p>₹12,310</p>
                </div>
                <div className="p-3 prd-pf">
                    <p>Discount</p>
                    <p className="ft-c-g">− ₹7,605</p>
                </div>
                <div className="p-3 prd-pf border-b-dot">
                    <p>Delivery Charges</p>
                    <p><span className="txt-dash">₹400</span> <span className="ft-c-g">Free</span></p>
                </div>
                <div className="p-3 prd-pf border-b-dot">
                    <p>Total Amount</p>
                    <p>₹4,537</p>
                </div>
                <div className=" p-3">
                    <h6 className="ft-b">You will save ₹7,773 on this order</h6>
                </div>
            </div>
        </>
    )
}

export default CartPrice
