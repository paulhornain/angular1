module.exports = {
    // site config
    base: '/angular-security-training/',
    lang: 'en-US',
    title: 'Angular Security Training',
    description: 'Learn how to prevent common threats in your Angular web application !',
    head: [
        ['link', { rel: 'icon', href: '/logo.svg' }],
       // ['meta', { name: 'theme-color', content: '#C3002F' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    // theme and its config
   // theme: '@vuepress/theme-default',
    themeConfig: {

        logo: '/logo.svg',
        sidebar: [
           "/prerequisites/",
           "/introduction/",
           "/common-threats/",
           {
                title: 'jwt',
                path: '/common-threats/jwt/',
                collapsable: true,
                children: [
                   "/common-threats/jwt/jwt-overview.md",
                   "/common-threats/jwt/jwt-workflow.md",
                   "/common-threats/jwt/jwt-storage.md",
                   "/common-threats/jwt/jwt-known-threats.md",
                   "/common-threats/jwt/jwt-best-current-practices.md",
                   "/common-threats/jwt/jwt-pw.md"
                ]
            },
            {
                title: 'csrf',
                path: '/common-threats/csrf/',
                collapsable: true,
                children: [
                   "/common-threats/csrf/csrf-overview.md",
                   "/common-threats/csrf/csrf-detection.md",
                   "/common-threats/csrf/csrf-defense.md",
                   "/common-threats/csrf/csrf-angular.md",
                   "/common-threats/csrf/csrf-pw.md"
                ]
            },
            {
                title: 'xss',
                path: '/common-threats/xss/',
                collapsable: true,
                children: [
                   "/common-threats/xss/xss-overview.md",
                   "/common-threats/xss/xss-detection.md",
                   "/common-threats/xss/xss-defense.md",
                   "/common-threats/xss/xss-angular.md",
                   "/common-threats/xss/xss-pw.md"
                ]
            },
            {
                title: 'csp',
                path: '/csp/',
                collapsable: true,
                children: [
                  "/csp/csp-overview.md",
                  "/csp/csp-defense.md",
                  "/csp/csp-angular.md",
                  "/csp/csp-pw.md"
                ]
            },
            {
                title: 'ssti',
                path: '/common-threats/ssti/',
                collapsable: true,
                children: [
                   "/common-threats/ssti/ssti-overview.md",
                   "/common-threats/ssti/ssti-angular.md"
                ]
            },
            {
                title: 'third-party',
                path: '/common-threats/sca/',
                collapsable: true,
                children: [
                   "/common-threats/sca/sca-overview.md",
                   "/common-threats/sca/sca-detection.md",
                   "/common-threats/sca/sca-defense.md",
                   "/common-threats/sca/sca-angular.md",
                   "/common-threats/sca/sca-pw.md"
                ]
            },

            "/advanced/",
            {
                 title: 'api',
                 path: '/advanced/api/',
                 collapsable: true,
                 children: [
                    "/advanced/api/api-overview.md",
                    "/advanced/api/api-defense.md",
                    "/advanced/api/api-pw.md"
                 ]
            },
            {
                 title: 'xssi',
                 path: '/advanced/xssi/',
                 collapsable: true,
                 children: [
                     "/advanced/xssi/xssi-overview.md",
                     "/advanced/xssi/xssi-defense.md",
                     "/advanced/xssi/xssi-angular.md",
                     "/advanced/xssi/xssi-pw.md"
                 ]
            },
           "/continuous-prevention/"
        ]
    },
}
