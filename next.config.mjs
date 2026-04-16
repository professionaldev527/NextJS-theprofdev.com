/** @type {import('next').NextConfig} */
const nextConfig = {
    // Webpack config for wowjs UMD module support
    webpack: (config, { isServer }) => {
        // Fix for wowjs UMD module
        if (!isServer) {
            // Ensure wowjs is not treated as external
            config.externals = config.externals || [];
            if (Array.isArray(config.externals)) {
                config.externals = config.externals.filter((external) => typeof external !== "function" || !external.toString().includes("wowjs"));
            }
        }
        return config;
    },
    // Silence Turbopack warning when using webpack config
    // Vercel will use webpack when webpack config is present
};

export default nextConfig;
