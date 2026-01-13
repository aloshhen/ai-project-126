import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-coffee-900 font-sans">
      <Navigation />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
      </motion.main>
      <Footer />
    </div>
  )
}