import React from 'react'
import { motion } from 'framer-motion'


const SuccessSvg = ({ color }) => {


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
        <motion.div
            style={{ width: '50%', height: '50%' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
           

        >
            <motion.svg
                width="50"
                height="50"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r="40%"
                    fill="none"
                    stroke={color}
                    transition={{
                        type: "spring",
                        duration:2
                    }}
                    strokeWidth={2}
                    variants={circleVariants}
                    initial="hidden"
                    animate="visible"

                />
                <motion.path
                    d="M10 25 l10 10 l20 -20"
                    fill="none"
                    stroke={color}
                    strokeWidth={2}
                    variants={checkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{
                        type: "spring",
                        duration:2.5
                    }}

                />
            </motion.svg>
        </motion.div>
    );
}

export default SuccessSvg