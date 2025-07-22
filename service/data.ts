import portfolio from "../public/projects/image.png";
import foodOrder from "../public/projects/foodorder.png";
import postalcode from "../public/projects/myanmarpostalcode.png";
import eco from "../public/projects/eco.png";
import jwt from "../public/projects/jwt.png";
import voting from "../public/projects/voting.png";
export const projects = [
    {
        id: 1,
        title: "My PortFolio",
        description:
            "A personal web portfolio built to showcase my projects, skills, and experiences in a clean and professional manner. Designed with responsive layouts using HTML, CSS, and JavaScript, ensuring optimal performance across all devices. Integrated interactive elements and animations to enhance user engagement while maintaining simplicity and elegance.",
        image: portfolio,
        tech: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwindcss"],
        liveLink: "https://nainglinthant.vercel.app/",
        githubLink: "https://github.com/nainglinthant111/NaingLinThant",
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
        title: "Token Generator",
        description:
            "A utility web application built with Angular that generates and manages API keys, token keys, and encryption/decryption keys. It allows users to convert JSON data and a secret key into a JWT (JSON Web Token), and also decode a JWT back into readable JSON using the provided key. Perfect for developers testing authentication flows, APIs, and secure data exchange.",
        image: jwt,
        tech: ["Angular", "Bootstrap", "JavaScript", "TypeScript"],
        liveLink: "https://generate-jwt.nainglinthant.site/ ",
        githubLink: "", // Add GitHub URL when available
    },
    {
        id: 6,
        title: "King & Queen Voting System",
        description:
            "Next.js Fontend project for testing login => user : user@example.com, admin : admin@example.com ,pass : 12345678 ",
        image: voting,
        tech: ["Next.js", "TailwindCss", "Shadcn", "JavaScript", "TypeScript"],
        liveLink: "https://voting-beta-seven.vercel.app/",
        githubLink: "https://github.com/nainglinthant111/kingqueenvoting",
    },
];
