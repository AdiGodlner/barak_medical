import { ECard } from "../models/e-card";

export const darylECardData : ECard = {
    
    imageUrl: "/assets/images/about/darya.webp",
    imageAlt: "",
    title: "ד״ר דריה לוי-ברק",
    specalities:  "מומחית ברפואה פנימית וברפואה תעסוקתית",
    phoneNumber: "054-7289592",
    email: "Darya@Barakmedical.com",
    linkedIn: "Darya Levy Barak",
    linkedInRoute: "https://www.linkedin.com/in/yair-barak-854b7168/"

}

export const yairECardData : ECard = {
    
    imageUrl: "/assets/images/about/yair.webp",
    imageAlt: "",
    title: "ד״ר יאיר ברק",
    specalities: "מומחה ברפואה תעסוקתית, רפואה צבאית, רפואת צלילה, רפואה תעופתית",
    phoneNumber: "052-3400508",
    email: "Yair@Barakmedical.com",
    linkedIn: "Yair Barak",
    linkedInRoute: "https://www.linkedin.com/in/yair-barak-854b7168/"
}


export const ECardDataMap: Record<string, ECard> = {
    "darya-levi-barak": darylECardData,
    "yair-barak": yairECardData,
};
