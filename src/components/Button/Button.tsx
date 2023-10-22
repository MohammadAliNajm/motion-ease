import React, { useEffect, useState } from 'react'
import { ButtonProps } from './Button.types'
import './Button.css'
import { motion, } from "framer-motion"
import SuccessSvg from '../svgs/SuccessSvg/SuccessSvg'
import Loader from '../loader/Loader'

const Button = (props: ButtonProps) => {
  const { text, disabled, success, color, successColor, onClick, isLoading } = props;

  const [isdisabled, setIsDisabled] = useState<boolean | undefined>(true)

  useEffect(() => {

    if (isLoading == true) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }

  }, [isLoading])


  return (
    <>
      <motion.button

        className='Button'
        whileTap={{ scale: 0.8 }}
        style={{ backgroundColor: `${color}` }}
        disabled={isLoading ? isdisabled : disabled}
        onClick={onClick}

      >

        {
          success ?
            <SuccessSvg color={successColor} /> :
            isLoading ? 
            <div className='LoadingBtn'>
              <p className='loadingtxt'>{text}</p>
              
              <Loader />
            </div>
              :
              text

        }


      </motion.button>
    </>

  )
}

export default Button