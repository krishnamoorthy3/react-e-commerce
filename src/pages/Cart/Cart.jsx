import CartWp from "../CartWp/CartWp"
import CartPrice from "./CartPrice"
import "./Cart.css"

const Cart = () => {
    return (
        <>
            <section className="my-5 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="cart-wrapper">
                                <h3 className="ft-b">My Cart (3)</h3>
                                <div className="row my-4">
                                    <div className="col-12">
                                        <CartWp IncDec={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="save-wrapper">
                                <h3 className="ft-b">Saved For Later (3)</h3>
                                <div className="row my-4">
                                    <div className="col-12">
                                        <CartWp IncDec={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div>
                                <CartPrice/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart
