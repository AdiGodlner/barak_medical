🏥 Barak Medical - Final Launch Checklist
1. Accessibility & UX

    [ ] Accessibility Fixes: Add aria-hidden="true" to decorative icons and ensure the "Exit" button has a clear aria-label or alt text.

2. Metadata & Social (Angular SeoService)

    [ ] Expand updateMeta:

        [ ] Open Graph: og:title, og:description, og:image (1200x630), og:url.

        [ ] Twitter Cards: twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image.

    [ ] Implement JSON-LD Schema (updateSchema):

        [ ] Inject <script type="application/ld+json"> into <head>.

        [ ] Set type to MedicalBusiness or Physician.

        [ ] Crucial: Include sameAs (The Google Maps link provided by the designer).

    [ ] Canonical Tags: Ensure every page has a link rel="canonical" pointing to the primary URL to fix the Search Console error.

3. Asset Optimization (The Designer Request)

    [ ] Image Sizes:

        [ ] Request Desktop Hero: 1920px width.

        [ ] Request Mobile Hero: 750px width.

        [ ] Request OG Images: 1200x630px (Clinic, Team, Map, Services).

    [ ] Image Format: Request all assets as WebP.

    [ ] Quality Target: Request 77%–80% quality (experiment to find the point where file size drops without visible banding).

    [ ] SEO Naming: Rename files to aviation-medicine-barak-medical.webp etc., before uploading.

4. Angular Performance (Sub-2s Goal)

    [ ] Component Flattening: Move Footer and Hero logic directly into the Homepage component to reduce JS chunk overhead and HTTP requests.

    [ ] Remove Unused JS: Audit and strip any unused libraries or decorative JS.

    [ ] LCP Optimization: Add fetchpriority="high" to the main Hero <img> tag.

    [ ] Defer Scripts: Ensure non-essential scripts (Analytics, Maps) are loaded with defer.

5. Validation & Google Business Profile

    [ ] Designer Sync:

        [ ] Request the Google Maps Public URL for the sameAs tag.

        [ ] Ask them to confirm the Business Address and Category (Medical) are updated on the Google Profile.

    [ ] Schema Validation: Test the live code on validator.schema.org.

    [ ] Social Debugging: Run the URL through the Facebook Sharing Debugger to fix the WhatsApp preview.

    [ ] Search Console: Submit the sitemap.xml and click "Validate Fix" on the duplicate content error.