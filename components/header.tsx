"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, FacebookIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Tech Stack", path: "/tech-stack" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="py-6 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl flex justify-between items-center">
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-900 dark:text-white"
                >
                    <span className="text-[#42446e] dark:text-[#d7ffe0]">
                        {"{ "}
                    </span>
                    Naing Lin Thant
                    <span className="text-[#42446e] dark:text-[#d7ffe0]">
                        {" }"}
                    </span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex items-center space-x-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm ${
                                    pathname === item.path
                                        ? "text-[#42446e] dark:text-[#d7ffe0] font-medium"
                                        : "text-gray-600 dark:text-gray-300 hover:text-[#42446e] dark:hover:text-[#d7ffe0]"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-3">
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

                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    );
}
