import bannerimg from "/src/assets/banner.jpg"
import Productswiper from "../../components/Product-swiper/productswiper"
import "./Home.css"
import PropTypes from "prop-types"
const Home = ({items}) => {
    const Recommended=[]
    const Fashion=[]
    const electronics=[]
    
    return (
        <>
            <section className="mt-5">
                <div className="container">
                    <img src={bannerimg} alt="" width="100%" />
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <h4 className="mb-5"><strong>Recommended Products</strong></h4>
                    <Productswiper cat={"fashion"}/>
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <h4 className="mb-5"><strong> Products</strong></h4>
                    <Productswiper  cat={"fashion2"} />
                </div>
            </section>
            <section className="my-5">
                <div className="container">
                    <h4 className="mb-5"><strong> Best Seller</strong></h4>
                    <Productswiper  cat={"fashion3"} />
                </div>
            </section>
        </>
    )
}
Home.PropTypes={
    items:PropTypes.array
}
export default Home
