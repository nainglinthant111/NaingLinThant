import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutContent from "@/components/about-content";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <AboutContent />
            </div>
            <Footer />
        </main>
    );
}
