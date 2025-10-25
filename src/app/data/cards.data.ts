import { Card } from "../models/cards";

export const militaryMedicine: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'רפואה צבאית',
  description: 'ניסיון רב באבחון, ייעוץ וחוות דעת רפואיות לחיילים ומערכות צבאיות.',
  routeTo: '/services/military-medicine'
};

export const medicalAdministration: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'מנהל רפואי',
  description: 'ייעוץ וליווי מערכות בריאות וארגונים בבניית נהלים, סטנדרטים וקבלת החלטות רפואיות.',
  routeTo: '/services/medical-administration'
};

export const divingMedicine: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'רפואת צלילה',
  description: 'הערכות כשירות לצלילה וטיפול במצבים רפואיים הקשורים לעולם הימי.',
  routeTo: '/services/diving-medicine'
};

export const aviationMedicine: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'רפואה תעופתית',
  description: 'בדיקות וחוות דעת לרופאים, טייסים ואנשי צוות אוויר בהתאם לסטנדרטים בינלאומיים.',
  routeTo: '/services/aviation-medicine'
};

export const workAbility: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'כושר עבודה',
  description: 'הערכת כשירות רפואית לעבודה, התאמת תפקידים ומתן חוות דעת מקצועיות.',
  routeTo: '/services/work-ability'
};

export const industryConsulting: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'ייעוץ לארגונים',
  description: 'ליווי ארגונים וחברות בקבלת החלטות רפואיות ותעסוקתיות מורכבות.',
  routeTo: '/services/industry-consulting'
};

export const causalLinkAssessment: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'קשר סיבתי',
  description: 'חוות דעת רפואיות מומחיות לבחינת הקשר בין מצב בריאותי לתנאי עבודה או אירוע מסוים.',
  routeTo: '/services/causal-link-assessment'
};

export const medicalRights: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'מיצוי זכויות',
  description: 'סיוע מקצועי בהצגת חוות דעת רפואיות מול ביטוח לאומי, חברות ביטוח וגורמים משפטיים.',
  routeTo: '/services/medical-rights'
};

export const additionalCardsList: Card[] = [
  militaryMedicine,
  medicalAdministration,
  divingMedicine,
  aviationMedicine
];

export const occupationalCardsList: Card[] = [
  workAbility,
  industryConsulting,
  causalLinkAssessment,
  medicalRights
];


