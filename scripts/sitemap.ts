import * as fs from "fs";
import * as path from "path";
import { routes } from "./app/app.routes";
import { Route } from "@angular/router";




const HOSTNAME = "https://barakmedical.com";


interface RouteData {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
}

function isRouteData(data: any): data is RouteData {
  return (
    data &&
    typeof data === "object" &&
    typeof data.loc === "string"
  );
}


function flattenRoutes(routeList: Route[], basePath = ""): RouteData[] {
  
    const urls: RouteData[] = [];

    for (const route of routeList) {

      const hasValidData = isRouteData(route.data);
      let loc : string = '';
      let routeData: RouteData | undefined = undefined;
      
      if (isRouteData(route.data)) {

        routeData = { ...route.data };
        loc = routeData.loc;
        urls.push({
          loc,
          lastmod: route.data.lastmod,
          changefreq: route.data.changefreq,
          priority: route.data.priority,
        });


      } else {
        loc = route.path!; 
      }

      if (route.children) {
      
        const childUrls = flattenRoutes(route.children, loc);
        urls.push(...childUrls);
        
      }
      
    }

    return urls;

}

function buildXML(routesData: RouteData[]): string{

  const xmlUrls = routesData.map((routeData) => {
    return `
  <url>
    <loc>${HOSTNAME}/${routeData.loc}</loc>
    <lastmod>${routeData.lastmod}</lastmod>
    <changefreq>${routeData.changefreq}</changefreq>
    <priority>${routeData.priority}</priority>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
                      ${xmlUrls}
                      </urlset>`
  ;

}

const flattenedRoutesData : RouteData[] = flattenRoutes(routes);
const siteMapXML: string = buildXML(flattenedRoutesData);

const outputPath = path.join(__dirname, "dist", "your-project-name", "sitemap.xml");
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, siteMapXML);