export interface ChatMessage {

    from : "user" | "bot";
    text : string;

}

type NodeType = 'question' | 'answer';

export interface ChatNodeBase {

  id: string;
  type: NodeType;

}

export interface AnswerNode extends ChatNodeBase {

    type: 'answer';
  text: string;

}

export interface nodeButton  {

    label: string;
    next: string; // reference to another node by ID

}


export interface QuestionNode extends ChatNodeBase {

    type: 'question';
    question: string;
    options: nodeButton [];

}


export type ChatNode = QuestionNode | AnswerNode;