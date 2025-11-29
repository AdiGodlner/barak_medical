import { Card } from "../models/cards";

export const militaryMedicine: Card = {
  imageUrl: '/assets/images/cards/military-med.svg',
  title: 'רפואה צבאית',
  description: 'ניסיון רב באבחון רפואי, ייעוץ מקצועי וכתיבת חוות דעת רפואיות לחיילים ולמערכות צבאיות, בהתאם לנהלי הרפואה הצבאית ותקנות צה"ל.',
  routeTo: '/services/military-medicine'
};

export const medicalAdministration: Card = {
  imageUrl: '/assets/images/cards/med-admin.svg',
  title: 'מנהל רפואי',
  description: 'ייעוץ וליווי מקצועי למערכות בריאות וארגונים בבניית נהלים רפואיים, תקנים מקצועיים ותהליכי קבלת החלטות רפואיות ותעסוקתיות.',
  routeTo: '/services/medical-administration'
};

export const divingMedicine: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'רפואת צלילה',
  description: 'הערכות כשירות לצלילה, אבחון מצבים רפואיים הקשורים לעולם התת ימי, ומתן ייעוץ רפואי לצוללים ולמועדוני צלילה.',
  routeTo: '/services/diving-medicine'
};

export const aviationMedicine: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'רפואה תעופתית',
  description: 'ביצוע בדיקות רפואיות לטייסים, רופאים ואנשי צוות אוויר, ומתן חוות דעת תעופתיות בהתאם לסטנדרטים רפואיים בינלאומיים.',
  routeTo: '/services/aviation-medicine'
};

export const workAbility: Card = {
  imageUrl: '/assets/images/cards/work-ability.svg',
  title: 'כושר עבודה',
  description: ' הערכת כשירות רפואית לעבודה, התאמת עובדים לתפקידם ומתן חוות דעת רפואיות מקצועיות בהתאם לדרישות מקום העבודה ולרגולציה.',
  routeTo: '/services/work-ability'
};

export const industryConsulting: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'ייעוץ לארגונים',
  description: ' ליווי רפואי לארגונים ולחברות בתהליכי קבלת החלטות תעסוקתיות, רפואיות וניהול סיכונים בתחום בריאות העובדים.',
  routeTo: '/services/industry-consulting'
};

export const causalLinkAssessment: Card = {
  imageUrl: '/assets/images/cards/cause.svg',
  title: 'קשר סיבתי',
  description: 'חוות דעת מומחיות לקביעת הקשר שבין המצב הרפואי לבין תנאי העבודה, מחלות מקצוע או אירועים חריגים.',
  routeTo: '/services/causal-link-assessment'
};

export const medicalRights: Card = {
  imageUrl: '/assets/images/placeholder.jpg',
  title: 'מיצוי זכויות',
  description: 'סיוע מקצועי בהצגת חוות דעת רפואיות מול ביטוח לאומי, חברות ביטוח ובתי משפט, לצורך מיצוי זכויות רפואיות ותעסוקתיות.',
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


