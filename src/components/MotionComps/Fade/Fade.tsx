import { motion } from 'framer-motion'
import React from 'react'
import { FadeProps } from './Fade.types'


const Fade = (props: FadeProps) => {
  const {children, duration,fadeOut} = props;

  const fadeVariants = {
    initial: {
      opacity:fadeOut ? 1 : 0
    },
    fade: {
      opacity:fadeOut ? 0 :1
    }
  }
  
  return (
    <motion.div
      initial={"initial"}
      whileInView={"fade"}
      variants={fadeVariants}
      transition={{ duration}}
    >
      {children}
    </motion.div>
  )
}

export default Fade