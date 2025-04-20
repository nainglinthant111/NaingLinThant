import nainglinthant from "../public/nainglinthant.png";
export default function Hero() {
    return (
        <section className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between lg:px-12">
            <div className="md:w-2/3">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="block mb-2">Hi 👋,</span>
                    <span className="block mb-2">My name is</span>
                    <span className="text-[#42446e] dark:text-[#d7ffe0]">
                        Naing Lin Thant
                    </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    I build things for web
                </p>
            </div>
            <div className="mt-8 md:mt-0">
                <div className="rounded-full border-4 border-gray-200 dark:border-gray-700 overflow-hidden w-48 h-48">
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
