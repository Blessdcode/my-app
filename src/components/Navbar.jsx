import React from 'react';
import { navLinks } from '../constants/main';
import { logo, menu, close, icon_1, icon_2, icon_3, icon_4 } from '../assets'
import { useState } from 'react';
// import {b} from './Button';
import styles from '../styles';
import Button, { Btn } from './Button';




const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className=' bg-[#FFF9FD] '>
      <nav className={`${styles.paddingX} flex justify-around items-center p-6 fixed top-0 left-0 w-[100%] bg-[#FFF9FD]  z-50`}>
        <img src={logo} alt="logo" className='w-[174px] h-[38px] cursor-pointer' />

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          {navLinks.map((nav, index) => (
            <>
              <li key={nav.id} className={`font-poppins text-[16px] text-[#000] ${index === navLinks.length - 1 ? 'mr-0' : "mr-10"}`}>
                <a href={`#${nav.id} `} className='hover:text-secondary hover:font-[400] '>
                  {nav.name}
                </a>
              </li>
            </>
          ))}
        </ul>


        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img src={toggle ? close : menu} alt="" className={`object-contain w-[28px] h-[28px] closse`} onClick={() => setToggle((prev) => !prev)} />

          <div className={``}>
            <div className={`sidebar ${toggle ? 'flex' : 'hidden'} p-6 absolute top-16 right-0 mt-2 min-w-[800px] z-30 bg-white shadow-md `}>
              <ul className='list-none flex flex-col justify-end items-end flex-1'>
                {navLinks.map((nav, index) => (
                  <>
                    <li key={nav.id} className={`font-poppins text-[16px] text-[#000] ${index === navLinks.length - 1 ? 'mb-0' : "mb-7"}`}>
                      <a href={`#${nav.id}`} className='text-primary '>
                        {nav.name}
                      </a>
                    </li>
                  </>
                ))}
              </ul>

              <div className={`absolute left-[50%] top-[40px] ml-0 ${styles.flexCenter} flex-col gap-6`}>
                <div className={`${styles.flexStart} gap-6`}>
                  <img src={`${icon_1}`} alt="linkdin" className='w-[40px]' />
                  <img src={`${icon_2}`} alt="linkdin" className='w-[40px]' />
                </div>
                <div className={`${styles.flexCenter} gap-6`}>
                  <img src={`${icon_3}`} alt="linkdin" className='w-[40px]' />
                  <img src={`${icon_4}`} alt="linkdin" className='w-[40px]' />
                </div>
                <Btn />
              </div>
            </div>
          </div>
        </div>
        <Button />
      </nav>
    </div>
  )
}

export default Navbar
