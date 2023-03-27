import React from 'react'
import { motion } from 'framer-motion'
import bg from '../images/wallpaper-3.jpg'

const Testimonials = () => {

    return (
        <motion.div 
            initial={{opacity: 0, scaleY: 0}} 
            animate={{opacity: 1, scaleY: 1}} 
            exit={{opacity: 0, scaleY: 0}}
            transition={{duration: 0.5}}
        >
            <div>
                <div className="testimonial-section">
                    <div className="container d-flex flex-column align-items-center justify-content-between">
                        <h1>Testimonial</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Testimonials