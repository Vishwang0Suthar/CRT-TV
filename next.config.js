/** @type {import('next').NextConfig} */
// const { withStoreConfig } = require("./store-config")
// const store = require("./store.config.json")

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}