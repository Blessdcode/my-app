import React, { useState } from 'react'
import styles, { layout } from '../styles'
import { faqs } from '../constants/main'



const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = index => {
        if (isOpen === index) {
            return setIsOpen(null)
        }
        setIsOpen(index)
    }

    return (
        <aside className=''>

            <div className={`${styles.paddingY} `}>
                <div className={`${styles.flexCenter} flex-col mb-8`}>
                    <h3 className='text-secondary text-[13px] ss:text-[20px]'>Get rid of doubts</h3> {''}
                    <h2 className={`${styles.heading} text-primary heading`}>Frequent questions</h2>
                </div>
                <div>
                    {faqs.map((faq, index) => {
                        return (
                            <div className={`${index !== faq.length - 1 ? "mb-5" : "mb-0"}`} key={index}>
                                <div onClick={() => toggle(index)} key={index} className={`${styles.flexBetween} cursor-pointer faqs-cards py-4 ss:py-[30px] px-5 ss:px-10`} >
                                    <h3 className='text-primary font-[500] text-[13px] ss:text-[24px]'>{faq.title}</h3>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none" className={`h-6 w-6 ${isOpen === index ? 'transform rotate-180' : ''} transition-all`}>
                                        <path d="M1 14.5L13.5 2L26 14.5" stroke="#2977D5" stroke-width="2" />
                                    </svg>
                                </div>
                                {isOpen === index ? (
                                    <div className='faqs-content p-5 '>
                                        <p className='font-sans text-primary font-[400] text-[13px] ss:text-[20px]'>{faq.content}</p>
                                    </div>
                                ) : null}

                            </div>
                        )
                    })}
                </div>
            </div>
        </aside>

    )
}

export default FAQs
