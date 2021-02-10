// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const sharedConfig = require('./snowpack.config.shared');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    ...sharedConfig,
    packageOptions: {
        external: ['react', 'react-dom'],
    },
    optimize: {
        minify: true,
        treeshake: true,
    },
};
