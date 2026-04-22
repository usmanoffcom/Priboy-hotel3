"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Clock, Phone, UtensilsCrossed, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const restaurants = [
  {
    id: "summer",
    name: "Ресторан Летний с банкетным залом",
    description: "Ресторан «Прибой» приглашает Вас в гастрономическое путешествие по разнообразие Черноморской и Европейской кухонь, лучших мировых вин и с превосходной подборкой Крымских и Краснодарских. Ресторан удивит вас не только своим вкусом, но и оформлением десертов. Вечера наполнят великолепный сервис с ежедневной шоу программой. Ресторан находится на нашей территории лучшего отелем Лазаревское, то есть Прибой.",
    hours: "с 11:00 утра до 2:00 ночи. Только в летний сезон",
    image: "https://framerusercontent.com/images/V5O9Yw5nMB28Rg6lSNHoTIAxA3w.jpeg",
  },
  {
    id: "winter",
    name: "Ресторан Зимний с банкетным залом",
    description: "В ресторане подаются самые вкусные блюда европейской и кавказкой кухни. Есть авторские позиции, а также полюбившиеся «хиты»: холодные закуски, первые блюда, горячее, гриль-меню; насыщенная винная карта, коктейли, эксклюзивные миксы.",
    features: "В качестве развлечения есть ненавязчивая живая музыка. Банкетный зал рассчитан на множество гостей – в заведении можно отметить день рождения, свадьбу, помолвку, семейный праздник и любое дорогое сердцу событие. Вкуснейшие блюда, комфортный и ненавязчивый сервис, аура релакса и гармонии – все это обязательно придется вам по душе!",
    hours: "с 11:00 утра до 2:00 ночи",
    image: "https://framerusercontent.com/images/o3b6vm8jf3n0BReESSYcb9XiN8w.jpg",
  },
  {
    id: "canteen",
    name: "Столовая",
    description: "Гостиница «Прибой» располагает двумя столовыми, оформленными в виде уютных кафе.",
    interior: "Столовая в формате летнего кафе находится у самого берега Черного моря. Уютные столики, ротанговые стулья, большие тенты позволяют насладиться трапезой в комфортной обстановке. В качестве декора – клумбы с живыми цветами и растениями.",
    cuisine: "Вы обязательно получите удовольствие от блюд корейской и восточной кухни, сможете попробовать меню мангала, свежие первые блюда, холодные и горячие закуски, прохладительные напитки. При столовых работают две мангальные зоны, а также зона самообслуживания, можно заказать позиции на вынос. Все блюда готовятся в строгом соответствии санитарных требований. В качестве и свежести продуктов не может быть сомнений!",
    features: "Возможностью вкусно и сытно покушать за разумный прайс. Столовая рассчитана на большое количество гостей – мы всегда найдем уютный столик для вас и вашей семьи или компании друзей. Бронируйте места в наших столовых, наслаждайтесь доступными ценами и главное – свежими и сытными блюдами столовых «Прибой».",
    hours: "с 9:00 – до 21:00 (одна) и до 23:00 (вторая)",
    image: "https://framerusercontent.com/images/Nu8fsuTsOUjCDrCvuSypJn7DWkM.jpg",
  },
  {
    id: "mesto",
    name: 'Арт проект "MESTO"',
    description: 'Комплекс «Прибой» презентует концептуальное заведение MESTO – в современном стиле с просторной террасой на свежем воздухе и гостеприимным персоналом.',
    interior: "Красивая зона с мягкими креслами и диванами, компактными столами, белоснежными легкими шторами. В качестве декора – клумбы с живыми цветами. Есть уютная барная стойка, где можно разместиться для дегустации эксклюзивных коктейлей.",
    cuisine: "Оцените разнообразие меню, где представлены роллы, суши, а также пицца и другие блюда для плотного обеда, ужина или перекуса. Вашему вниманию – большой выбор прохладительных напитков, чаев, коктейлей.",
    features: "Гордостью MESTO является кальянная карта – насыщенные, с сочным и приятным дымом кальяны помогут расслабиться и насладиться морским отдыхом в приятном месте. Днем играет приятный «лаунж», а вечером – современные музыкальные композиции. Можно почувствовать абсолютный релакс, наблюдая за морскими волнами и оживленной публикой, прогуливающейся вдоль побережья. Также есть уютные столики для двоих, чтобы воссоздать романтическую ауру.",
    image: "https://framerusercontent.com/images/CT09PzqQWShBjZnFmRx2P7dlY.jpg",
  },
  {
    id: "rotonda",
    name: "Мангальная зона «Ротонда»",
    description: "Мангальная зона «Ротонда» – любимое многими заведение при гостиничном комплексе «Прибой». У вас есть уникальная возможность насладиться комфортным отдыхом и вкусными блюдами на открытом воздухе, вдыхая аромат моря, ощущая на себе прохладу морского бриза, неспешно наблюдая за насыщенной туристической жизнью. Если вы любите блюда-барбекю, мангальная зона «Ротонда» с видом на черноморское побережье приглашает вас за уютный столик.",
    interior: "Заведение расположено в окружении колонн Ротонды, практически под открытым небом с потрясающим видом на Черное море. Мангальная зона находится на свежем воздухе. В качестве декора – клумбы с живыми цветами и тропическими пальмами.",
    cuisine: "Здесь можно попробовать лучшие мангал-блюда из мяса, рыбы, птицы. Также в меню – авторские позиции барбекю собственного приготовления. До 12:00 вас ждут сытные и полезные завтраки.",
    features: "Оптимальное место для плотной трапезы наедине с собой и мыслями или же в компании друзей, семьей. Мангальная зона находится одновременно в активной туристической зоне, но при этом имеет свой особенный уют и камерность. Несравненный вид на море и вкус блюд на мангале – то, что заставляет снова и снова возвращаться в «Ротонду».",
    hours: "с 9:00 утра до 2:00 ночи",
    image: "https://framerusercontent.com/images/ceDSpBRr2WbyBSiyEEqwbqHzVc.jpg",
  },
  {
    id: "poufs",
    name: "Пуфы на море",
    description: "Пуфы на море – эксклюзивная релакс-зона при гостиничном комплексе «Прибой». Место, где собирается молодежь и просто люди, желающие насладиться отдыхом на побережье Черного моря.",
    interior: "Атмосферная локация оборудована большими, уютными и мягкими красными пуфами, в которых приятно утопаешь и расслабляешься. Возле каждой зоны с пуфами есть небольшие столики, куда можно поставить напитки, снеки или кальян.",
    cuisine: "В меню – прохладительные напитки на любой вкус. Самое время утолить жажду, насладиться свежим бризом с моря и оставить в памяти только незабываемые впечатления.",
    features: "Гордость локации «Пуфы на море» – ароматные кальяны с густым, плотным, вкуснейшим дымом. Кальянщики приготовят их на фруктовой или классической чаше, предложат оригинальные миксы табаков на ваш персональный вкус. Несколько часов релакса под красивый лаунж, плотный дым и шум морских волн – это то, о чем вы мечтали! Креативное место, где можно отдохнуть в компании друзей, или завести новые знакомства. У нас всегда дружелюбно и просто здорово!",
    hours: "с 21:00 до 2:00 ночи",
    image: "https://framerusercontent.com/images/ViZOpK2UgvI3H28CkibhEBtqgQ.jpg",
  },
]

