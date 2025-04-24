import nainglinthant from "../public/nainglinthant.png";
export default function Hero() {
    return (
        <section className="py-16 flex flex-col md:flex-row items-center justify-between lg:px-10">
            <div className="md:w-1/2 md:border-l-2 md:pl-2 md:border-gray-700">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="block mb-2">Hi 👋,</span>
                    <span className="text-[#42446e] dark:text-[#d7ffe0]">
                        I'm Naing Lin Thant
                    </span>
                </h1>
                <p className="text-md text-justify md:pr-8 text-gray-600 dark:text-gray-300">
                    I'm a Full Stack Developer passionate about building
                    efficient and scalable web applications. With expertise in
                    both front-end and back-end technologies, I strive to create
                    seamless user experiences and robust server-side
                    functionalities.
                </p>
            </div>
            <div className="mt-8 md:mt-0">
                <div className="rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden w-48 h-48 md:w-[500px] md:h-[500px]">
                    <img
                        src={nainglinthant.src}
                        alt="Naing Lin Thant"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    );
}
