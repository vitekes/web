export interface Category {
    id: string;
    category_rus: string;
    category_en?:string;
  }
  
export interface IAnswer {
    answer: string
    id: number
  }
  
export interface IPoll{
    question: string
    answers: IAnswer[]
  } 