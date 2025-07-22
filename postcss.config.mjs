/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        tailwindcss: {
            theme: {
                extend: {
                    colors: {
                        border: "#ccc",
                    },
                },
            },
        },
    },
};

export default config;
