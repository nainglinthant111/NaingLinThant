import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import portfolio from "../public/projects/image.png";
import foodOrder from "../public/projects/foodorder.png";
import postalcode from "../public/projects/myanmarpostalcode.png";
import eco from "../public/projects/eco.png";
import payroll from "../public/projects/payroll.png";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "My PortFolio",
            description:
                "A personal web portfolio built to showcase my projects, skills, and experiences in a clean and professional manner. Designed with responsive layouts using HTML, CSS, and JavaScript, ensuring optimal performance across all devices. Integrated interactive elements and animations to enhance user engagement while maintaining simplicity and elegance.",
            image: portfolio,
            tech: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Tailwindcss",
            ],
            liveLink: "https://example.com",
            githubLink: "https://github.com",
        },
        {
            id: 2,
            title: "Food Order App",
            description:
                "An intuitive food ordering web application designed to provide a seamless user experience for browsing menus and placing orders. Built using modern technologies like React.js, Node.js, and MongoDB, ensuring fast performance and scalability. Features include real-time order tracking, secure payment integration, and a responsive design for all devices.",
            image: foodOrder,
            tech: ["React", "JavaScript", "Tailwindcss"],
            liveLink: "https://my-food-order.vercel.app/",
            githubLink: "https://github.com/nainglinthant111/my-food-order",
        },
        {
            id: 3,
            title: "Myanmar Postal Code Dos",
            description:
                "A web application designed to simplify searching for postal codes across Myanmar, making it accessible and user-friendly. Built with React.js and integrated with a custom database for accurate and up-to-date postal code information. Features a clean, responsive design ensuring smooth performance on both desktop and mobile devices",
            image: postalcode,
            tech: ["Nextjs", "Tailwindcss", "Nodejs", "Express", "MongoDB"],
            liveLink: "https://postalcode-myanmar.vercel.app/",
            githubLink:
                "https://github.com/nainglinthant111/Postal-Code-Myanmar-org",
        },
        {
            id: 4,
            title: "Ecommerce Website",
            description:
                "A powerful e-commerce web application designed for PC users, leveraging Angular and Bootstrap for a clean, responsive, and feature-rich interface. Includes functionalities like product filtering, secure checkout, and dynamic UI components optimized for desktop performance. Built with scalability in mind, ensuring a seamless shopping experience tailored specifically for PC users.",
            image: eco,
            tech: ["Algular", "Bootstrap", "JavaScript", "TypeScript"],
            liveLink: "https://nlt-eco.vercel.app/",
            githubLink: "hhttps://github.com/nainglinthant111/NLT-Angular",
        },
        {
            id: 5,
            title: "Employee Management System",
            description: "Angular CRUD testion project",
            image: payroll,
            tech: ["Angular", "Bootstrap", "JavaScript", "TypeScript"],
            liveLink: "https://hr-payroll-omega.vercel.app/",
            githubLink: "https://github.com/nainglinthant111/HR-Payroll",
        },
    ];

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
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-justify line-clamp-3">
                                {project.description}
                            </p>
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
