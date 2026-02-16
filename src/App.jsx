import { useState } from 'react'
import './App.css'
import { motion } from 'motion/react'


const container = {
  hidden: {opacity: 0},
  visible: {opacity: 1, transition: {staggerChildren: 1, delayChildren: 1}}
}

const item = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y:0}
}


function App() {
  const [count, setCount] = useState(0)
  const features = ['fast', 'declarative', 'powerful', 'fun']

  //Notes:
  //an animation has a starting point and an ending point and method of animation
  //initial is the starting state of the element
  //animate is the ending state of the element
  //transition is to control how it will be animated
  return (
    <>

    {/* Motion Basic */}
     <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 2}}>
        <h1>Hello World</h1>
     </motion.div>

     {/* postion and movement */}
     <motion.div 
        initial={{opacity: 0, x: -100, y:40}} 
        animate={{opacity: 1, x:0, y:0}} 
        transition={{duration: 0.8, ease:'easeIn'}}>
        <h1>Hello World</h1>
     </motion.div>

     {/* Interactive Button */}
     <motion.button
      whileHover={{scale: 1.55, y:-20}}
      whileTap={{scale: 0.9, y: 1}}
      transition={{type: 'spring', stiffness: 300, damping: 2}}
     >
        Get Started
     </motion.button>

     {/* Variants & Staggered Animations */}
     <motion.ul
      variants={container}
      initial='hidden'
      animate='visible'
     >
        {features.map((feature)=>(
          <motion.li 
            key={feature}
            variants={item}
            >
              {feature}
          </motion.li>
        ))}
     </motion.ul>


    </>
  )
}

export default App
