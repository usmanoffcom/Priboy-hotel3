import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center bg-cream">
        <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-6xl font-light text-terracotta mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-light text-foreground mb-4">
            Страница не найдена
          </h1>
          <p className="text-muted-foreground mb-8">
            Запрашиваемая страница не существует или была перемещена. Вернитесь на главную или воспользуйтесь меню.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/" className="inline-flex items-center gap-2">
                <Home className="h-4 w-4" />
                На главную
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/rooms" className="inline-flex items-center gap-2">
                <Search className="h-4 w-4" />
                Номера
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
