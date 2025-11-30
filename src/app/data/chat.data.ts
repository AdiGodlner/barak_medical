import { ButtonType, ChatMessagesButton, ChatResponse, MessageSender, ResponseId } from "../models/chat-message.model";


// https://forms.gle/fFLMkFDwmJ9G4MZf7

export const  divingForm: ChatMessagesButton = {

    text : "למילוי הצהרת בריאות" ,
    responseId : ResponseId.divingForm,
    type: ButtonType.Link

}


export const  contactUs: ChatMessagesButton = {

    text : "לקביעת שיחת ייעוץ" ,
    responseId : ResponseId.contactUs,
    type: ButtonType.Route

}

export const  lossOfWorkCapacityAndPensionFundsBtn: ChatMessagesButton = {

    text : "אובדן כושר עבודה וקרנות פנסיה" ,
    responseId : ResponseId.lossOfWorkCapacityAndPensionFunds,
    type: ButtonType.Response

}


export const  employerCompanyAndFactoryConsultingBtn: ChatMessagesButton = {

    text : "ייעוץ למעסיקים, חברות ומפעלים" ,
    responseId : ResponseId.employerCompanyAndFactoryConsulting,
    type: ButtonType.Response

}

export const  nationalInsuranceBtn: ChatMessagesButton = {

    text : "ביטוח לאומי" ,
    responseId : ResponseId.nationalInsurance,
    type: ButtonType.Response

}

export const  occupationalMedicineExpertConsultingBtn: ChatMessagesButton = {

    text : "ייעוץ מומחה ברפואה תעסוקתית" ,
    responseId : ResponseId.occupationalMedicineExpertConsulting,
    type: ButtonType.Response

}

export const  militaryMedicineProfileConsultingBtn: ChatMessagesButton = {

    text : "ייעוץ רפואה צבאית (פרופיל)" ,
    responseId : ResponseId.militaryMedicineProfileConsulting,
    type: ButtonType.Response

}

export const  divingDoctorExamBtn: ChatMessagesButton = {

    text : "בדיקת רופא צלילה" ,
    responseId : ResponseId.divingDoctorExam,
    type: ButtonType.Response

}

export const  diverUnder45Btn: ChatMessagesButton = {

    text : "צולל עד גיל 45" ,
    responseId : ResponseId.diverUnder45,
    type: ButtonType.Response

}

export const  healthyDiverOver45Btn: ChatMessagesButton = {

    text : "צולל (בריא) מעל גיל 45" ,
    responseId : ResponseId.healthyDiverOver45,
    type: ButtonType.Response

}

export const  diverWithMedicalIndicationNotAgeRelatedBtn: ChatMessagesButton = {

    text : "צולל עם אינדיקציה רפואית לרופא צלילה שאינה גיל 45" ,
    responseId : ResponseId.diverWithMedicalIndicationNotAgeRelated,
    type: ButtonType.Response

}



export const  clinicArrivalBtn: ChatMessagesButton = {

    text : "הגעה למרפאה" ,
    responseId : ResponseId.clinicArrival,
    type: ButtonType.Response

}


export const  otherBtn: ChatMessagesButton = {

    text : "אחר" ,
    responseId : ResponseId.other,
    type: ButtonType.Response

}





export const  welcomeResponse : ChatResponse = {

    id : ResponseId.Welcome,
    isDeadEnd : false,
    messages :[
      {
        from : MessageSender.Bot,
        text : "שלום, במה אתה מעוניין?",
        messageButtons : [
            lossOfWorkCapacityAndPensionFundsBtn,
            nationalInsuranceBtn,
            employerCompanyAndFactoryConsultingBtn,
            occupationalMedicineExpertConsultingBtn,
            militaryMedicineProfileConsultingBtn,
            divingDoctorExamBtn,
            clinicArrivalBtn,
            otherBtn
]
      },

    ]

  };

export const  repeatQuestionResponse : ChatResponse = {

    id : ResponseId.Repeat,
    isDeadEnd : false,
    messages :[
      {
        from : MessageSender.Bot,
        text : " בחר נושא  ",
        messageButtons : [ ]
      }

    ]

  } 

