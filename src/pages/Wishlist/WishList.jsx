
import CartWp from "../CartWp/CartWp";
import "./WishList.css"
const WishList = () => {
    return (
        <>
            <section className="my-5 vh-80">
                <div className="container">
                    <div>
                        <h3 className="ft-b">My Wishlist (3)</h3>

                        <div className="my-5">
                            <div className="row row-gap-3">
                                <div className="col-md-6">
                                    <CartWp IncDec={false} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WishList
