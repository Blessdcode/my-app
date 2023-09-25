import React from 'react'
// import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { clinic, clinic_2, clinic_3, clinic_4, clinic_5, clinic_6, clinic_7 } from '../assets';
import styles from '../styles';
import { clinicPic } from '../constants/main';




const Theater = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className={`${styles.marginY}`}>
            <div className={`${styles.flexStart} flex-col ${styles.marginY}`}>
                <h3 className='text-secondary text-[13px] ss:text-[20px]'> The installations</h3> {''}
                <h2 className={`${styles.heading} text-primary heading`}> Our Clinic</h2>
            </div>
            <div className={``}>
                <Slider {...settings}>

                    {clinicPic.map((clinic, index) => (
                        <div key={clinic.id} className={`${styles.flexBetween} ${index !== clinic.length - 1 ? "pr-4" : "pr-0"}`}>
                            <img src={clinic.img} alt={clinic.id} className={`w-[300px] h-[250px] ss:w-[900px] ss:h-[588px] object-cover rounded-[15px]`}/>
                        </div>
                    ))}

                    {/* <div> */}
                    {/* <div>
                            <img src={clinic} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div>
                        <div>
                            <img src={clinic_2} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div>
                        <div>
                            <img src={clinic_3} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div>
                        <div>
                            <img src={clinic_4} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div>
                        <div>
                            <img src={clinic_5} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div>
                        <div>
                            <img src={clinic_6} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div>
                        <div>
                            <img src={clinic_7} alt="" className={`w-[1000px] h-[500px] object-cover`} />
                        </div> */}
                    {/* </div> */}

                </Slider>
            </div>
        </div>
    )
}



export default Theater
