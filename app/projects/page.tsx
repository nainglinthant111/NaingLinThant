import Header from "@/components/header"
import Footer from "@/components/footer"
import Projects from "@/components/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <Projects />
      </div>
      <Footer />
    </main>
  )
}