export const  lossOfWorkCapacityAndPensionFunds : ChatResponse = {

    id : ResponseId.lossOfWorkCapacityAndPensionFunds,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "אובדן כושר עבודה וקרנות פנסיה",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "התנהלות חכמה אל מול חברות הביטוח בתחום אובדן כושר העבודה (פוליסות פרטיות או קרנות הפנסיה) מחייבת הסתייעות בייעוץ מומחה ברפואה תעסוקתית הבקיא בתחום. חברת ברק מדיקל מומחים בכירים בעלי ניסיון רב בתחום זה. לצורך התקדמות בתהליך, לאחר שיחת ייעוץ, הלקוח יתבקש להביא תיעוד עדכני ורלוונטי למצבו, לצורך מענה מיטבי. ",
        messageButtons : [ ]
      }

    ]

  };

export const nationalInsurance : ChatResponse = {

    id : ResponseId.nationalInsurance,
    isDeadEnd : false,
    messages :[
      {
        from : MessageSender.User,
        text : "ביטוח לאומי",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "התנהלות חכמה אל מול הביטוח הלאומי מחייבת הסתייעות ברופא תעסוקתי מומחה, עם מידע רפואי מפורט המתאים לקביעת הזכאות המתבקשת, שכן התנאים לקבצאות השונות מטעם הביטוח הלאומי מקיימים שונות רבה וכמעט אין קשר בין הזכאויות השונות. מומחי ברק מדיקל בוגרי קורס לרופאים פוסקים ע״פ דין מטעם הביטוח הלאומי וניסיון מעשי עשיר בתחום. לצורך לצורך התקדמות בתהליך, לאחר שיחת ייעוץ, הלקוח יתבקש להביא תיעוד עדכני ורלוונטי למצבו, לצורך מענה מיטבי. ",
        // נכות כללית
        // תאונות עבודה
        // מחלות מקצוע
        // פעולות איבה
        //  אחר

        messageButtons : []

      }

    ]

  };


export const employerCompanyAndFactoryConsulting : ChatResponse = {

    id : ResponseId.employerCompanyAndFactoryConsulting,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "ייעוץ למעסיקים, חברות ומפעלים",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "מעסיקים רבים בוחרים להסתייע בשירותי רפואה תעסוקתית פרטיים. שירותים אלו יכולים לכלול סיורים מוקדמים באתר המפעל ואיתור גורמי סיכון תעסוקתיים, גיבוש תוכניות לצמצום תאונות או תחלואה תעסוקתית ובמיוחד ייעוץ למעסיק במקרים של חופשות מחלה ממושכות, היעדרויות ומגבלות תעסוקתיות שנקבעו ע״י רופאים אחרים ואשר מקשות על שילוב העובד. רופא תעסוקתי המייעץ ישירות למעסיק הינה יכולת חשובה בארגז הכלים של כל עסק. לדוגמה: ניידות, חנייה, היקף שעות עבודה נדרשות ועד פרישה רפואית.",
        messageButtons : []

      }

    ]

  };



export const occupationalMedicineExpertConsulting : ChatResponse = {

    id : ResponseId.occupationalMedicineExpertConsulting,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "ייעוץ מומחה ברפואה תעסוקתית",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "במהלך חיים קיימים מספר רב של אירועים בהם אדם יכול להסתייע בייעוץ של רופא תעסוקתי מומחה. מחלה או תאונה חריפה המחייבת חופשת מחלה ממושכת, התמודדות עם חלה חרונית המחייבת התאמות שונות במקום העבודה. בדיקה לחזרה לעבודה לאחר החלמה וכיוצא בזה. למומחי ברק מדיקל ניסיון רב ועשיר בייעוץ ומתן המלצות, הן לעובד והן למעסיק בשאלות שכאלה ובזמינות ובאופן שמקיים זמינות גבוהה ושירותיות.",
        messageButtons : []

      }

    ]

  };  


