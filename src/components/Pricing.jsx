import { motion } from 'framer-motion'
import { Coffee, Check } from 'lucide-react'

const plans = [
  {
    title: "Старт",
    price: "0",
    features: [
      "1 бесплатный кофе в месяц",
      "Базовые настройки",
      "Telegram-бот"
    ]
  },
  {
    title: "Про",
    price: "9.99",
    features: [
      "5 кофе в месяц",
      "Персонализация вкуса",
      "Криптоплатежи",
      "Приоритетная поддержка"
    ],
    recommended: true
  },
  {
    title: "Премиум",
    price: "19.99",
    features: [
      "Безлимитный кофе",
      "Эксклюзивные сорта",
      "Доставка 24/7",
      "Личный кофе-консультант"
    ]
  }
]

export default function Pricing() {
  return (
    <section 
      id="pricing" 
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-coffee-900 mb-16"
        >
          Тарифные Планы
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`
                p-8 rounded-2xl text-center 
                ${plan.recommended 
                  ? 'bg-coffee-500 text-white border-4 border-coffee-900 transform scale-105' 
                  : 'bg-coffee-50 text-coffee-900'}
              `}
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.title}
              </h3>
              <div className="text-4xl font-bold mb-6">
                ${plan.price}
                <span className="text-base">/мес</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map(feature => (
                  <li 
                    key={feature} 
                    className="flex items-center justify-center space-x-2"
                  >
                    <Check 
                      size={20} 
                      className={plan.recommended ? 'text-white' : 'text-coffee-500'} 
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`
                  w-full py-3 rounded-full transition
                  ${plan.recommended 
                    ? 'bg-white text-coffee-900 hover:bg-coffee-50' 
                    : 'bg-coffee-500 text-white hover:bg-coffee-900'}
                `}
              >
                Выбрать план
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}