const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    }
})

module.exports = {
    publicRuntimeConfig: {
        BASE_URL: process.env.BASE_URL
    },
    images: {
        domains: ["images.ctfassets.net"]
    }
}
