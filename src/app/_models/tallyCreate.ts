export class tallyCreate {
  final: number;
  userId: number;
  tillId: number;

  constructor(final, userId, tillId) {
    this.final = final;
    this.userId = userId;
    this.tillId = tillId;
  }
}