import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { ToastProps } from './Toast.types'
import './Toast.css'
import { AiOutlineClose } from "react-icons/ai";

const Toast = (props: ToastProps) => {
    const { opened, text, title } = props;

    const [open,setOpen] = useState(false)

    useEffect(() => {

        setOpen(opened)
    },[opened])
    
    const variants = {
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        },
        closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        }
    }

    const onClose = () => {
          setOpen(false)  
    }

    return (
        <motion.div
            className='toast'
            animate={open ? 'open' : 'closed'}
            variants={variants}


        >
            <div className='toastHead'>
                 <h4 >
                {title}
            </h4>
            <motion.div className='toastClose' whileTap={{scale:0.9}} onClick={onClose}>

           
            <AiOutlineClose   />
            </motion.div>
            </div>
           
            <p className='toastText'>
                {text}
            </p>



        </motion.div>
    )
}

export default Toast