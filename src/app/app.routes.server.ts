import { RenderMode, ServerRoute } from '@angular/ssr';

const SLUGS = ["aviation-medicine",
"medical-administration",
"causal-link-assessment",
"medical-rights",
"diving-medicine",
"military-medicine",
"industry-consulting"];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'services/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(){
      
      console.log(SLUGS);
      return SLUGS.map(slug => ({ slug:String(slug) }) );
      
    }
  
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
