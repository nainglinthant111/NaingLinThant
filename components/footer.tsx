import Link from "next/link";
import { Github, FacebookIcon } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link
                            href="/"
                            className="text-lg font-bold text-gray-900 dark:text-white"
                        >
                            <span className="text-[#42446e] dark:text-[#d7ffe0]">
                                {"{ "}
                            </span>
                            Naing Lin Thant
                            <span className="text-[#42446e] dark:text-[#d7ffe0]">
                                {" }"}
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-6 mb-4 md:mb-0">
                        <Link
                            href="tel:09789224227"
                            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            +959 789 224 227
                        </Link>
                        <Link
                            href="mailto:nainglinthant1998@gmail.com"
                            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                        >
                            nainglinthant1998@gmail.com
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="https://github.com/nainglinthant111"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                        </Link>
                        <Link
                            href="https://www.facebook.com/profile.php?id=100018031602892"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                        </Link>
                    </div>
                </div>

                <div className="mt-6 text-center md:text-left text-sm text-gray-500 dark:text-gray-400">
                    © {currentYear} | Designed and coded with ❤️️ by Naing Lin
                    Thant
                </div>
            </div>
        </footer>
    );
}
