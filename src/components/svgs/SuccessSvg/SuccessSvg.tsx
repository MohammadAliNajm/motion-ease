import React from 'react'
import { motion } from 'framer-motion'


const SuccessSvg = () => {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const circleVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1 },
    };

    const checkVariants = {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, },
    };


    return (

        <motion.svg

            width={'50'}
            height={25}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.circle variants={circleVariants} initial="hidden" animate="visible" cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeWidth="4" transition={{
                duration: 0.5
            }} />

            <motion.path
                initial="hidden"
                animate="visible"
                variants={checkVariants}
                d="M30 50 L45 65 L70 40"
                fill="none"
                stroke="white"
                strokeWidth="4"
                transition={{
                    duration: 0.75
                }}
                strokeLinecap="round"
            />
        </motion.svg>

    );
}

export default SuccessSvg