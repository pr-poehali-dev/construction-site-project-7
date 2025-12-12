import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('Все');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const services = [
    {
      icon: 'Home',
      title: 'Строительство домов',
      description: 'Полный цикл строительства от проекта до сдачи ключей'
    },
    {
      icon: 'HardHat',
      title: 'Ремонт и отделка',
      description: 'Профессиональный ремонт любой сложности под ключ'
    },
    {
      icon: 'Trees',
      title: 'Ландшафтный дизайн',
      description: 'Благоустройство территории и создание уникального ландшафта'
    },
    {
      icon: 'Hammer',
      title: 'Реконструкция',
      description: 'Модернизация и перепланировка существующих зданий'
    }
  ];

  const projects = [
    {
      title: 'Современная вилла',
      category: 'Загородные дома',
      image: 'https://cdn.poehali.dev/projects/18d53071-1bc3-461c-b578-b6ac02097276/files/b68a1b80-630f-43b5-b142-e8de6fa4164c.jpg',
      area: '450 м²',
      duration: '8 месяцев'
    },
    {
      title: 'Строительство коттеджа',
      category: 'В процессе',
      image: 'https://cdn.poehali.dev/projects/18d53071-1bc3-461c-b578-b6ac02097276/files/02b40dba-e60b-4a07-aab4-17fad3a050a5.jpg',
      area: '320 м²',
      duration: '6 месяцев'
    },
    {
      title: 'Премиум интерьер',
      category: 'Отделка',
      image: 'https://cdn.poehali.dev/projects/18d53071-1bc3-461c-b578-b6ac02097276/files/bb5b42e8-c8a7-4978-a4f3-de491fc17be4.jpg',
      area: '280 м²',
      duration: '4 месяца'
    }
  ];

  const reviews = [
    {
      name: 'Алексей Петров',
      text: 'Отличная команда профессионалов! Построили дом точно в срок, качество работы на высшем уровне.',
      rating: 5
    },
    {
      name: 'Мария Сидорова',
      text: 'Благодарим за красивый дом мечты! Все пожелания были учтены, работа выполнена безупречно.',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Рекомендую! Прозрачное ценообразование, качественные материалы и профессиональный подход.',
      rating: 5
    }
  ];

  const categories = ['Все', 'Загородные дома', 'В процессе', 'Отделка'];

  const filteredProjects = activeFilter === 'Все' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-accent">СтройДом</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#main" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="hidden md:block">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </nav>
      </header>

      <section id="main" className="pt-24 pb-20 bg-gradient-to-br from-accent via-accent/95 to-accent/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMTEgOS0yMCAyMC0yMHYyMGgtMjB6TTYwIDEwYzAgMTEtOSAyMC0yMCAyMFYxMGgyMHpNMTAgMTZjMC0xMSA5LTIwIDIwLTIwdjIwSDB6TTM0IDM2YzAtMTEgOS0yMCAyMC0yMHYyMGgtMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Строим дома вашей мечты
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Современные технологии, проверенные материалы и 15 лет опыта строительства
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать проект
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Award', value: '500+', label: 'Реализованных проектов' },
              { icon: 'Users', value: '15', label: 'Лет на рынке' },
              { icon: 'Clock', value: '100%', label: 'Сдача в срок' },
              { icon: 'Shield', value: '5', label: 'Лет гарантии' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name={stat.icon} className="text-primary" size={32} />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных работ от проектирования до финальной отделки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <Icon name={service.icon} className="text-secondary group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-accent">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Наши проекты</h2>
            <p className="text-xl text-muted-foreground mb-8">Примеры реализованных работ</p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeFilter === cat ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(cat)}
                  className={activeFilter === cat ? 'bg-primary' : ''}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-none" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent">{project.title}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Ruler" size={16} />
                      <span>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={16} />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Галерея работ</h2>
            <p className="text-xl text-muted-foreground">Фотографии наших проектов</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white font-semibold">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши заказчики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-accent">{review.name}</p>
                      <p className="text-sm text-muted-foreground">Клиент</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-accent to-accent/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Получить консультацию</h2>
              <p className="text-xl mb-8 text-white/90">
                Оставьте заявку и наш специалист свяжется с вами для расчета стоимости проекта
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес офиса</h3>
                    <p className="text-white/80">г. Москва, ул. Строительная, д. 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-white/80">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-white/80">info@stroydom.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-accent">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-accent">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-accent">Email</label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-accent">Сообщение</label>
                    <Textarea
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={32} />
                <span className="text-2xl font-bold">СтройДом</span>
              </div>
              <p className="text-white/70">Строительство домов премиум-класса с 2009 года</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#services" className="hover:text-primary transition-colors">Строительство</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Ремонт</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Дизайн</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">О компании</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#projects" className="hover:text-primary transition-colors">Проекты</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@stroydom.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>© 2024 СтройДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
