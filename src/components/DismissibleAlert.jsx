import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function DismissibleAlert() {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <button
        onClick={()=> setOpen((prev)=> !prev)}
        >
            Toggle Alert
        </button>
        
        {/* so it can animate exit */}
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{y:-10, opacity: 0}}
                        animate={{y:0, opacity: 1}}
                        transition={{duration: 0.25}}
                        exit={{y:-10, opacity: 0}}
                    >
                        This is an alert
                    </motion.div>
                )
            }
        </AnimatePresence>
    </div>
  )
}
