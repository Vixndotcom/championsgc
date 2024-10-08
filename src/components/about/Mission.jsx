import React from 'react'
import styles from '../../style'
import Animate from '../Animate'

const Mission = () => {
  return (
   <section className={`${styles.flexCenter} mx-auto  p-2`}>

    <div className='mission-button bg-arrow mx-auto mt-36 mb-10'>
      <div className={`${styles.flexCenter} text-white flex flex-col mt-10`}>
        <div className='bg-vision mt-5'>
        <h1 className={`${styles.flexCenter} neue-medium  mt-4 text-[32px]  tracking-wide text-white `}>
        Mission Statement
       </h1>
       </div>

   <Animate>
        <p className='neue-thin text-[24px] text-black p-6 tracking-wide'>
        "At Champions Global-Consulting, our mission is to provide unparalleled coaching, 
    mentoring, speaking, and leadership consulting services, fostering growth, innovation, and 
      excellence in every client we serve. Through personalized guidance, strategic insights, and 
        transformative solutions, we aim to cultivate a culture of leadership, resilience, and 
     achievement, driving sustainable success and making a positive impact on the world."
        </p>
        </Animate>

      </div>
    </div>

   </section>
  )
}

export default Mission