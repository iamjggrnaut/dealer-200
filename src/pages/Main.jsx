import React from 'react'
import ModelsSection from '../components/ModelsSection'
import { motion } from 'framer-motion'

const Main = () => {

    return (
        <motion.div 
            initial={{opacity: 0, scaleY: 0}} 
            animate={{opacity: 1, scaleY: 1}} 
            exit={{opacity: 0, scaleY: 0}}
            transition={{duration: 0.3}}
        >
            <div>
                <ModelsSection />
            </div>
        </motion.div>
    )
}

export default Main