export enum MessageSender {
  User = "user",
  Bot = "bot",
}

// export enum ButtonType {
//   Response = "response",
//   Telephone = "telephone",
// }

export enum ResponseId {
  Welcome = "welcome",
  Repeat = "repeat",
  BookAppointment = "book_appointment",
  CancelAppointment = "cancel_appointment",
  ClinicHours = "clinic_hours",
  ClinicLocation = "clinic_location",
  ServicesOffered = "services_offered",
  InsuranceAccepted = "insurance_accepted",
  SpeakToStaff = "speak_to_staff",
  EmergencyContact = "emergency_contact",
  ThankYou = "thank_you",
  FollowUp = "follow_up",
  ContactByPhone = "contact_by_phone",
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

  // type : ButtonType;
  text : string ;
  phoneNumber ?: string;
  responseId ?: ResponseId;

}