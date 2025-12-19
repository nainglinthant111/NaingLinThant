import { workExperience, education } from "@/service/settingData";
export default function AboutContent() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-bold mb-8">About Me</h2>

            <div className="mb-12 md:border-l-2 md:pl-2">
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-justify">
                    I'm a passionate Full Stack Developer and DevOps Engineer with expertise in building scalable cloud-native applications and infrastructure. I specialize in both frontend and backend development, with a strong focus on cloud technologies including AWS and GCP. My tech stack includes Java Spring Boot, JavaScript/TypeScript, React, Node.js, and Infrastructure as Code with Terraform.
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                    My diverse background in software development, networking, and system administration has equipped me with a unique perspective on building robust, scalable systems. I'm particularly passionate about implementing DevOps practices, CI/CD pipelines, and cloud infrastructure automation to streamline development workflows and improve system reliability.
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
