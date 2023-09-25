import React from 'react'
import styles, { layout } from '../styles'
import { card } from '../constants/main'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





const TestCard = ({ name, content, icon, index }) => (
    <div className={`${styles.paddingX} ${styles.flexStart} flex-col text-card ${index !== card.length - 1 ? "mr-8" : "mr-0"} `}>
        <div className='flex justify-between items-start pb-2 w-full'>
            <>
                <h3 className='text-[16px] ss:text-[24px] text-[#252525] font-sans font-[400]'>{name}</h3>
            </>
            <div className='flex'>
                <img src={icon} alt={name} />
            </div>
        </div>
        <div className='w-full'>
            {content}
        </div>
    </div>

)


const Testimonials = () => (
    <div className={`${styles.paddingY}`}>
        <div className={`${styles.flexCenter} flex-col`}>
            <h3 className='text-secondary text-[13px] ss:text-[20px]'>Testimonials</h3> {''}
            <h2 className={`${styles.heading} text-primary heading`}>What our patients think</h2>
        </div>
        <div className={`flex md:hidden ${layout.sectionInfo} ${styles.marginY} overflow-x-scroll overscroll-contain py-6 px-2 `}>
            <div className='flex'>
                {card.map((cards, index) => (
                    <TestCard key={cards.id} {...cards} index={index} />
                ))}
            </div>
        </div>
        <div className='hidden md:block '> 
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <div className={`${layout.sectionInfo} ${styles.marginY} py-6 px-2 `}>
                    <div className='hidden'>
                        {card.map((cards, index) => (
                            <SwiperSlide className={`${layout.sectionInfo} ${styles.marginY} py-6 px-2`}>
                                <TestCard key={cards.id} {...cards} index={index} />
                            </SwiperSlide>
                        ))}

                    </div>
                </div>
            </Swiper>
        </div>
    </div >
)

export default Testimonials
