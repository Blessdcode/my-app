import React from 'react'
import styles, { layout } from '../styles'
import { card } from '../constants/main'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import 'slick-carousel/slick/slick'


export const Swipe = () => {
    const slider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
}




const TestCard = ({ name, content, icon, index }) => (
    <div className={`${styles.paddingX} ${styles.flexStart} flex-col text-card ${index !== card.length - 1 ? "mr-8" : "mr-0"} `}>
        <div className='flex justify-between items-start pb-2 w-full'>
            <>
                <h3 className='text-[16px] ss:text-[24px] text-[#252525] font-sans font-[400]'>{name}</h3>
            </>
            <div className='flex'>
                <img src={icon} alt={index} />
            </div>
        </div>
        <div>
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
        {/* <div className={`flex ${layout.sectionInfo} ${styles.marginY} overflow-x-scroll overscroll-contain py-6 px-2 `}>
            <div className='flex '>
                {card.map((cards, index) => (
                    <TestCard key={cards.id} {...cards} index={index} />
                ))}
            </div>
        </div> */}

        <Slider {...Slider}>
            <div className={`flex ${layout.sectionInfo} ${styles.marginY} py-6 px-2 `}>
                <div className='flex '>
                    {card.map((cards, index) => (
                        <TestCard key={cards.id} {...cards} index={index} />
                    ))}
                </div>
            </div>
        </Slider>
    </div>
)

export default Testimonials
