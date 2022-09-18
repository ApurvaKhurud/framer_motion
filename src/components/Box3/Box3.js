import React from 'react'
import { motion } from 'framer-motion'

//variants 

const Box3 = () => {


/*   const boxVariant = {
    big : {
      x : 100,
      scale : 1.5,
      backgroundColor : "yellow"
    },
    small : {
      x : 1000,
      scale : 0.3,
      backgroundColor : "purple"
    }
  } */

  const boxVariant  = {
    hidden : {
      x : "-100vw"
    },
    visible : {
      x : 0,

      transition : {
        delay : 0.5,
        when : "beforeChildren"
      },
      backgroundColor : "aquamarine"
      
    }
  }

  const listVariant = {
    hidden : {
      x : -10,
      opacity : 0
    },
    visible : {
      x : 0,
      opacity : 1,
      staggerChildren: 0.2
      
      
    }
  }
  return (
    <div className='box-container'>
      <motion.div
      className='box'

     /*  animate={{x:0}}
      initial={{x:-1000}} */ //variant replaces it


      /* variants={boxVariant}
      initial = "big"
      animate = "small" */

      variants={boxVariant}
      animate="visible"
      initial = "hidden"
      >
       {[1,2,3].map(box => {
         return (
         <motion.li 
         className='boxItem'
         variants = {listVariant}
        >

         </motion.li>
         )
       })}
      </motion.div>
      
    </div>
  )
}

export default Box3