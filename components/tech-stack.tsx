import html from "../public/icons/html.svg";
import css from "../public/icons/css.svg";
import bootstrap from "../public/icons/bootstrap.svg";
import tailwind from "../public/icons/tailwindCSS-Light.svg";
import javascript from "../public/icons/javaScript.svg";
import typescript from "../public/icons/typeScript.svg";
import angular from "../public/icons/angular-Light.svg";
import react from "../public/icons/react-Light.svg";
import Next from "../public/icons/nextJS-Light.svg";
import Nest from "../public/icons/nestJS-Light.svg";
import nodejs from "../public/icons/nodeJS-Light.svg";
import java from "../public/icons/java-Light.svg";
import springBoot from "../public/icons/spring-Light.svg";
import mongoDb from "../public/icons/mongoDB.svg";
import mysql from "../public/icons/mySQL-Light.svg";
import postgresql from "../public/icons/postgreSQL-Light.svg";
import cobol from "../public/icons/cobol.svg";
import prisma from "../public/icons/prisma.svg";
import Redis from "../public/icons/redis-Light.svg";
import docker from "../public/icons/docker.svg";
import postman from "../public/icons/postman.svg";
import Figma from "../public/icons/figma-Light.svg";

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
        { name: "Next.js", icon: Next },
        { name: "Nest.js", icon: Nest },
        { name: "Node.js", icon: nodejs },
        { name: "Java", icon: java },
        { name: "Spring Boot", icon: springBoot },
        { name: "MongoDB", icon: mongoDb },
        { name: "MySQL", icon: mysql },
        { name: "PostgreSQL", icon: postgresql },
        { name: "COBOL", icon: cobol },
        { name: "Prisma ORM", icon: prisma },
        { name: "Redis", icon: Redis },
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
