import { RenderMode, ServerRoute } from '@angular/ssr';

const SERVICE_SLUGS = [
  "aviation-medicine",
  "medical-administration",
  "causal-link-assessment",
  "medical-rights",
  "diving-medicine",
  "military-medicine",
  "work-ability",
  "industry-consulting",
  "ocupational-medicine"];

const ECARD_SLUGS = [
  "yair-barak",
  "darya-levi-barak",
]

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams () {
      console.log(" in get prerenderParams");
      return SERVICE_SLUGS.map(slug => ({ slug }) );
    }
  
  },
  {
    path: 'e-card/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      console.log(" in get prerenderParams");
      return ECARD_SLUGS.map(slug => ({ slug }) );
    }
  
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