export const militaryMedicineProfileConsulting : ChatResponse = {

    id : ResponseId.militaryMedicineProfileConsulting,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "ייעוץ רפואה צבאית (פרופיל)",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "השירות הצבאי הינו אחת מאבני הדרך החשובות בארוך החיים הישראלי והפרופיל הצבאי הינו אחד המשפיעים הקריטים על אופי השירות. לעיתים מוצא עצמו המלש״ב (המועמד לשירות ביטחון) או החייל הצעיר ומשפחתו בשאלות ודילמות הקשורות למצב הרפואי והשלכותיו על אופי השירות. ד״ר יאיר ברק הינו מומחה בעל שם ארצי בתחום זה ואשר מביא עימו ניסיון צבאי עשיר הן מהשטח והן מתפקידי מטה בתחום ואת ניסיונו הקליני כמומחה לרפואה תעסוקתית, אשר סייע עד כה למאות משפחות בעצה הנכונה להתנהלות חכמה מול שלטונות הצבא וכל זאת על מנת לאפשר את זכות השירות, וביצוע שירות משמעותי ומועיל תוך שמירה על הבריאות המלש״ב ושלוות משפחתו. הייעוץ מתבצע בהתאם לשלב השירות ובעדיפות לפני צו ראשון באמצעות תיעוד רפואי עדכני ומפגש משולב של ד״ר ברק עם המלש״ב/ חייל והמשפחה. ",
        messageButtons : []

      },
        {
        from : MessageSender.Bot,
        text : "ייעוץ בנושא פרופיל צבאי נעשה ע״י ד״ר יאיר ברק, מומחה ארצי בתחום, הייעוץ נעשה באמצעות העברת תיעוד רפואי רלוונטיועדכני וכן קיומה של שיחת ייעוץ משותפת בהשתתפות ד״ר יאיר ברק, המלש״ב וההורים. ",
        messageButtons : []

      }

    ]

  };  



export const divingDoctorExam : ChatResponse = {

    id : ResponseId.divingDoctorExam,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "בדיקת רופא צלילה",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "",
        messageButtons : []

      }

    ]

  };  



export const diverUnder45 : ChatResponse = {

    id : ResponseId.diverUnder45,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "צולל עד גיל 45",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "יש למלא שאלון הצהרת בריאות לצולל בקישור שיצורף מטה, לאחר בחינת השאלון ע״י המומחים שלנו וגיבוש הממצאים, תקבע בדיקת רופא הצלילה.",
        messageButtons : []

      }

    ]

  };  



export const healthyDiverOver45 : ChatResponse = {

    id : ResponseId.healthyDiverOver45,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "צולל (בריא) מעל גיל 45",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "יש למלא שאלון הצהרת בריאות לצולל בקישור שיצורף מטה, מעל גיל 45 נדרש לבצע בדיקת ארגומטריה /א.ק.ג במאמץ אשר נדרש לשלוח את תוצאותיה לרופא הצלילה בטרם ההגעה לתור שייקבע. לאחר בחינת השאלון ע״י המומחים שלנו וגיבוש הממצאים כולל תוצאות הבדיקות הנדרשות, תקבע בדיקת רופא הצלילה.",
        messageButtons : []

      },

    ]

  };  


export const diverWithMedicalIndicationNotAgeRelated : ChatResponse = {

    id : ResponseId.diverWithMedicalIndicationNotAgeRelated,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "צולל עם אינדיקציה רפואית לרופא צלילה שאינה גיל 45",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "יש למלא שאלון הצהרת בריאות לצולל בקישור שיצורף מטה, לאחר בחינת השאלון ע״י המומחים שלנו וגיבוש הממצאים, בעלי אינדיקציה רפואית העולה מהשאלון, מחייבת בדיקת רופא צלילה.",
        messageButtons : []

      }

    ]

  };  


  export const clinicArrival : ChatResponse = {

    id : ResponseId.clinicArrival,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "איך מגיעים למרפאה?",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "מרפאתנו ממוקמת בכתובת הדובדבן 9, ב׳, קרית אונו  הגעה ברכב פרטי: קיימת חנייה בסמוך לבניין בתשלום, על בסיס מקום פנוי. הגעה בתחבורה ציבורית תחנות אוטובוס קרובות למרפאה: ספורטק/ דרך לוי אשכול ומשם הליכה של כ-10דק׳. ",
        messageButtons : []

      }

    ]

  };  


  export const other : ChatResponse = {

    id : ResponseId.other,
    isDeadEnd : true,
    messages :[
      {
        from : MessageSender.User,
        text : "אחר",
        messageButtons : []
      },
      {
        from : MessageSender.Bot,
        text : "מענה לפנייה ע״י המומחים שלנו מתקיים עד יום עסקים שעות הבוקר 09:00-11:00 שעות אחר הצהריים 17:00-19:00",
        messageButtons : []

      }

    ]

  };  


export const responseOptions : ChatResponse[] =[

    welcomeResponse,
    repeatQuestionResponse,
    lossOfWorkCapacityAndPensionFunds,
    nationalInsurance,
    employerCompanyAndFactoryConsulting,
    occupationalMedicineExpertConsulting,
    militaryMedicineProfileConsulting,
    divingDoctorExam,
    diverUnder45,
    healthyDiverOver45,
    diverWithMedicalIndicationNotAgeRelated,
    clinicArrival,
    other,
  ] 
