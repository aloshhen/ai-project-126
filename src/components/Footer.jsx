import { Coffee, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <Coffee size={32} className="text-white" />
            <span className="text-2xl font-bold">CoffeeOS</span>
          </div>
          <p className="text-coffee-50">
            Революционная платформа для кофейных энтузиастов, объединяющая технологии и удовольствие.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Быстрые Ссылки</h4>
          <ul className="space-y-4">
            {['О нас', 'Функции', 'Тарифы', 'Контакты'].map(link => (
              <li key={link}>
                <a 
                  href="#" 
                  className="hover:text-coffee-50 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-6">Свяжитесь с нами</h4>
          <div className="flex space-x-4">
            {[Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="hover:text-coffee-50 transition"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-coffee-500">
        <p>© 2024 CoffeeOS. Все права защищены.</p>
      </div>
    </footer>
  )
}