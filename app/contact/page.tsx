import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
