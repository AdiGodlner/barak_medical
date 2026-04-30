# TODO

<<<<<<< HEAD

- email cloudfliar worker 

- optimize images
- TODO chagne metatag image and let MAYA choose descriptions for each page 
=======
- metadata for each page 
- image optimization


# 🏥 Barak Medical - SEO & Metadata Implementation Plan

## 1. Models & Data Structures
- [ ] **Update `SeoData` Model**: Expand `src/app/models/seo.model.ts` to include:
    - `title: string`
    - `description: string`
    - `image?: string` (URL for Open Graph)
    - `url?: string` (The page path)
    - `type?: 'website' | 'article'`
- [ ] **Define Static Defaults**: Create a constant for the default "fallback" metadata (e.g., clinic logo, default description).

## 2. SeoService Enhancements
- [ ] **Expand `updateMeta`**: Add logic to update the following tags:
    - `og:title`, `og:description`, `og:image`, `og:url`
    - `twitter:card` (set to `summary_large_image`)
    - `twitter:title`, `twitter:description`, `twitter:image`
- [ ] **Implement JSON-LD Schema**: 
    - Create an `updateSchema(data: any)` method.
    - Use the `DOCUMENT` token to inject a `<script type="application/ld+json">` tag into the `<head>`.
    - Include `MedicalBusiness` type with: Name, Address (Kiryat Ono), Phone, and `sameAs` linking to the Google Business Profile.

## 3. Page-Level Implementation
- [ ] **Static Pages**: Call `updateSeoPageData` in `ngOnInit` for:
    - `HomeComponent`
    - `AboutComponent`
    - `LocationComponent`
    - `AccessibilityComponent`
- [ ] **Dynamic Service Pages**:
    - In `GenericServiceComponent`, extract the `:slug` from the route.
    - Map the slug to specific content (title, specific treatment image, description).
    - Update SEO tags based on the specific medical service being viewed.

## 4. Assets & Images
- [ ] **Prepare OG Images**: Create/Export images ($1200 \times 630$px):
    - `clinic-main.jpg` (Home/General)
    - `team.jpg` (About)
    - `location-map.jpg` (Contact/Location)
    - Specific images for each service (e.g., `physiotherapy.jpg`).
- [ ] **Optimize Image Filenames**: Ensure names are SEO-friendly (e.g., `barak-medical-kiryat-ono-clinic.jpg`).

## 5. SSG & Build Configuration
- [ ] **Check `server.ts`**: Ensure the server-side logic correctly picks up the metadata changes during pre-rendering.
- [ ] **Verify Routes for Prerendering**: 
    - Ensure all `/services/:slug` paths are included in the prerender configuration so they generate static HTML files.

## 6. Verification (Local Test)
- [ ] **Build Site**: Run `ng build`.
- [ ] **Serve Locally**: Run `npx http-server dist/[project-name]/browser`.
- [ ] **Source Code Audit**: 
    - Open `localhost:8080`.
    - Right-click -> "View Page Source".
    - Confirm `<title>` and `<meta>` tags contain the actual text and not just Angular placeholders.
- [ ] **Schema Validation**: Copy the page source and paste it into the [Schema Markup Validator](https://validator.schema.org/) to check for errors in your JSON-LD.

## 7. Launch & Post-Launch
- [ ] **Submit Sitemap**: Provide the new `sitemap.xml` to Google Search Console.
- [ ] **Social Debugging**: Run the live URLs through the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to ensure the "WhatsApp preview" looks perfect.
>>>>>>> 569a741 (temp)
