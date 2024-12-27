import { useParams } from "react-router-dom"
import ProductDSwip from "./ProductDSwip"
import Productswiper from "/src/components/Product-swiper/productswiper.jsx"; 
import brndimg from "/src/assets/iphone/b.webp"
import "./ProductDetail.css"
import PropTypes from "prop-types";
import CartButton from "../CartButton/CartButton"
const ProductDetail = ({ items ,handelcart}) => {
    const { id, cat } = useParams()
    const releatedproduct = items.filter(item => (item.id != id && item.category.includes(cat) || item.id != id && item.description.includes(cat)));
    const productdetail = items.filter(item => item.id == id)
    
    return (
        <>
            <section className="my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="proddetail-of-y"> <ProductDSwip productDetail={productdetail[0].images}  /></div>
                        </div>
                        <div className="col-md-7">
                            {productdetail.map(item =>
                                <div className="product-detail-cont-wrapper" key={item.id}>
                                    <h4>{item.title}</h4>
                                    <div className="hp-disc-conte">
                                        <p>${item.price - (item.price * item.discountPercentage / 100)}</p>
                                        <p>${item.price}</p>
                                        <p>-{item.discountPercentage}%</p>
                                    </div>
                                    <div className="d-flex align-items-center mt-5 gap-3">
                                        <img src={brndimg} alt="" width="75px" />
                                        <p>
                                            1 year warranty for phone and 1 year warranty for in Box Accessories.</p>
                                    </div>
                                    <div className="mt-5">
                                        <CartButton category={cat} id={item.id} handelcart={handelcart}/>
                                    </div>
                                    <div className="row my-5 align-items-center">
                                        <div className="col-md-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <h5>Color
                                                    </h5>
                                                </div>
                                                <div className="col-8">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img src={item.thumbnail} alt="" className="w-100" />
                                                        </div>
                                                        <div className="col-4">
                                                            <img src={item.thumbnail} alt="" className="w-100" />
                                                        </div>
                                                        <div className="col-4">
                                                            <img src={item.thumbnail} alt="" className="w-100" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <h5>Storage
                                                    </h5>
                                                </div>
                                                <div className="col-8">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <p>128</p>
                                                        </div>
                                                        <div className="col-4">
                                                            <p>256</p>
                                                        </div>
                                                        <div className="col-4">
                                                            <p>512</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row my-4">
                                            <div className="col-3 ">
                                                <h6>Highlights</h6>
                                            </div>
                                            <div className="col-9">
                                                <ul>
                                                    {item.highlights.map((val,index)=>
                                                        <li key={"H"+index}><p>{val}</p></li>
                                                    )}
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row my-4">
                                            <div className="col-3">
                                                <h6>Description</h6>
                                            </div>
                                            <div className="col-9">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3>Specifications</h3>
                                        {Object.entries(item.spec).map(([section, features], sectionIndex)=>(
                                            <div className="my-4" key={sectionIndex}>
                                                <h5>{section}</h5>
                                                {Object.entries(features).map(([key, value], featureIndex) => (
                                                    <div className="row mt-4" key={featureIndex}>
                                                    <div className="col-3">
                                                        <p>{key}:</p>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>{value}</p>
                                                    </div>
                                                </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-5 py-5">
                <div className="container">
                    <h4 className="my-3">Similar Products</h4>
                    <Productswiper products={releatedproduct} category={cat} />
                </div>
            </section>
        </>
    )
}
ProductDetail.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            category: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired,
    handelcart:PropTypes.func
}
export default ProductDetail
