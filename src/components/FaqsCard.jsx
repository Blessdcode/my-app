import React, { useState } from 'react'
import styles, { layout } from '../styles'
import { faqs } from '../constants/main'

const FaqsCard = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCard = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className='border border-gray-300 rounded-md mb-2'>
            <div className='p-2 flex justify-between items-center cursor-pointer' onClick={toggleCard}>
                <h2>{title}</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none" className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}>
                    <path d="M1 14.5L13.5 2L26 14.5" stroke="#2977D5" stroke-width="2" />
                </svg>
            </div>
            <p className='p-2 border-t border-gray-300'>{content}</p>

        </div>
    )
}




export default FaqsCard
