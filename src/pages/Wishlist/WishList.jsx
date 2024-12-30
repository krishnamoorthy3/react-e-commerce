
import CartWp from "../CartWp/CartWp";
import "./WishList.css"
import PropTypes from "prop-types";
const WishList = ({ wishlist, items, localStorages, setWishList,handelcart }) => {
    const getWishItems = () => {
        return wishlist.map(wishitem => {
            const productDetails = items.find(item => item.id === wishitem.id);
            return productDetails
                ? {
                    ...productDetails,
                    cartquantity: wishitem.cartquantity,
                    categoryref: wishitem.category
                }
                : null;
        }).filter(item => item !== null);
    };
    
    const WishListProduct = getWishItems();

    const handelwishlistremove=(id)=>{
        const updateditem=wishlist.filter(item=>item.id!=id)
        localStorages("wishlist",updateditem);
        setWishList(updateditem)
    }
    return (
        <>
            {WishListProduct.length
                ?
                <section className="my-5 ">
                <div className="container">
                    <div>
                        <h3 className="ft-b">My Wishlist ({wishlist.length})</h3>

                        <div className="my-5">
                            <div className="row row-gap-3">
                                {WishListProduct.map(product => (
                                    <div className="col-md-6" key={product.id}>
                                        <CartWp
                                            IncDec={false}
                                            product={product}
                                            handelremove={handelwishlistremove}
                                            handelcart={handelcart}
                                        />
                                    </div>
                                ))}
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
    )
}
WishList.propTypes = {
    wishlist: PropTypes.array,
    items: PropTypes.array,
    localStorages: PropTypes.func,
    setWishList: PropTypes.func,
    handelcart: PropTypes.func,

}
export default WishList
