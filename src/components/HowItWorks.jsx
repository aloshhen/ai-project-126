import { motion } from 'framer-motion'
import { Coffee, ShoppingCart, CreditCard, Check } from 'lucide-react'

const steps = [
  {
    icon: Coffee,
    title: "Выберите Кофе",
    description: "Персонализируйте свой напиток в приложении"
  },
  {
    icon: ShoppingCart,
    title: "Закажите",
    description: "Моментальный заказ через Telegram"
  },
  {
    icon: CreditCard,
    title: "Оплатите",
    description: "Криптовалюта или встроенные платежи"
  },
  {
    icon: Check,
    title: "Наслаждайтесь",
    description: "Кофе готовится и доставляется автоматически"
  }
]

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-gradient-to-br from-coffee-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-coffee-900 mb-16"
        >
          Как Это Работает
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-coffee-50 p-4 rounded-full">
                  <step.icon 
                    size={48} 
                    className="text-coffee-500" 
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-coffee-900 mb-4">
                {step.title}
              </h3>
              <p className="text-coffee-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}