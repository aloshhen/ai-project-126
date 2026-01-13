import { motion } from 'framer-motion'
import { Coffee, Zap, Smartphone, Settings } from 'lucide-react'

const featureData = [
  {
    icon: Zap,
    title: "Быстрый Заказ",
    description: "Моментальный заказ кофе с персонализацией"
  },
  {
    icon: Smartphone,
    title: "Мобильное Управление",
    description: "Полный контроль через Telegram и мобильное приложение"
  },
  {
    icon: Settings,
    title: "Умные Настройки",
    description: "Адаптивные рекомендации на основе ваших предпочтений"
  }
]

export default function Features() {
  return (
    <section 
      id="features" 
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-coffee-900 mb-16"
        >
          Революционные Возможности
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-coffee-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-6">
                <feature.icon 
                  size={64} 
                  className="text-coffee-500 opacity-80" 
                />
              </div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-coffee-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}