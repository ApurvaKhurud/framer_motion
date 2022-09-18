import React,{useState} from 'react';
import { motion } from "framer-motion"

//Animate & Initial Props
//Transition Prop
//Animate on Events

const Box1 = () => {
  const [isAnimating,setIsAnimating]=useState(false)
  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        animate={{
            x: isAnimating ? 1000 : 0 ,
            //y: 1000,
            opacity : isAnimating ? 1 : 0.5,
            rotate : isAnimating ? 360 : 0 ,
            //backgroundColor : "yellow",
            //scale : 2
    
        }}
        initial={{
           opacity:0.1
        }}
        transition={{
           /*  type:"tween",
            duration: 2 */

            type : "spring",
            stiffness : 60,
            damping : 10
            //damping : 1
        }}
        onClick={()=>setIsAnimating(!isAnimating)}>
       

        </motion.div>

    </div>
  )
}

export default Box1