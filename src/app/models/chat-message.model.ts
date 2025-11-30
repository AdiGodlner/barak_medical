export enum MessageSender {
  User = "user",
  Bot = "bot",
}

export enum ButtonType {
  Response = "response",
  Route = "route",
  Link="link"
}

export enum ResponseId {
  Welcome = "welcome",
  Repeat="Repeat",
  contactUs="contactUs",
  divingForm="divingForm",
  
  lossOfWorkCapacityAndPensionFunds ="lossOfWorkCapacityAndPensionFunds",
  employerCompanyAndFactoryConsulting="employerCompanyAndFactoryConsulting",
  nationalInsurance="nationalInsurance",
  
  occupationalMedicineExpertConsulting="occupationalMedicineExpertConsulting",
  
  militaryMedicineProfileConsulting="militaryMedicineProfileConsulting",
  soldier="soldier",
  preFirstDraftNoticeCandidate="preFirstDraftNoticeCandidate",
  
  postFirstDraftBeforeProfileSet="postFirstDraftBeforeProfileSet",
  postFirstDraftProfileAssigned="postFirstDraftProfileAssigned",
  profileChange="profileChange",
  assignmentChange="assignmentChange",

  divingDoctorExam="divingDoctorExam",
  diverUnder45="diverUnder45",
  healthyDiverOver45="healthyDiverOver45",
  diverWithMedicalIndicationNotAgeRelated="diverWithMedicalIndicationNotAgeRelated",

  clinicArrival="clinicArrival",
  
  generalDisability= "generalDisability",
  workAccidents="workAccidents",
  occupationalDiseases="occupationalDiseases",
  hostileActions="hostileActions",

  other="other"
}



export interface ChatResponse {


  id : ResponseId;
  messages : ChatMessage[];
  isDeadEnd : boolean;
  
}


export interface ChatMessage {

    from : MessageSender;
    text : string;
    messageButtons : ChatMessagesButton[];

}


export interface ChatMessagesButton{

  type : ButtonType;
  text : string ;
  route ?: string;
  responseId ?: ResponseId;
  link ?:string;

}