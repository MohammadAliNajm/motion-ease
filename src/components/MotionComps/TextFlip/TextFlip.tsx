import React from 'react';
import { motion } from 'framer-motion';
import './TextFlip.css'

const rotatingWords = ['great', 'nice', 'awesome', 'easy'];

const TextAnimation = () => {
  
  
    const rotateVariants = {
      initial: {
        translateY: 0,
      },
      animate: {
        translateY: -40,
        transition: {
          duration: 1.5,
        },
      },
    };
  
    return (
      <div>
        <p >
          Coding is{' '}
          <span  >
          {rotatingWords.map((word) => (
            <motion.span
            className='spanWords'
              variants={rotateVariants}
              initial="initial"
              animate={ 'animate'}
            >
              { word}
            </motion.span>
          ))}
          </span>
        </p>
      </div>
    );
};

export default TextAnimation;
