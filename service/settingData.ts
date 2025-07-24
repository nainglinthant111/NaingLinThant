import portfolio from "../public/projects/image.png";
import foodOrder from "../public/projects/foodorder.png";
import postalcode from "../public/projects/myanmarpostalcode.png";
import eco from "../public/projects/eco.png";
import jwt from "../public/projects/jwt-logo.png";
import voting from "../public/projects/voting.png";

export const projects = [
    {
        id: 1,
        title: "My PortFolio",
        description:
            "A personal web portfolio built to showcase my projects, skills, and experiences in a clean and professional manner. Designed with responsive layouts using HTML, CSS, and JavaScript, ensuring optimal performance across all devices. Integrated interactive elements and animations to enhance user engagement while maintaining simplicity and elegance.",
        image: portfolio,
        tech: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwindcss"],
        liveLink: "https://portfolio.nainglinthant.site/",
        githubLink: "https://github.com/nainglinthant111",
    },
    {
        id: 2,
        title: "Food Order App",
        description:
            "An intuitive food ordering web application designed to provide a seamless user experience for browsing menus and placing orders. Built using modern technologies like React.js, Node.js, and MongoDB, ensuring fast performance and scalability. Features include real-time order tracking, secure payment integration, and a responsive design for all devices.",
        image: foodOrder,
        tech: ["React", "JavaScript", "Tailwindcss"],
        liveLink: "https://my-food-order.vercel.app/",
        githubLink: "https://github.com/nainglinthant111",
    },
    {
        id: 3,
        title: "Myanmar Postal Code Dos",
        description:
            "A web application designed to simplify searching for postal codes across Myanmar, making it accessible and user-friendly. Built with React.js and integrated with a custom database for accurate and up-to-date postal code information. Features a clean, responsive design ensuring smooth performance on both desktop and mobile devices",
        image: postalcode,
        tech: ["Nextjs", "Tailwindcss", "Nodejs", "Express", "MongoDB"],
        liveLink: "https://postalcode-myanmar.vercel.app/",
        githubLink: "https://github.com/nainglinthant111",
    },
    {
        id: 4,
        title: "Ecommerce Website",
        description:
            "A powerful e-commerce web application designed for PC users, leveraging Angular and Bootstrap for a clean, responsive, and feature-rich interface. Includes functionalities like product filtering, secure checkout, and dynamic UI components optimized for desktop performance. Built with scalability in mind, ensuring a seamless shopping experience tailored specifically for PC users.",
        image: eco,
        tech: ["Algular", "Bootstrap", "JavaScript", "TypeScript"],
        liveLink: "https://nlt-eco.vercel.app/",
        githubLink: "hhttps://github.com/nainglinthant111",
    },
    {
        id: 5,
        title: "Token Generator",
        description:
            "ဒီစနစ်သည် API Key နှင့် Secret Key များကို ဖန်တီးပေးနိုင်ပါသည်။ JSON ဒေတာနှင့် Key တစ်ခုကိုထည့်သွင်းပြီး Token (JWT) အဖြစ်ပြောင်းလဲနိုင်ပြီး၊ Token နှင့် Key ကိုထည့်သွင်းကာ မူရင်း JSON ဒေတာကို ပြန်လည်ရယူနိုင်ပါသည်။ ဒီ tool သည် Developer များအတွက် Authentication စနစ်များကို စမ်းသပ်ရန်နှင့် နားလည်ရန် အထူးသင့်တော်ပါသည်။",
        image: jwt,
        tech: ["Nodejs"],
        liveLink: "https://token-generate.nainglinthant.site/",
        githubLink: "",
    },
    {
        id: 6,
        title: "King & Queen Voting System",
        description:
            "Next.js Fontend project for testing login => user : user@example.com, admin : admin@example.com ,pass : 12345678 ",
        image: voting,
        tech: ["Next.js", "TailwindCss", "Shadcn", "JavaScript", "TypeScript"],
        liveLink: "https://voting-beta-seven.vercel.app/",
        githubLink: "https://github.com/nainglinthant111",
    },
];

export const workExperience = [
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
        duration: "2020 ~ 2023",
        description:
            "Worked as a sailer, gaining valuable experience in teamwork, problem-solving, and adaptability in challenging environments.",
    },
    {
        title: "Robotic Volunteer",
        company: "University Of Computer Studies in Banmaw (UCSB)",
        duration: "2019 ~ 2020",
        description:
            "Volunteered in robotics projects, helping to design, build, and program robots for various applications and competitions.",
    },
    {
        title: "CCTV and Networking Service",
        company: "University Of Computer Studies in Banmaw (UCSB)",
        duration: "2017 ~ 2019",
        description:
            "Provided CCTV installation and networking services, ensuring proper setup and maintenance of security systems and network infrastructure.",
    },
];

export const education = [
    {
        degree: "Bachelor of Computer Science (4th Year)",
        institution: "University Of Computer Studies in Banmaw",
        duration: "Stopped in 2020",
        description:
            "Studying computer science with a focus on software development and programming technologies.",
    },
];
