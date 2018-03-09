export class gastoUpdate {
  tallyId: number;
  expenseId: number;
  amount: number;
  description: string;

  constructor(tallyId, expenseId, amount, description) {
    this.tallyId = tallyId;
    this.expenseId = expenseId;
    this.amount = amount;
    this.description = description;
  }
}