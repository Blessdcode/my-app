import React from 'react'
import { hero_img } from '../assets'
import { Btn2 } from './Button'
import styles from '../styles'



const Hero = () => (
  <section id='start' className={`relative ${styles.flexBetween} flex-col-reverse md:flex-row md:mt-24 mt-0 md:mb-12 mb-0`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-13 sm:px-16 px-0 my-6`}>
      <div className={`flex flex-row justify-between items-center w-full`}>
        <h3 className='text-secondary text-[13px] ss:text-[20px]'>In Cordoba Capital</h3>
      </div>
      <div className='flex flex-1'>
        <h1 className='font-poppins capitalize text-[32px] md:text-[64px] font-[600] text-primary leading-[48px] ss:leading-[100px]'>
          An excellent dental {''}
          <span className='text-secondary'>experience </span>
        </h1>
      </div>
      <div className={``}>
        <p className={`${styles.paragraph} mb-6`}> Lorem ipsum dolor sit amet consectetur adipiscing elit molestie, rhoncus luctus arcu ut eros augue. Eu commodo laoreet parturient quam purus magna pretium luctus.</p>
      </div>
      <Btn2 />
      
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 mx-0 relative `}>
      <img src={hero_img} alt="hero-img" className=' w-[100%] h-[100%]  md:w-[400px] md:h-[600px] z-10 object-contain' />
    <div className={`w-[600px] h-[600px] big_gradient rounded-[100%] absolute  `}>
    </div>
    </div>
  </section>
)


export default Hero
