export class ingresoUpdate {
  tallyId: number;
  earningId: number;
  amount: number;

  constructor(tallyId, earningId, amount) {
    this.tallyId = tallyId;
    this.earningId = earningId;
    this.amount = amount;
  }
}