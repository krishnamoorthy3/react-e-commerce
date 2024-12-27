import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import FilterComp from "./FilterComp";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css"
const Product = ({ items }) => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const productset = () => {
            const proitem = items.filter(
                (item) =>
                    item.category.toLowerCase().includes(id) ||
                    item.description.toLowerCase().includes(id)
            );
            setProduct(proitem);
        };
        productset();
    }, [id, items]); // Add dependencies to ensure useEffect runs when id or items change

    

    return (
        <>  
        {product.length &&<FilterComp setProduct={setProduct} product={product}/>}
            
            <section className="my-5">
                <div className="container">
                    <div className="row row-gap-2">
                        {product.length > 0 ? (
                            product.map((item) => (
                                <div className="col-md-3 p-4" key={item.id}>
                                    <Link to={`/ProductDetail/${item.id}/${id}`} className="hp-swiper-c-wrapper">
                                        <div>
                                            <img src={item.thumbnail} alt={item.title} width="100%" />
                                        </div>
                                        <div className="hp-swiper-conte mt-3">
                                            <h6 className="hp-swip-th-title">{item.title}</h6>
                                            <div className="hp-disc-conte">
                                                <p>
                                                    $
                                                    {(
                                                        item.price -
                                                        (item.price * item.discountPercentage) / 100
                                                    ).toFixed(2)}
                                                </p>
                                                <p>${item.price.toFixed(2)}</p>
                                                <p>-{item.discountPercentage}%</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="nodroduct-wrap">
                                <h3>No Product Found</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

Product.propTypes = {
    items: PropTypes.array.isRequired,
};

export default Product;
