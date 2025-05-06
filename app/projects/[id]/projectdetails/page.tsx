"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectDetail from "@/components/ProjectDetail";
import { useParams } from "next/navigation";

const ProjectsDetail = () => {
    const params = useParams();
    return (
        <main className="min-h-screen">
            <Header />
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <ProjectDetail id={params.id} />
            </div>
            <Footer />
        </main>
    );
};
export default ProjectsDetail;
