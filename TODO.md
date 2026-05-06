# 🏥 Barak Medical - SEO & Metadata Implementation Plan

## 0. ARIA HIDDEN EXIT BUTTON ALT AND ACCISSABILATY CHECKS 
## 1. SeoService Enhancements
- [ ] **Expand `updateMeta`**: Add logic to update the following tags:
    - `og:title`, `og:description`, `og:image`, `og:url`
    - `twitter:card` (set to `summary_large_image`)
    - `twitter:title`, `twitter:description`, `twitter:image`
- [ ] **Implement JSON-LD Schema**: 
    - Create an `updateSchema(data: any)` method.
    - Use the `DOCUMENT` token to inject a `<script type="application/ld+json">` tag into the `<head>`.
    - Include `MedicalBusiness` type with: Name, Address (Kiryat Ono), Phone, and `sameAs` linking to the Google Business Profile.

## 2. Assets & Images
- [ ] **Prepare OG Images**: Create/Export images ($1200 \times 630$px):
    - `clinic-main.jpg` (Home/General)
    - `team.jpg` (About)
    - `location-map.jpg` (Contact/Location)
    - Specific images for each service (e.g., `physiotherapy.jpg`).
- [ ] **Optimize Image Filenames**: Ensure names are SEO-friendly (e.g., `barak-medical-kiryat-ono-clinic.jpg`).

## 3. Verification (Local Test)
 [ ] **Schema Validation**: Copy the page source and paste it into the [Schema Markup Validator](https://validator.schema.org/) to check for errors in your JSON-LD.

## 4. Launch & Post-Launch
- [ ] **Submit Sitemap**: Provide the new `sitemap.xml` to Google Search Console.
- [ ] **Social Debugging**: Run the live URLs through the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to ensure the "WhatsApp preview" looks perfect.

## 5. light house angular speed optimization