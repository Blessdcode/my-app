import React from 'react'
import styles from '../styles'
import { ourServices } from '../constants/main'
import { Union } from '../assets'



const Service = () => (
    <section id='service' className={`flex justify-start ${styles.paddingY}`}>
        <div>
            <div className={`${styles.flexStart} flex-col mb-[32px]`}>
                <h3 className='text-secondary text-[13px] ss:text-[20px]'>Specialties</h3>
                <h2 className={`${styles.heading} text-primary heading`}>Our Service</h2>
            </div>

            <div className={` relative`}>
                <img src={Union} alt="tooth-union" className={`w-[900px] h-[1000px] object-cover hidden md:block absolute right-0`} />
                <div className={`flex items-center flex-col md:flex-row flex-wrap gap-14 py-8 `}>
                    {ourServices.map((service) => (
                        <div key={service.id} className={`${styles.flexBetween} flex-col p-16px z-10`}>
                            <div className={`card-box w-[100%] md:w-[400px] `}>
                                <img src={service.img} alt={service.name} className='w-[45px] h-[50px] ss:w-[70px] ss:h-[50px]'/>

                                <div>
                                    <h4 className='text-secondary text-[24px] md:text-[32px] font-[500] pt-6'>
                                        {service.title}
                                    </h4>
                                </div>
                                <div>
                                    <p className={`font-normal text-Grey_Color py-4 text-[14px] md:text-[16px] `}>
                                        {service.content}
                                    </p>
                                </div>
                                <div className={`items-center inline-flex cursor-pointer hover:shadow p-2 rounded-[10px] transition-all ease-linear`}>
                                    <p className='mr-2'>{service.more}</p>
                                    <img src={service.icon} alt={service.id} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </section>
)

export default Service
