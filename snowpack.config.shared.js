// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: { url: '/', static: true },
        src: '/',
    },
    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-dotenv',
        [
            '@snowpack/plugin-babel',
            {
                transformOptions: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['supports es6-module'],
                                },
                            },
                        ],
                        '@babel/preset-typescript',
                        '@babel/preset-react',
                    ],
                    plugins: ['@babel/plugin-proposal-class-properties'],
                },
            },
        ],
    ],
    buildOptions: {
        out: 'dist',
        metaUrlPath: 'modules',
    },
};
