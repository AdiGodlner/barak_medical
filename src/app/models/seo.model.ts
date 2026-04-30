export interface SeoData {

    title : string;
    description : string;
    robots? : string;
    image?: string;
    url?: string;
    type: 'website' | 'article' | 'profile'
    
}

export const DEFAULT_SEO: SeoData = {
  title: '',
  description: '',
  image: '/assets/images/hero/small-hero.webp',
  url: '',
  type: 'website'
};