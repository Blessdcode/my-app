import React from 'react'
import styles from '../styles'
import { islandInfo } from '../constants/main'





const IslandInfo = () => (
    <div className={`flex justify-center items-center flex-col md:flex-row ${styles.marginY} ${styles.paddingX} py-4  text-center bg-[#D4E4F4]`}>
        {islandInfo.map((info) => (
            <div key={info.id} className={`flex-1 ${styles.flexBetween} flex-row m-3 `}>
                <div className={`${styles.flexBetween} `}>
                    <img src={info.icon} alt={info.name} className='w-[50px]' />
                    <div className={`flex flex-auto ml-8 ss:flex-col justify-start ss:items-start items-center gap-3 ss:gap-0`}>
                        <h3 className='text-[18px] ss:text-[28px] text-primary font-poppins ss:font-[500]'>{info.name}</h3>
                        <p className={`${styles.paragraph} text-start ml-3 md:ml-0`}>{info.det}</p>
                    </div>
                </div>
            </div>
        ))}

    </div>
)

export default IslandInfo
