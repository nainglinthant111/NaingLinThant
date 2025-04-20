import Header from "@/components/header"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Hero />
        <TechStack />
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
