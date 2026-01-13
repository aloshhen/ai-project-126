import { Coffee, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2"
        >
          <Coffee className="text-coffee-500" size={32} />
          <span className="text-xl font-bold text-coffee-900">CoffeeOS</span>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          {['hero', 'features', 'how-it-works', 'pricing'].map((section) => (
            <button 
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-coffee-900 hover:text-coffee-500 transition-colors"
            >
              {section.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <Menu className="text-coffee-900" />
        </div>
      </div>
    </nav>
  )
}