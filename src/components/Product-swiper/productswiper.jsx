import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Wishlistbtn from '../../pages/WishListbtn/Wishlistbtn';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./productswiper.css"
import PropTypes from 'prop-types';
const Productswiper = ({ products,category }) => {
    return (
        <>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={30}
                slidesPerView={5}
                navigation
                breakpoints={{
                        300: {
                        slidesPerView: 1,
                        },
                        768: {
                        slidesPerView: 3,
                        },
                        1024: {
                        slidesPerView: 4,
                        },
                        1100: {
                        slidesPerView: 5,
                        },
                    }}
            >
                {products.map(item =>
                    <SwiperSlide key={item.id}>
                        <Link to={`/ProductDetail/${item.id}/${category}`} className="hp-swiper-c-wrapper wishlist-prp">
                            <div >
                                <img src={item.thumbnail} alt="" width="100%" />
                            </div>
                            <div className="hp-swiper-conte mt-3">
                                <h6 className='hp-swip-th-title'>{item.title}</h6>
                                <div className="hp-disc-conte">
                                    <p>${item.price - (item.price * item.discountPercentage / 100)}</p>
                                    <p>${item.price}</p>
                                    <p>-{item.discountPercentage}%</p>
                                </div>
                            </div>
                        </Link>
                        <Wishlistbtn/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}
Productswiper.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            thumbnail: PropTypes.string.isRequired,
        })
    ).isRequired,
    category: PropTypes.string.isRequired,
};
export default Productswiper