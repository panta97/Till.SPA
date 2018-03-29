export class expenseCreate {
  type: string;
  amount: number;
  description: string;
  tallyId: number;

  constructor(type, amount, description, tallyId) {
    this.type = type;
    this.amount = amount;
    this.description = description;
    this.tallyId = tallyId;
  }
}