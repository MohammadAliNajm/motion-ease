import React, { useEffect, useState } from 'react'
import { ButtonProps } from './Button.types'
import './Button.css'
import { motion, } from "framer-motion"
import SuccessSvg from '../svgs/SuccessSvg/SuccessSvg'
import Loader from '../loader/Loader'
import FailSvg from '../svgs/failSvg/FailSvg'

const Button = (props: ButtonProps) => {
  const { text, disabled, success, color, onClick, isLoading, fail } = props;

  const [isdisabled, setIsDisabled] = useState<boolean | undefined>(true)

  useEffect(() => {

    if (isLoading == true) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }

  }, [isLoading])

  const StateVariant = {
    success: {
      backgroundColor: '#4BB543',

    },
    fail: {
      backgroundColor: '#FA113D'
    }
  }

  const checkState = () => {
    if (success) {
      return 'success'
    } else if (fail) {
      return 'fail'
    }
    return '';
  }
  const element = document.getElementById('Button')

  const width = element?.clientWidth ;
  const height = element?.clientHeight ;
  let newWidth = 0;
let newHeight =0;

if(width != null && height !=null){
newWidth = width -20;
newHeight = height -20;

}
  
 
  return (
    <>
      <motion.button
        id='Button'
        className='Button'
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        variants={StateVariant}
        animate={checkState()}
        transition={{
          duration: 1,

        }}
        style={{ backgroundColor: color }}
        disabled={isLoading ? isdisabled : disabled}
        onClick={onClick}

      >

        {success ? (
          <div className='SvgContainer' style={{width:newWidth,height:newHeight}}>
            <SuccessSvg />
          </div>

        ) : fail ? (
          <div className="SvgContainer"  style={{width:newWidth,height:newHeight}}>
            <FailSvg />
          </div>
        ) : isLoading ? (
          <div className='LoadingBtn'>
            <p className='loadingtxt'>{text}</p>
            <Loader />
          </div>
        ) : (
          text
        )}


      </motion.button>
    </>

  )
}

export default Button