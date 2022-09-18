import React from 'react';
import { motion } from "framer-motion"

// Hover, Tap. Drag 

const Box2 = () => {
 
  return (
    <div className='box-container'>
        <motion.div 
        className='box'
        /* animate={{
          backgroundColor : "aquamarine"
        }} */
        drag 
        //drag = 'x'
        dragConstraints = {{
            right : 50,
            left : -20,
            top : 5,
            bottom : 5
        }}
        whileHover={{
          scale : 1.2
        }}
        whileTap={{
          scale : 0.8
        }}>
       

        </motion.div>

    </div>
  )
}

export default Box2