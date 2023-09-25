import React from 'react'

const Button = () => {
    return (
        <button className='hidden md:block w-[200px] h-[50px] rounded-[15px] border-[3px] text-center hover:bg-Accent_Color hover:text-white ease-in transition-all ml-10'>
            <span className='font-poppins text-[18px] font-[300] capitalize'>Take Your Turn</span>
        </button>
    )
}
export const Btn2 = () => {
    return (
        <div className='flex justify-end items-end gap-[96px] md:gap-10 '>
            <button className=' w-[130px] h-[40px] md:w-[200px] md:h-[50px] rounded-[15px]  text-center ml-0 btn2'>
                <span className='font-poppins text-[13px] md:text-[18px] font-[300] capitalize'>Take Your Turn</span>
            </button>
            <button className='hover:bg-Accent_Color hover:text-white transition-all w-[130px] h-[40px] md:w-[200px] md:h-[50px] rounded-[15px] text-center ml-0 border-[1px]'>
                <span className='font-poppins text-[13px] md:text-[18px] font-[300] capitalize'>Our Services</span>
            </button>

        </div>
    )
}

export const Btn = () => {
    return (
        <button className='w-[140px] h-[40px] rounded-[12px] border-[3px] text-center hover:bg-secondary hover:text-white ease-in transition-all ml-3'>
            <span className='font-poppins text-[14px] font-[300] capitalize'>Take Your Turn</span>
        </button>
    )
}

export const CtaBtn =()=>{
    return(
        <button className='md:w-[350px] h-[50px] w-full rounded-[12px]  text-center bg-[#FFF9FD] ease-in transition-all '>
            <span className='font-sans text-[14px] ss:text-[24px] font-[500] capitalize'>Send message</span>
        </button>
    )
}



export default Button
