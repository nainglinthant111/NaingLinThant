export default function AboutContent() {
    const workExperience = [
        {
            title: "Full Stack Developer",
            company: "GIC Myanmar",
            duration: "2023 - Present",
            description:
                "Working as a full stack developer utilizing various technologies including java Spring Boot, JavaScript, TypeScript, React, Node.js, and databases.",
        },
        {
            title: "Sailer",
            company: "Faminy Win Ship Company",
            duration: "2020 - 2023",
            description:
                "Worked as a sailer, gaining valuable experience in teamwork, problem-solving, and adaptability in challenging environments.",
        },
        {
            title: "Robotic Volunteer",
            company: "University Of Computer Studies in Banmaw (UCSB)",
            duration: "2019 - 2020",
            description:
                "Volunteered in robotics projects, helping to design, build, and program robots for various applications and competitions.",
        },
        {
            title: "CCTV and Networking Service",
            company: "University Of Computer Studies in Banmaw (UCSB)",
            duration: "2017 - 2019",
            description:
                "Provided CCTV installation and networking services, ensuring proper setup and maintenance of security systems and network infrastructure.",
        },
    ];

    const education = [
        {
            degree: "Bachelor of Computer Science (4th Year)",
            institution: "University Of Computer Studies in Banmaw",
            duration: "Stopped in 2020",
            description:
                "Studying computer science with a focus on software development and programming technologies.",
        },
    ];

    return (
        <section className="py-16">
            <h2 className="text-2xl font-bold mb-8">About Me</h2>

            <div className="mb-12 md:border-l-2 md:pl-2">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                    I'm a passionate full stack developer with experience in
                    building modern web applications and services. I specialize
                    in both frontend and backend development, working with a
                    variety of technologies and frameworks.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                    My diverse background includes experience in networking,
                    robotics, and maritime work, which has helped me develop
                    strong problem-solving skills and adaptability to different
                    environments and challenges.
                </p>
            </div>

            <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6">Work Experience</h3>
                <div className="space-y-6">
                    {workExperience.map((job, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_100px] gap-4"
                        >
                            <div>
                                <h4 className="font-medium text-[#42446e] dark:text-[#d7ffe0]">
                                    {job.title}
                                </h4>
                                <div className="md:border-l-2 md:pl-2">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {job.company}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-justify">
                                        {job.description}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {job.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_100px] gap-4"
                        >
                            <div>
                                <h4 className="font-medium text-[#42446e] dark:text-[#d7ffe0]">
                                    {edu.degree}
                                </h4>
                                <div className="md:border-l-2 md:pl-2">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {edu.institution}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {edu.duration}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
