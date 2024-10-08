import React from 'react'
import styles from '../../style'
import { arrowhite } from '../../assets';

const Steps = () => {
  const emailAddress = 'championsglobalconsulting@gmail.com';
  
  
  return (
   <section className={`${styles.flexCenter} flex flex-col`}>
    <div className='mt-5 py-4 w-[300px] flex flex-row '>
    <div className='rounded-[16px] h-[16px] w-[16px] bg-white mr-4 mt-3 '></div>
    <h1 className='galgo text-6xl text-white tracking-wide tracking-wide'>How to participate</h1>
    </div>

    <div className='mt-2 p-4 flex flex-col'>

   <div className='flex flex-col'>
    <div className={`w-[48px] h-[48px] rounded-full ${styles.flexCenter} mt-5  text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px] tracking-wide'> 01. </h1>
     </div> 
  <p className='neue-medium text-[24px] text-white tracking-wide mt-4 mx-4 w-[300px]' > Purchase a ticket</p>
     </div>
{/* email///////////////////////////////////////// */}
   <div className='flex flex-col mt-5'>
    <div className={`w-[48px] h-[48px] rounded-full ${styles.flexCenter} mt-2 text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px]  tracking-wide'> 02. </h1>
     </div> 
     <div className='flex flex-col '>
  <p className='neue-medium text-[24px] text-white tracking-wide mt-2 mx-4 w-[300px]  ' > Email your ticket receipt for <br />confirmation to:</p>

  <a href={`mailto:${emailAddress}` } className='text-white text-[20px] neue-thin mt-2 p-2'>{emailAddress}<img src={arrowhite} alt="" className='w-[24px] mt-2 ' /> </a>
     </div>
     </div>
     {/* card 3/////////////////////////////////// */}
   <div className='flex flex-col mt-5'>
    <div className={`w-[48px] h-[48px] rounded-full ${styles.flexCenter} mt-2 text-white bg-black`}>  
     <h1 className='text-white galgo text-[24px]  tracking-wide'> 03. </h1>
     </div> 
  <p className='neue-medium text-[24px] text-white tracking-wide mt-4 mx-4 w-[300px]' > Join our class</p>
     </div>





     </div>
   </section>
  )
}

export default Steps