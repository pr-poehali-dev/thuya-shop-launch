import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentSlides, setCurrentSlides] = useState<{[key: number]: number}>({});

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const nextSlide = (productId: number, totalImages: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (productId: number, totalImages: number) => {
    setCurrentSlides(prev => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const products = [
    {
      id: 1,
      name: 'Velvet Lipstick',
      price: '2990 ₽',
      oldPrice: '3490 ₽',
      discount: '15%',
      images: [
        '/img/1577b017-6d47-4e9c-acf2-dd40e24e62e4.jpg',
        '/img/df8f7fd5-12ac-4c3b-8e9b-085becccc87f.jpg'
      ],
      description: 'Роскошная помада с бархатной текстурой',
      features: ['Длительная стойкость', 'Интенсивный цвет', 'Увлажняющая формула']
    },
    {
      id: 2,
      name: 'Premium Mascara',
      price: '2490 ₽',
      oldPrice: '2990 ₽',
      discount: '17%',
      images: [
        '/img/12ecba04-277f-4c24-845b-a8bab30d1359.jpg',
        '/img/a7443181-623a-4c97-8fa4-fca7e05a870a.jpg'
      ],
      description: 'Тушь для объёма и длины ресниц',
      features: ['Объём до 300%', 'Водостойкая формула', 'Гипоаллергенно']
    },
    {
      id: 3,
      name: 'Luxury Foundation',
      price: '3490 ₽',
      oldPrice: '3990 ₽',
      discount: '12%',
      images: [
        '/img/b0a46e45-f347-4c81-a223-714b58f30d9f.jpg',
        '/img/b0867240-3564-44bf-b402-5e24e745f716.jpg'
      ],
      description: 'Тональная основа премиум-класса',
      features: ['Полное покрытие', 'SPF 30', '24-часовая стойкость']
    },
    {
      id: 4,
      name: 'Eyeshadow Palette',
      price: '4490 ₽',
      oldPrice: '5290 ₽',
      discount: '20%',
      images: [
        '/img/3a4bbf2e-9b46-49d7-93e0-bf030f5853e0.jpg'
      ],
      description: 'Профессиональная палетка теней',
      features: ['12 оттенков', 'Высокая пигментация', 'Стойкость 16 часов']
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  {/* Discount Badge */}
                  <Badge className="absolute top-3 left-3 z-10 bg-black text-white">
                    -{product.discount}
                  </Badge>
                  
                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon 
                      name="Heart" 
                      size={18}
                      className={`transition-colors ${
                        favorites.includes(product.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  </Button>

                  {/* Image Slider */}
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.images[currentSlides[product.id] || 0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {product.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => prevSlide(product.id, product.images.length)}
                        >
                          <Icon name="ChevronLeft" size={16} />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => nextSlide(product.id, product.images.length)}
                        >
                          <Icon name="ChevronRight" size={16} />
                        </Button>

                        {/* Dots Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                          {product.images.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === (currentSlides[product.id] || 0)
                                  ? 'bg-white'
                                  : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-light text-black line-clamp-1">
                    {product.name}
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-black">{product.price}</p>
                    <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  
                  <div className="space-y-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <Icon name="Check" size={12} className="mr-1 text-black flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 border-black text-black hover:bg-gray-50">
                      Подробнее
                    </Button>
                    <Button size="sm" className="flex-1 bg-black text-white hover:bg-gray-800">
                      В корзину
                    </Button>
                  </div>
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