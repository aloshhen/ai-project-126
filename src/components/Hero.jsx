import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center bg-gradient-to-br from-coffee-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-coffee-900 mb-6">
            Интеллектуальная кофейная экосистема
          </h1>
          <p className="text-xl text-coffee-500 mb-8">
            Revolucionize свой кофейный опыт с персонализированными решениями
          </p>
          <div className="flex space-x-4">
            <button className="bg-coffee-500 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-coffee-900 transition">
              <span>Начать</span>
              <ArrowRight size={20} />
            </button>
            <button className="border border-coffee-500 text-coffee-500 px-6 py-3 rounded-full hover:bg-coffee-50 transition">
              Узнать больше
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <Coffee 
              size={400} 
              className="text-coffee-100 opacity-20 absolute -z-10 -top-20 -right-20" 
            />
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
              alt="Умный кофе" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}