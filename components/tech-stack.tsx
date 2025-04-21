import html from "../public/icons/HTML.svg";
import css from "../public/icons/CSS.svg";
import bootstrap from "../public/icons/bootstrap.svg";
import tailwind from "../public/icons/TailwindCSS-Light.svg";
import javascript from "../public/icons/JavaScript.svg";
import typescript from "../public/icons/TypeScript.svg";
import angular from "../public/icons/Angular-Light.svg";
import react from "../public/icons/React-Light.svg";
import nodejs from "../public/icons/NodeJS-Light.svg";
import java from "../public/icons/Java-Light.svg";
import springBoot from "../public/icons/Spring-Light.svg";
import mongoDb from "../public/icons/MongoDB.svg";
import mysql from "../public/icons/MySQL-Light.svg";
import postgresql from "../public/icons/PostgreSQL-Light.svg";
import cobol from "../public/icons/cobol.svg";
import prisma from "../public/icons/Prisma.svg";
import docker from "../public/icons/Docker.svg";
import postman from "../public/icons/Postman.svg";
import Figma from "../public/icons/Figma-Light.svg";

export default function TechStack() {
    const technologies = [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "Bootstrap", icon: bootstrap },
        { name: "Tailwind", icon: tailwind },
        { name: "JavaScript", icon: javascript },
        { name: "TypeScript", icon: typescript },
        { name: "Angular", icon: angular },
        { name: "React", icon: react },
        { name: "Node.js", icon: nodejs },
        { name: "Java", icon: java },
        { name: "Spring Boot", icon: springBoot },
        { name: "MongoDB", icon: mongoDb },
        { name: "MySQL", icon: mysql },
        { name: "PostgreSQL", icon: postgresql },
        { name: "COBOL", icon: cobol },
        { name: "Prisma ORM", icon: prisma },
        { name: "Postman", icon: postman },
        { name: "Docker", icon: docker },
        { name: "Figma", icon: Figma },
    ];

    return (
        <section className="py-16">
            <h2 className="text-2xl font-bold text-center mb-2">
                My Tech Stack
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
                Technologies I've been working with recently
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center justify-center"
                    >
                        <div className="w-12 h-12 relative mb-2">
                            <img
                                src={tech.icon.src}
                                alt={tech.name}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
