import { TransactionTypes } from "./TransactionType.enum";

export class Transaction {
    id?: number;
    amount?: string;
    transType?: TransactionTypes  ;
    cardId? : number
  }