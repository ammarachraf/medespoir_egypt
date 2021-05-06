export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        link: [
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { href: 'https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap', rel: 'stylesheet' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/style.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: 'plugins/owl.js', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/device',
        '@nuxtjs/pwa',
    ],
    device: {
        refreshOnResize: true
    },
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/device',
            { refreshOnResize: true }
        ],
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'fr'
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}