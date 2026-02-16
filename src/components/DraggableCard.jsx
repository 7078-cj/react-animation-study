import React from 'react'
import { motion } from 'motion/react'

export default function DraggableCard() {
  return (
    <div>
        <motion.div 
        className='card' 
        drag
        dragConstraints={{left:-80, right: 80, top: -80, bottom: 80}}
        dragElastic={0.2}
        >
            Drag Me
        </motion.div>
    </div>
  )
}
