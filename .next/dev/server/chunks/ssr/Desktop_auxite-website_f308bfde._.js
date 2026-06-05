module.exports = [
"[project]/Desktop/auxite-website/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auxite-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "Auxite – On-Chain Tokenized Precious Metals",
    description: "Buy, sell, and deploy physically allocated gold, silver, platinum, and palladium into institutional yield programs — fully on-chain.",
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                sizes: 'any'
            },
            {
                url: '/favicon.svg',
                type: 'image/svg+xml'
            }
        ],
        apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest',
    metadataBase: new URL('https://auxite.io')
};
// JSON-LD Structured Data — Organization + WebSite + Product
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': 'https://auxite.io/#organization',
            name: 'Auxite',
            url: 'https://auxite.io',
            logo: {
                '@type': 'ImageObject',
                url: 'https://auxite.io/auxite-main-logo.png',
                width: 512,
                height: 512
            },
            description: 'Auxite is a digital precious metals platform offering tokenized, physically allocated gold, silver, platinum, and palladium with institutional custody and on-chain settlement.',
            sameAs: [
                'https://x.com/AuxiteGlobal'
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                url: 'https://auxite.io/en/contact'
            }
        },
        {
            '@type': 'WebSite',
            '@id': 'https://auxite.io/#website',
            url: 'https://auxite.io',
            name: 'Auxite',
            description: 'On-Chain Tokenized Precious Metals — Buy, sell, and deploy physically allocated gold, silver, platinum, and palladium into institutional yield programs.',
            publisher: {
                '@id': 'https://auxite.io/#organization'
            },
            inLanguage: [
                'en',
                'tr',
                'de',
                'fr',
                'ar',
                'ru'
            ],
            potentialAction: {
                '@type': 'SearchAction',
                target: 'https://auxite.io/en?q={search_term_string}',
                'query-input': 'required name=search_term_string'
            }
        },
        {
            '@type': 'FinancialProduct',
            '@id': 'https://auxite.io/#auxg',
            name: 'Auxite Gold (AUXG)',
            description: 'Tokenized, physically allocated gold backed by LBMA Good Delivery bars. Each AUXG token represents 1 gram of segregated, fully allocated gold held in institutional custody.',
            provider: {
                '@id': 'https://auxite.io/#organization'
            },
            url: 'https://auxite.io/en/metals/auxg',
            category: 'Tokenized Precious Metals',
            additionalType: 'https://schema.org/InvestmentOrDeposit'
        },
        {
            '@type': 'FinancialProduct',
            '@id': 'https://auxite.io/#auxs',
            name: 'Auxite Silver (AUXS)',
            description: 'Tokenized, physically allocated silver backed by LBMA Good Delivery bars. Each AUXS token represents 1 gram of segregated, fully allocated silver held in institutional custody.',
            provider: {
                '@id': 'https://auxite.io/#organization'
            },
            url: 'https://auxite.io/en/metals/auxs',
            category: 'Tokenized Precious Metals'
        },
        {
            '@type': 'FinancialProduct',
            '@id': 'https://auxite.io/#auxpt',
            name: 'Auxite Platinum (AUXPT)',
            description: 'Tokenized, physically allocated platinum backed by LPPM Approved bars. Each AUXPT token represents 1 gram of segregated, fully allocated platinum.',
            provider: {
                '@id': 'https://auxite.io/#organization'
            },
            url: 'https://auxite.io/en/metals/auxpt',
            category: 'Tokenized Precious Metals'
        },
        {
            '@type': 'FinancialProduct',
            '@id': 'https://auxite.io/#auxpd',
            name: 'Auxite Palladium (AUXPD)',
            description: 'Tokenized, physically allocated palladium backed by LPPM Approved bars. Each AUXPD token represents 1 gram of segregated, fully allocated palladium.',
            provider: {
                '@id': 'https://auxite.io/#organization'
            },
            url: 'https://auxite.io/en/metals/auxpd',
            category: 'Tokenized Precious Metals'
        }
    ]
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        dangerouslySetInnerHTML: {
                            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPJ95Z2C');`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: "anonymous"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
                        rel: "stylesheet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#0B1121"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        async: true,
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-17999284951"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17999284951');
            `
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(jsonLd)
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '938812332212962');
              fbq('track', 'PageView');
            `
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            height: "1",
                            width: "1",
                            style: {
                                display: 'none'
                            },
                            src: "https://www.facebook.com/tr?id=938812332212962&ev=PageView&noscript=1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                style: {
                    fontFamily: "'Inter', sans-serif",
                    margin: 0,
                    padding: 0,
                    background: '#0B1121',
                    color: '#E8E8E8'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auxite$2d$website$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: "https://www.googletagmanager.com/ns.html?id=GTM-TPJ95Z2C",
                            height: "0",
                            width: "0",
                            style: {
                                display: 'none',
                                visibility: 'hidden'
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/auxite-website/src/app/layout.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/auxite-website/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/auxite-website/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=Desktop_auxite-website_f308bfde._.js.map