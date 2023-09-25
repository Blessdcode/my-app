import React from 'react'
import styles, { layout } from '../styles'
import { dr_patricia } from '../assets'
import { about } from '../constants/main'


const About = () => (
    <section id='about_us' className={`flex justify-between ${styles.paddingY}`}>
        <div className={`flex flex-1 flex-col md:flex-row justify-between items-center`}>
            <div className='w-[100%] md:w-[500px] '>
                <img src={dr_patricia} alt="Dr Patricia" className={`${layout.sectionImg} w-full`} />
            </div>
            <div>
                <div className={`${styles.flexStart} flex-col mb-[32px]`}>
                    <h3 className='text-secondary text-[13px] ss:text-[20px]'>About me</h3>
                    <h2 className={`${styles.heading} text-primary heading`}>Dr. Patricia Nieves <br/> Kiriaco</h2>
                </div>
                {about.map((about, index) => (
                    <div key={about.id} className={`flex flex-1 items-start justify-start `}>
                        
                        <li className={`font-sans list-disc list-outside ss:text-[16px] text-[14px] ${index !== about.length - 1 ? "mb-3" : "mb-0"}`}>
                            {about.content}
                        </li>
                    </div>
                ))}
            </div>
        </div>
    </section>
)


export default About
