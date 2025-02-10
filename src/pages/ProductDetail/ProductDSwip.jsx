import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./ProductDswip.css"
import PropTypes from 'prop-types';
import Wishlistbtn from "../WishListbtn/Wishlistbtn"
import ReactImageMagnify from 'react-image-magnify';
const ProductDSwip = ({ productDetail, handelWishlist, id, category, wishlistbtncolor }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // Update window width on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Update window width on resize
        };

        window.addEventListener("resize", handleResize);

        // Cleanup listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    console.log(windowWidth);

    return (
        <>
            <div className="row ">
                <div className="col-md-2">
                    <Swiper
                        modules={[Thumbs]}
                        watchSlidesProgress
                        onSwiper={setThumbsSwiper}
                        slidesPerView={productDetail.length}
                        className={windowWidth >= 768 ? "swiper-vertical" : "swiper-horizontal"}
                        id='thumb-swip-img'
                        breakpoints={{
                            300: {
                                slidesPerView: 5,
                            },
                            370: {
                                slidesPerView: 5,

                            },
                            768: {
                                slidesPerView: productDetail.length,
                            },
                            1024: {
                                slidesPerView: productDetail.length,
                            },
                            1100: {
                                slidesPerView: productDetail.length,
                            },
                        }}
                    >
                        {productDetail.map((item, index) =>
                            <SwiperSlide key={index}>
                                <div>
                                    <img src={item} alt={`product${index}`} className='w-100' />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>

                </div>
                <div className="col-md-10 wishlist-prp marg-t-2">
                    <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }} id='main-swip-img ' className='pdimgss' >
                        {productDetail.map((item, index) =>
                            <SwiperSlide key={`product${index}`}>
                                <div>
                                    {/* <img src={item} alt={`product${index}`} className='w-100' /> */}
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: `product${index}`,
                                            isFluidWidth: true,
                                            src: item
                                        },
                                        largeImage: {
                                            src: item,
                                            width: 900,
                                            height: 1000
                                        },
                                        enlargedImageContainerClassName: "custom-large-image" // Add custom class
                                    }} />
                                </div>
                            </SwiperSlide>
                        )

                        }

                    </Swiper>
                    <Wishlistbtn handelWishlist={handelWishlist} id={id} category={category} wishlistbtncolor={wishlistbtncolor} />

                </div>
            </div>

    

        </>
    )
}
ProductDSwip.propTypes = {
    productDetail: PropTypes.array,
    handelWishlist: PropTypes.func,
    wishlistbtncolor: PropTypes.func,
    id: PropTypes.number,
    category: PropTypes.string,
}
export default ProductDSwip