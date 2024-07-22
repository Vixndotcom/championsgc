import React from 'react'
import styles from '../../style'

const Cardtwo = () => {
  return (
    <section className={`${styles.flexStart} text-start `}>
    <div>
             {/* card 6 */}  
    <div className=' h-[8px] '></div>
    
    <div className=' md:w-[800px] xs:w-[470px] p-6 pbox track   '>
      {/* heading */}
      <div className='flex flex-col'>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] text-white bg-white`}>  
      <h1 className='yellow galgo text-[32px] tracking-wide'> 07. </h1>
      </div> 
    <h2 className={`${styles.flexStart} galgo text-5xl tracking-wide text-white mt-5 mx-2` }>
    We are dedicated to maintaining the highest ethical standards.
         </h2>        
     </div>
     <p className='text-[24px] text-white neue-thin mt-2 p-2  '>
     We will always act 
with integrity and respect, including upholding confidentiality, and we will never 
engage in any practices that are unethical or harmful to our clients.

     </p>
      {/* heading */}
 
     </div> 
     {/* card 6  ///////////////////////////////////////////    */}
    </div>
   </section>
  )
}

export default Cardtwo