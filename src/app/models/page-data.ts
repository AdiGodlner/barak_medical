import { Card } from "./cards";


export interface PageData {
  h1: string;
  subHeader?:string;
  sections: Section[];
}

export type Section = 
  | LargeCardSection
  | CardsContainerSection;

export interface LargeCardSection {
  type: 'large-card';
  h2: string;
  content: SectionContent[];
}

export interface CardsContainerSection {

  type: 'cards-container';
  h2 ?: string;
  cards: Card[];

}

export type SectionContent = 
  | ParagraphContent
  | ImageContent
  | ListContent;


export interface ListContent {
  type: 'li';
  content: string[];
  isLink ?:boolean;
}

export interface ParagraphContent {
  type: 'p';
  content: string;
}

export interface ImageContent {
  type: 'image';
  url: string;
}
