import { Navigation, A11y } from 'swiper/modules';
import product from "/src/assets/-original-imagzhjtzvgwwezt.webp"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "./productswiper.css"
import PropTypes from 'prop-types';
const Productswiper=({cat})=>{
    console.log(cat);
    
    return(
        <>
                <Swiper
                            modules={[Navigation,  A11y]}
                            spaceBetween={30}
                            slidesPerView={5}
                            navigation
                            >
                            <SwiperSlide>
                                <div className="hp-swiper-c-wrapper">
                                    <div >
                                        <img src={product} alt="" width="100%" />
                                    </div>
                                    <div className="hp-swiper-conte mt-3">
                                        <h5>Burnikk</h5>
                                        <div className="hp-disc-conte">
                                            <p>$180</p>
                                            <p>$300</p>
                                            <p>-40%</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hp-swiper-c-wrapper">
                                    <div >
                                        <img src={product} alt="" width="100%" />
                                    </div>
                                    <div className="hp-swiper-conte mt-3">
                                        <h5>Burnikk</h5>
                                        <div className="hp-disc-conte">
                                            <p>$180</p>
                                            <p>$300</p>
                                            <p>-40%</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hp-swiper-c-wrapper">
                                    <div >
                                        <img src={product} alt="" width="100%" />
                                    </div>
                                    <div className="hp-swiper-conte mt-3">
                                        <h5>Burnikk</h5>
                                        <div className="hp-disc-conte">
                                            <p>$180</p>
                                            <p>$300</p>
                                            <p>-40%</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hp-swiper-c-wrapper">
                                    <div >
                                        <img src={product} alt="" width="100%" />
                                    </div>
                                    <div className="hp-swiper-conte mt-3">
                                        <h5>Burnikk</h5>
                                        <div className="hp-disc-conte">
                                            <p>$180</p>
                                            <p>$300</p>
                                            <p>-40%</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hp-swiper-c-wrapper">
                                    <div >
                                        <img src={product} alt="" width="100%" />
                                    </div>
                                    <div className="hp-swiper-conte mt-3">
                                        <h5>Burnikk</h5>
                                        <div className="hp-disc-conte">
                                            <p>$180</p>
                                            <p>$300</p>
                                            <p>-40%</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hp-swiper-c-wrapper">
                                    <div >
                                        <img src={product} alt="" width="100%" />
                                    </div>
                                    <div className="hp-swiper-conte mt-3">
                                        <h5>Burnikk</h5>
                                        <div className="hp-disc-conte">
                                            <p>$180</p>
                                            <p>$300</p>
                                            <p>-40%</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                    </Swiper>
        </>
    )
}
Productswiper.propTypes={
    cat:PropTypes.string
}
export default Productswiper