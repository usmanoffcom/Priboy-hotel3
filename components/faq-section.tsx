"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/section-header"

const faqs = [
  {
    question: "Как я могу забронировать номер в вашем отеле?",
    answer: "Вы можете сделать бронирование напрямую через наш веб-сайт или связавшись с нашей командой по бронированию по телефону или электронной почте. Мы также принимаем бронирования через сторонние платформы бронирования. 8 800 250 00 34 +7 (862) 270-45-07",
  },
  {
    question: "Каковы ваши правила отмены бронирования?",
    answer: (
      <>
        Подробную информацию о правилах отмены бронирования вы можете найти на странице{" "}
        <Link href="/otmena-bronirovaniya" className="text-terracotta hover:underline font-medium">
          «Отмена бронирования»
        </Link>{" "}
        в разделе «Информация».
      </>
    ),
  },
  {
    question: "Что входит в стоимость – только завтраки?",
    answer: "В стоимость проживания включены завтраки. Дополнительные услуги (обед, ужин, экскурсии) оплачиваются отдельно.",
  },
  {
    question: "Какие типы номеров вы предлагаете?",
    answer: "Мы предлагаем различные типы номеров: Стандартный номер, Стандартный номер+, Студия, Полулюкс и Люкс. Подробную информацию о каждом типе номера вы можете найти в разделе «Номера».",
  },
  {
    question: "Вы предлагаете трансфер от аэропорта из Адлера?",
    answer: "Да, мы можем организовать трансфер от аэропорта Адлера. Пожалуйста, свяжитесь с нами заранее для бронирования трансфера.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="site-section bg-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Вопросы"
          title="Часто задаваемые вопросы"
          centered
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="site-card bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-cream/50 transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-terracotta flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <div className="text-muted-foreground leading-relaxed">{faq.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