export default function RestaurantPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3">Гастрономия</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Рестораны и питание
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
              Гостиница Прибой в Лазаревское богата разнообразием баров, ресторанов, кафе. На территории расположен ресторан с летней террасой с видом на черное море. Для зимнего периода есть ресторан с шикарным интерьером и наличием мест для проведения различных праздников. Нельзя не отметить отличную кухню и разнообразие питания для гостей гостиницы.
            </p>
          </div>
        </section>

        {/* Restaurants List */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {restaurants.map((restaurant, index) => (
                <div
                  key={restaurant.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
                      {restaurant.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {restaurant.description}
                    </p>
                    {restaurant.interior && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Интерьер и экстерьер</h3>
                        <p className="text-muted-foreground leading-relaxed">{restaurant.interior}</p>
                      </div>
                    )}
                    {restaurant.cuisine && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Кухня</h3>
                        <p className="text-muted-foreground leading-relaxed">{restaurant.cuisine}</p>
                      </div>
                    )}
                    {restaurant.features && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Чем мы отличаемся?</h3>
                        <p className="text-muted-foreground leading-relaxed">{restaurant.features}</p>
                      </div>
                    )}
                    {restaurant.hours && (
                      <div className="flex items-center gap-3 mb-6 p-4 bg-white border border-border">
                        <Clock className="h-5 w-5 text-terracotta flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-foreground">Время работы:</p>
                          <p className="text-muted-foreground">{restaurant.hours}</p>
                        </div>
                      </div>
                    )}
                    <Button asChild variant="brand">
                      <a href="tel:+78622704507">
                        <Phone className="h-4 w-4 mr-2 inline" />
                        Позвонить
                      </a>
                    </Button>
                  </div>
                  <div className={`relative w-full h-96 lg:h-[500px] overflow-hidden ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                    <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-foreground text-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Готовы забронировать столик?</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Свяжитесь с нами для бронирования столика в любом из наших заведений
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="brand">
                <a href="tel:+78622704507">
                  <Phone className="h-5 w-5 mr-2 inline" />
                  +7 (862) 270-45-07
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="inverse"
              >
                <Link href="/booking">Забронировать номер</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
