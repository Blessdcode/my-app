import React from 'react'
import styles, { layout } from '../styles'
import { CTA } from '../constants/main'
import { CtaBtn } from './Button'
import { facebook, instagram, linkdin } from '../assets'



const Contact = () => (
  <section id='contact' className={`${styles.paddingY}`}>
    <div>
      <div className={`${styles.flexEnd} flex-col mr-11`}>
        <h3 className='text-secondary text-[13px] ss:text-[20px]'>Take a turn</h3> {''}
        <h2 className={`${styles.heading} text-primary heading`}>Contact</h2>
      </div>
      <div className={`${styles.flexBetween} flex-col-reverse md:flex-row pt-8 justify-around`}>

        <div>
          {CTA.map((cta, index) => (
            <div key={cta.id} className='flex flex-1 flex-col items-start w-['>
              <div className={`${index !== cta.length - 1 ? "mb-12" : "mb-0"}`}>
                <div className='flex items-center mb-1'>
                  <img src={cta.icon} alt={cta.title} className={`mr-4`} />
                  <h3 className='font-sans text-16px md:text-[24px] text-[#252525]'>{cta.title}</h3>
                </div>
                <p className=' text-[#444] text-14px ss:text-[18px] text-center md:text-end'>{cta.det}</p>
              </div >

            </div>
          ))}

          <div className={`${styles.flexBetween}`}>
            <img src={facebook} alt="facebook" className='cursor-pointer'/>
            <img src={linkdin} alt="linkedin" className='cursor-pointer'/>
            <img src={instagram} alt="instagram" className='cursor-pointer'/>
          </div>

        </div>

        <div className={`cta-gra flex  flex-col justify-start md:p-6 p-4 w-full md:w-[50%] mb-7 md:mb-0`}>
          <div>
            <h4 className='text-[20px] md:text-[40px] font-[500] text-white mb-4'>Get in touch to coordinate an appointment</h4>
          </div>
          <div className='flex items-start flex-col flex-1 w-full gap-7 '>
            <input type="text" placeholder='Name' className='input' />
            <input type="email" placeholder='Email' required className='input' />
            <input type='text' placeholder='Telephone' className='input' />
            <textarea name="textarea" id="" placeholder='Problem' className='textarea h-[66px] md:h-[150px]'></textarea>

            <CtaBtn />
          </div>

        </div>

      </div>

    </div>
  </section>
)

export default Contact
