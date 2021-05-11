export default {
    target: 'static',
    head: {
        link: [
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { href: 'https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap', rel: 'stylesheet' },
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    css: [
        '@/assets/css/style.scss'
    ],
    plugins: [
        { src: 'plugins/owl.js', ssr: false }
    ],
    components: true,
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/device',
        '@nuxtjs/pwa',
    ],
    device: {
        refreshOnResize: true
    },
    modules: [
        [
            '@nuxtjs/device',
            { refreshOnResize: true }
        ],
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],
    axios: {},
    pwa: {
        manifest: {
            lang: 'fr'
        }
    },
    build: {}
}