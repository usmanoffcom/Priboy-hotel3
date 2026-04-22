import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heading } from "@/components/ui/heading"
import { Text, Muted, Small } from "@/components/ui/text"
import { TelLink, EmailLink } from "@/components/ui/app-link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Политика конфиденциальности гостиницы Прибой — защита персональных данных | Лазаревское",
  description: "Политика конфиденциальности гостиницы Прибой в Лазаревском. Условия обработки и защиты персональных данных пользователей сайта priboy1.ru. Права пользователей, согласие на обработку данных, контакты.",
  alternates: {
    canonical: "https://priboy1.ru/privacy",
  },
  openGraph: {
    title: "Политика конфиденциальности гостиницы Прибой — защита данных",
    description: "Политика конфиденциальности гостиницы Прибой: условия обработки персональных данных, права пользователей, согласие на обработку, контакты.",
    url: "https://priboy1.ru/privacy",
    images: [
      {
        url: "https://framerusercontent.com/images/knZyYzLGIo9To06MDK80T4PMGA.jpg",
        width: 1200,
        height: 630,
        alt: "Политика конфиденциальности гостиницы Прибой",
      },
    ],
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <Text size="sm" className="tracking-[0.2em] uppercase text-gold mb-4">Информация</Text>
            <Heading level="h1" size="hero" tone="inverse" className="mb-6">
              Политика конфиденциальности
            </Heading>
            <Text size="lg" tone="inverse" className="opacity-80 max-w-3xl mx-auto">
              Защита персональных данных в гостинице Прибой
            </Text>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6">
                <Muted>
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей веб-сайта гостиницы Прибой (далее — "Отель").
                </Muted>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">1. Общие положения</Heading>
                <Muted>
                  Используя наш веб-сайт и услуги отеля, вы соглашаетесь с условиями настоящей Политики конфиденциальности. Мы обязуемся защищать ваши персональные данные в соответствии с требованиями законодательства Российской Федерации.
                </Muted>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">2. Собираемые данные</Heading>
                <Muted>Мы собираем следующие персональные данные:</Muted>
                <ul className="list-disc pl-6 space-y-2 mt-2 text-muted-foreground">
                  <li>Фамилия, имя, отчество</li>
                  <li>Контактные данные (телефон, email)</li>
                  <li>Паспортные данные (при бронировании)</li>
                  <li>Данные о бронировании (даты заезда/выезда, категория номера)</li>
                  <li>Технические данные (IP-адрес, cookies, данные браузера)</li>
                </ul>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">3. Цели обработки данных</Heading>
                <Muted>Персональные данные обрабатываются для следующих целей:</Muted>
                <ul className="list-disc pl-6 space-y-2 mt-2 text-muted-foreground">
                  <li>Обработка бронирований и предоставление гостиничных услуг</li>
                  <li>Связь с клиентами по вопросам бронирования и обслуживания</li>
                  <li>Улучшение качества обслуживания</li>
                  <li>Отправка информационных материалов (с согласия клиента)</li>
                  <li>Соблюдение требований законодательства</li>
                </ul>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">4. Защита данных</Heading>
                <Muted>
                  Мы применяем современные технические и организационные меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </Muted>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">5. Передача данных третьим лицам</Heading>
                <Muted>
                  Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, предусмотренных законодательством, или когда это необходимо для предоставления услуг (например, платежным системам, системам бронирования).
                </Muted>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">6. Cookies</Heading>
                <Muted>
                  Наш веб-сайт использует cookies для улучшения пользовательского опыта и сбора статистики. Вы можете отключить cookies в настройках вашего браузера, однако это может повлиять на функциональность сайта.
                </Muted>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">7. Права пользователей</Heading>
                <Muted>Вы имеете право:</Muted>
                <ul className="list-disc pl-6 space-y-2 mt-2 text-muted-foreground">
                  <li>Получать информацию о ваших персональных данных</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших персональных данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                </ul>

                <Heading level="h2" size="card" weight="bold" className="mt-10 mb-4">8. Контакты</Heading>
                <Muted>
                  По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться:
                </Muted>
                <ul className="list-none pl-0 space-y-2 mt-2">
                  <li>
                    <Text as="span" tone="muted">Email: </Text>
                    <EmailLink email="priboy.sochi@mail.ru" tone="accent" className="font-medium" />
                  </li>
                  <li>
                    <Text as="span" tone="muted">Телефон: </Text>
                    <TelLink phone="+7 (862) 270-45-07" tone="accent" className="font-medium" />
                  </li>
                </ul>

                <Small tone="muted" className="mt-8">
                  Дата последнего обновления: {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                </Small>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
