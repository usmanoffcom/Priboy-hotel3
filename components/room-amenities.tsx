import { Wifi, Tv, Wind, Bath, Lock, Shirt, Phone } from "lucide-react"

const amenities = [
  { icon: Wifi, name: "Бесплатный Wi-Fi", description: "Высокоскоростной интернет" },
  { icon: Tv, name: "Smart TV", description: "Спутниковые каналы" },
  { icon: Wind, name: "Климат-контроль", description: "Индивидуальный кондиционер" },
  { icon: Bath, name: "Премиум косметика", description: "Туалетные принадлежности" },
  { icon: Lock, name: "Сейф", description: "Для ценных вещей" },
  { icon: Shirt, name: "Халат и тапочки", description: "В номерах Комфорт и Люкс" },
  { icon: Phone, name: "Обслуживание 24/7", description: "Ресепшн и рум-сервис" },
]

export function RoomAmenities() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-terracotta mb-4">Удобства</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground">Во всех номерах</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 mb-4 bg-cream-dark rounded-full">
                <amenity.icon className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{amenity.name}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
