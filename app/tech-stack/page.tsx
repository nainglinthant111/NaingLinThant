import Header from "@/components/header"
import Footer from "@/components/footer"
import TechStack from "@/components/tech-stack"

export default function TechStackPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <TechStack />
      </div>
      <Footer />
    </main>
  )
}
