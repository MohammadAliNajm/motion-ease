import React from 'react'
import { motion } from 'framer-motion'


const Slide = () => {
  return (
    <motion.div
    initial={{x:-130}}
    animate={{x:0}}
    
    >
        Slide
    </motion.div>
  )
}

export default Slide