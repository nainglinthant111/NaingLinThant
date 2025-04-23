"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, FacebookIcon, MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Medium from "../public/projects/medium.png";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
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
            <Sheet>
                <div className="container mx-auto px-4 md:px-6 max-w-6xl flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-xl font-bold text-gray-900 dark:text-white animate-bounce"
                    >
                        PORTFOLIO
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
                            <Link
                                href="https://medium.com/@nainglinthant1998"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={Medium.src}
                                    className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                />
                            </Link>

                            <ModeToggle />
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <ModeToggle />
                        <SheetTrigger asChild>
                            <Button
                                className="ml-2 -mt-2"
                                type="button"
                                asChild
                                variant="outline"
                                size="icon"
                            >
                                <MenuIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                            </Button>
                        </SheetTrigger>
                    </div>
                </div>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-center">
                            Naing Lin Thant
                        </SheetTitle>
                    </SheetHeader>
                    <Separator className="my-2" />
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center gap-4">
                            <nav className="flex flex-col text-lg space-y-6 px-4">
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
                        </div>
                        <div className="flex items-center justify-center gap-4">
                            <SheetClose asChild>
                                <Link
                                    href="https://github.com/nainglinthant111"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100018031602892"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FacebookIcon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" />
                                </Link>
                            </SheetClose>
                            <SheetClose asChild>
                                <Link
                                    href="https://medium.com/@nainglinthant1998"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={Medium.src}
                                        className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                                    />
                                </Link>
                            </SheetClose>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}
