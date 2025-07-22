import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/service/data";

export default function Projects() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-bold text-center mb-2">Projects</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                Things I've built so far
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="h-48 overflow-hidden">
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2 text-[#42446e] dark:text-[#d7ffe0]">
                                {project.title}
                            </h3>
                            <Link
                                href={`/projects/${project.id}/projectdetails`}
                                className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-justify line-clamp-3"
                            >
                                {project.description}
                            </Link>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs text-gray-500 dark:text-gray-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <Link
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-[#42446e] dark:hover:text-[#d7ffe0]"
                                >
                                    <ExternalLink className="w-4 h-4 mr-1" />
                                    Live Preview
                                </Link>
                                <Link
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-[#42446e] dark:hover:text-[#d7ffe0]"
                                >
                                    <Github className="w-4 h-4 mr-1" />
                                    View Code
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
