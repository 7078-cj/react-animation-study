import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import './App.css'
import { AnimatePresence, motion } from 'motion/react'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}

function PageTransition({children}){
  return(
    <motion.main 
    initial={{opacity: 0, x:50}}
    animate={{opacity: 1, x:0}}
    exit={{opacity: 0, x:-50}}
    transition={{duration: 0.35, ease: "easeOut"}}
    >
      {children}
    </motion.main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}
