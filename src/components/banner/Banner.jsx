import React, { useContext, useState } from 'react'
import { IsMobileContext } from '../../utilis/isMobContext'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { delay, motion } from "framer-motion";


const Banner = () => {
    const {isMobile} = useContext(IsMobileContext);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className='banner_sec'> 

            <Swiper slidesPerView={1} modules={[Thumbs , Autoplay]} thumbs={{ swiper: thumbsSwiper }} autoplay={{delay: 3000, }} loop={true}>
                <SwiperSlide>
                    <div className="item">
                        <motion.div className="txt_box" initial={{x:50 , opacity : 0}} whileInView={{x:0 , opacity : 1}} transition={{delay: .1 , duration : 1} }>
                            <h2 className='title'>Lorem ipsum dolor sit amet consectetur </h2>
                            <p className='p'>
                                adipisicing elit. Itaque est necessitatibus qui sunt aspernatur unde provident sint quasi enim amet, magni praesentium dicta ipsa voluptas? Alias modi aperiam pariatur accusamus.
                            </p>
                        </motion.div>
                        <motion.img initial={{opacity: .2}} whileInView={{opacity: 1}} transition={{delay: 0 , duration : 1} } src='src/assets/images/banner/1.avif' className='bg' alt=' ' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <motion.div className="txt_box" initial={{x:50 , opacity : 0}} whileInView={{x:0 , opacity : 1}} transition={{delay: .1 , duration : 1} }>
                            <h2 className='title'>Lorem ipsum dolor sit amet consectetur </h2>
                            <p className='p'>
                                adipisicing elit. Itaque est necessitatibus qui sunt aspernatur unde provident sint quasi enim amet, magni praesentium dicta ipsa voluptas? Alias modi aperiam pariatur accusamus.
                            </p>
                        </motion.div>
                        <motion.img initial={{opacity: .2}} whileInView={{opacity: 1}} transition={{delay: 0 , duration : 1} } src='src/assets/images/banner/2.jpeg' className='bg' alt=' ' />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="item">
                        <motion.div className="txt_box" initial={{x:50 , opacity : 0}} whileInView={{x:0 , opacity : 1}} transition={{delay: .1 , duration : 1} }>
                            <h2 className='title'>Lorem ipsum dolor sit amet consectetur </h2>
                            <p className='p'>
                                adipisicing elit. Itaque est necessitatibus qui sunt aspernatur unde provident sint quasi enim amet, magni praesentium dicta ipsa voluptas? Alias modi aperiam pariatur accusamus.
                            </p>
                        </motion.div>
                        <motion.img initial={{opacity: .2}} whileInView={{opacity: 1}} transition={{delay: 0 , duration : 1} } src='src/assets/images/banner/3.jpg' className='bg' alt=' ' />
                    </div>
                </SwiperSlide>
            </Swiper>



            {!isMobile ? 
                <Swiper className='banner_thumbs' slidesPerView={3} spaceBetween={15} modules={[Thumbs]} watchSlidesProgress={true} onSwiper={setThumbsSwiper} >
                <SwiperSlide>
                    <motion.div className="thumb" initial={{y:50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: 0 , duration : 1} }>
                        <img src="src/assets/images/banner/1.avif" className='thumb_img' alt="" />
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div className="thumb" initial={{y:50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: .3 , duration : 1} }>
                        <img src="src/assets/images/banner/2.jpeg" className='thumb_img' alt="" />
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div className="thumb" initial={{y:50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: .6 , duration : 1} }>
                        <img src="src/assets/images/banner/3.jpg" className='thumb_img' alt="" />
                    </motion.div>
                </SwiperSlide>
            </Swiper>
            : ''}
       
        </section>
    )
}

export default Banner
