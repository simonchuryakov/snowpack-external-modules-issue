// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
const sharedConfig = require('./snowpack.config.shared');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    ...sharedConfig,
    devOptions: {
        port: 3001,
    },
};
