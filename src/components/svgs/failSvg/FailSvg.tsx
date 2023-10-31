import React from 'react'
import { motion } from 'framer-motion'


const FailSvg = () => {

  
    const circleVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1 },
    };
    
    const crossVariants = {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, },
    };
    
    return (
        <motion.svg
            width="60"
            height="30"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.circle
                cx="50%"
                cy="50%"
                r="40%"
                fill="none"
                stroke="white"
                strokeWidth="4"
                 initial="hidden"
                animate="visible"
                transition={{
                    duration:0.5
                }}
                variants={circleVariants} />

            <motion.path
                d="M30,30 L70,70 M30,70 L70,30"
                initial="hidden"
                animate="visible"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                transition={{
                    duration:1
                }}
                variants={crossVariants}
            />
        </motion.svg>
    )
}

export default FailSvg;