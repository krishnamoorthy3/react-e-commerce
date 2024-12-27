import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./ProductDswip.css"
import PropTypes from 'prop-types';
import Wishlistbtn from "../WishListbtn/Wishlistbtn"

const ProductDSwip = ({productDetail}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className="row ">
                <div className="col-md-2">
                    <Swiper
                        modules={[Thumbs]}
                        watchSlidesProgress
                        onSwiper={setThumbsSwiper}
                        slidesPerView={productDetail.length}
                        className='swiper-vertical'
                        id='thumb-swip-img'

                    >
                        {productDetail.map((item,index)=>
                            <SwiperSlide key={index}>
                                <div>
                                    <img src={item} alt={`product${index}`} className='w-100'  />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper>

                </div>
                <div className="col-md-10 wishlist-prp">
                    <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }} id='main-swip-img' >
                        {productDetail.map((item,index)=>
                            <SwiperSlide key={`product${index}`}>
                                <div>
                                    <img src={item} alt={`product${index}`} className='w-100' />
                                </div>
                            </SwiperSlide>
                        )

                        }
                        
                    </Swiper>
                    <Wishlistbtn />

                </div>
            </div>



        </>
    )
}
ProductDSwip.propTypes={
    productDetail:PropTypes.array
}
export default ProductDSwip