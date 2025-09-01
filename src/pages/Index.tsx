import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const products = [
    {
      id: 1,
      name: 'Velvet Lipstick',
      price: '2990 ₽',
      image: '/img/1577b017-6d47-4e9c-acf2-dd40e24e62e4.jpg',
      description: 'Роскошная помада с бархатной текстурой',
      features: ['Длительная стойкость', 'Интенсивный цвет', 'Увлажняющая формула']
    },
    {
      id: 2,
      name: 'Premium Mascara',
      price: '2490 ₽',
      image: '/img/12ecba04-277f-4c24-845b-a8bab30d1359.jpg',
      description: 'Тушь для объёма и длины ресниц',
      features: ['Объём до 300%', 'Водостойкая формула', 'Гипоаллергенно']
    },
    {
      id: 3,
      name: 'Luxury Foundation',
      price: '3490 ₽',
      image: '/img/b0a46e45-f347-4c81-a223-714b58f30d9f.jpg',
      description: 'Тональная основа премиум-класса',
      features: ['Полное покрытие', 'SPF 30', '24-часовая стойкость']
    }
  ];

  const reviews = [
    {
      name: 'Анна К.',
      text: 'Потрясающее качество! Помада держится весь день.',
      rating: 5
    },
    {
      name: 'Мария В.',
      text: 'Тушь просто волшебная, ресницы выглядят идеально.',
      rating: 5
    },
    {
      name: 'Елена С.',
      text: 'Тональный крем ложится безупречно, очень довольна.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold tracking-tight text-black">
              THUYA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-black hover:text-gray-600 transition-colors">Главная</a>
              <a href="#catalog" className="text-black hover:text-gray-600 transition-colors">Каталог</a>
              <a href="#about" className="text-black hover:text-gray-600 transition-colors">О бренде</a>
              <a href="#reviews" className="text-black hover:text-gray-600 transition-colors">Отзывы</a>
              <a href="#delivery" className="text-black hover:text-gray-600 transition-colors">Доставка</a>
              <a href="#contacts" className="text-black hover:text-gray-600 transition-colors">Контакты</a>
            </div>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              <Icon name="ShoppingBag" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-8xl font-light tracking-wider text-black mb-8">
            THUYA
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
            Премиальная косметика для безупречной красоты
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12 py-4 text-lg">
            Открыть каталог
          </Button>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center text-black mb-16">Каталог</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-light text-black">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-black">{product.price}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" size={16} className="mr-2 text-black" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-black mb-12">О бренде</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            THUYA — это философия красоты, воплощённая в каждом продукте. 
            Мы создаём косметику премиум-класса, используя только лучшие ингредиенты 
            и инновационные технологии.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Наша миссия — помочь каждой женщине раскрыть свою уникальную красоту 
            с помощью продуктов высочайшего качества.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center text-black mb-16">Отзывы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-black fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="text-black font-medium">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-center text-black mb-16">Доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-black">
                  <Icon name="Truck" size={24} className="mr-3" />
                  Быстрая доставка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Доставка по Москве в течение дня. По России — 2-3 рабочих дня.</p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center text-black">
                  <Icon name="Shield" size={24} className="mr-3" />
                  Гарантия качества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Возврат товара в течение 14 дней. Проверка качества при получении.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-black mb-16">Контакты</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="mr-3 text-black" />
                <span className="text-lg text-gray-600">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={20} className="mr-3 text-black" />
                <span className="text-lg text-gray-600">hello@thuya.ru</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white">
                <Icon name="Instagram" size={16} className="mr-2" />
                Instagram
              </Button>
              <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white">
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">THUYA</h3>
            <p className="text-gray-400">Премиальная косметика для безупречной красоты</p>
            <Separator className="my-8 bg-gray-800" />
            <p className="text-gray-400 text-sm">
              © 2024 THUYA. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;