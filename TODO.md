2. Metadata & Social (Angular SeoService)

    [ ] Expand updateMeta:

        [ ] Open Graph: og:title, og:description, og:image (1200x630), og:url.

        [ ] Twitter Cards: twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image.

    [ ] Implement JSON-LD Schema (updateSchema):

        [ ] Inject <script type="application/ld+json"> into <head>.

        [ ] Set type to MedicalBusiness or Physician.

        [ ] Crucial: Include sameAs (The Google Maps link provided by the designer).

    [ ] Canonical Tags: Ensure every page has a link rel="canonical" pointing to the primary URL to fix the Search Console error.

4. Angular Performance (Sub-2s Goal)

    [ ] Remove Unused JS: Audit and strip any unused libraries or decorative JS.

    [ ] LCP Optimization: Add fetchpriority="high" to the main Hero <img> tag.


5. Validation & Google Business Profile

    [ ] Designer Sync:

        [ ] Request the Google Maps Public URL for the sameAs tag.

        [ ] Ask them to confirm the Business Address and Category (Medical) are updated on the Google Profile.

    [ ] Schema Validation: Test the live code on validator.schema.org.

    [ ] Social Debugging: Run the URL through the Facebook Sharing Debugger to fix the WhatsApp preview.

    [ ] Search Console: Submit the sitemap.xml and click "Validate Fix" on the duplicate content error.

Quick Wins (Minutes to implement)

    Set Image Dimensions: Hardcode width and height attributes on the Hero and Logo <img> tags in your HTML templates to instantly stabilize CLS.
   

Deep Optimization (Code architecture)

    Flatten the Request Chain: Investigate why main.js is chaining three chunks deep. You may need to adjust your Angular lazy-loading strategy or angular.json optimization settings to bundle those small chunks (0.89 KiB and 2.31 KiB) into the main bundle.
    maybe defer chatbot and or navbar ? figure out what the chunks load

    Implement @defer: Wrap non-critical components (like the footer or clinic location maps) in Angular @defer blocks to address the "Unused JavaScript" warning.

    make chatbot accsissible  focusable and entr to chose option and focus trapping  
