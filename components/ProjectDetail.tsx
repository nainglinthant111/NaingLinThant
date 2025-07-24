import React from "react";
import { projects } from "@/service/settingData";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

function ProjectDetail(props: any) {
    const project = projects.find((p) => p.id === Number(props.id));
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold text-center mb-2">
                {project?.title}
            </h2>
            <div className="flex flex-col md:space-x-4 md:flex-row mt-8">
                <div className="md:w-1/2">
                    <Image
                        src={project?.image || "/placeholder.svg"}
                        alt={"project cover"}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0">
                    <p className="text-gray-600 dark:text-gray-300 text-justify">
                        {project?.description}
                    </p>
                    <div className="flex flex-wrap gap-2 my-4">
                        {project!.tech.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs text-gray-500 dark:text-gray-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <Link
                            href={project!.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-[#42446e] dark:hover:text-[#d7ffe0]"
                        >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Preview
                        </Link>
                        <Link
                            href={project!.githubLink}
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
        </section>
    );
}

export default ProjectDetail;
