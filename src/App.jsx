import { useState } from 'react'
import './App.css'
import { motion } from 'motion/react'

function App() {
  const [count, setCount] = useState(0)

  //Notes:
  //an animation has a starting point and an ending point and method of animation
  //initial is the starting state of the element
  //animate is the ending state of the element
  //transition is to control how it will be animated
  return (
    <>
     <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration: 2}}>
        <h1>Hello World</h1>
     </motion.div>
    </>
  )
}

export default App
