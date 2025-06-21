"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var home_component_1 = require("./pages/home/home.component");
var lazy_loaders_1 = require("./lazy-loaders");
exports.routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: {
            loc: '/',
            lastmod: '2025-06-21',
            changefreq: 'monthly',
            priority: 1.0
        }
    },
    {
        path: 'about',
        loadComponent: lazy_loaders_1.lazyLoadAbout,
        data: {
            loc: '/about',
            lastmod: '2025-06-10',
            changefreq: 'monthly',
            priority: 0.7
        }
    },
    {
        path: 'location',
        loadComponent: lazy_loaders_1.lazyLoadLocation,
        data: {
            loc: '/location',
            lastmod: '2025-06-10',
            changefreq: 'monthly',
            priority: 0.7
        }
    },
    {
        path: 'accessibility-statement',
        loadComponent: lazy_loaders_1.lazyLoadAccessibility,
        data: {
            loc: '/accessibility-statement',
            lastmod: '2025-06-10',
            changefreq: 'monthly',
            priority: 0.6
        }
    },
    {
        path: 'services',
        children: [
            {
                path: 'causal-link-assessment',
                loadComponent: lazy_loaders_1.lazyLoadCausalLinkAssessment,
                data: {
                    loc: '/services/causal-link-assessment',
                    lastmod: '2025-06-15',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'industry-consulting',
                loadComponent: lazy_loaders_1.lazyLoadIndustryConsulting,
                data: {
                    loc: '/services/industry-consulting',
                    lastmod: '2025-06-20',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'medical-rights',
                loadComponent: lazy_loaders_1.lazyLoadMedicalRights,
                data: {
                    loc: '/services/medical-rights',
                    lastmod: '2025-06-15',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'work-ability',
                loadComponent: lazy_loaders_1.lazyLoadWorkAbility,
                data: {
                    loc: '/services/work-ability',
                    lastmod: '2025-06-10',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'aviation-medicine',
                loadComponent: lazy_loaders_1.lazyLoadAviationMedicine,
                data: {
                    loc: '/services/aviation-medicine',
                    lastmod: '2025-06-06',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'diving-medicine',
                loadComponent: lazy_loaders_1.lazyLoadDivingMedicine,
                data: {
                    loc: '/services/diving-medicine',
                    lastmod: '2025-06-01',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'medical-administration',
                loadComponent: lazy_loaders_1.lazyLoadMedicalAdministration,
                data: {
                    loc: '/services/medical-administration',
                    lastmod: '2025-06-10',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            },
            {
                path: 'military-medicine',
                loadComponent: lazy_loaders_1.lazyLoadMilitaryMedicine,
                data: {
                    loc: '/services/military-medicine',
                    lastmod: '2025-06-20',
                    changefreq: 'monthly',
                    priority: 0.7
                }
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }, // catch-all reroute to home
];
