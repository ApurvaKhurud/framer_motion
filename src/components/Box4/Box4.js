import React from 'react'
import { motion } from 'framer-motion'

//Keyframes

const Box4 = () => {
  return (
    <div className='box-container'>
      <motion.div
      className='box'
      animate = {{
        scale : [1,1.4,1.4,1,1],
        borderRadius : ["30%","30%","50%","50%","20%"],
        rotate:[0,0,270,270,0],
        backgroundColor : "aquamarine"
      }}
      transition={{
        duration:2
      }}
      >

      </motion.div>
    </div>
  )
}

export default Box4