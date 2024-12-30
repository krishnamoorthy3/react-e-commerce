import bannerimg from "/src/assets/banner.jpg";
import Productswiper from "../../components/Product-swiper/productswiper";
import "./Home.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import mobile from "/src/assets/index-page/mobile.png"
import bike from "/src/assets/index-page/bike.png"
import fashion from "/src/assets/index-page/fashion.png"
import appliances from "/src/assets/index-page/appliances.png"
import furniture from "/src/assets/index-page/furniture.png"
import electronic from "/src/assets/index-page/electronic.png"

const Home = ({ items }) => {
    const Recommended = [];
    const Fashion = [];
    const electronics = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i]; // Access individual item
        if (i < 10) {
            Recommended.push(item);
        } else if (
            item.category.toLowerCase().includes("fashion") ||
            item.description.toLowerCase().includes("fashion")
        ) {
            Fashion.push(item);
        } else if (
            item.category.toLowerCase().includes("electronics") ||
            item.description.toLowerCase().includes("electronics")
        ) {
            electronics.push(item);
        }
        if (Fashion.length >= 10 && electronics.length >= 10) {
            break;
        }
    }
    const category=[
        {
            category:"mobile",
            img:mobile,
            title:"Mobile"
        },
        {
            category:"bikes",
            img:bike,
            title:"Bikes"
        },
        {
            category:"electronics",
            img:electronic,
            title:"Electronics"
        },
        {
            category:"fashion",
            img:fashion,
            title:"Fashion"
        },
        {
            category:"furniture",
            img:furniture,
            title:"Home & Furniture"
        },
        {
            category:"electronics",
            img:appliances,
            title:"Appliances"
        },
    ]
    return (
        <>  
            <section className="my-3">
                <div className="container">
                    <div className="row row-gap-3 cat-sec-wrapper">
                        {category.map((val,index)=>
                            <div className="col-lg-2 col-md-4 col-6 text-center" key={index}>
                                <Link to={`/product/${val.category}`} className="hcat-w">
                                    <img src={ val.img } alt="" />
                                    <h6>{val.title}</h6>
                                </Link>
                            </div>
                        )}
                        
                        
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <img src={bannerimg} alt="" width="100%" />
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <h4 className="mb-5">
                        <strong>Recommended Products</strong>
                    </h4>
                    <Productswiper products={Recommended} category="mobile" wishlistb={false} />
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <h4 className="mb-5">
                        <strong>Fashion Products</strong>
                    </h4>
                    <Productswiper products={Fashion} category="fashion" wishlistb={false}/>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <h4 className="mb-5">
                        <strong>Best Sellers</strong>
                    </h4>
                    <Productswiper products={electronics} category="electronics" wishlistb={false}/>
                </div>
            </section>
        </>
    );
};

Home.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            thumbnail: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Home;
