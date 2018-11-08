export default class BetManager {
  private deposit: number;
  private baseBet: number;
  private currentBet: number;

  public constructor(deposit: number, baseBet?: number) {
    this.deposit = deposit;
    this.baseBet = baseBet || 0;
    this.currentBet = this.baseBet;
  }

  public getDeposit(): number {
    return this.deposit;
  }

  public setDeposit(deposit: number) {
    this.deposit = deposit;
  }

  public getCurrentBet(): number {
    return this.currentBet;
  }

  public getBaseBet(): number {
    return this.baseBet;
  }

  public setBaseBet(amount: number) {
    this.baseBet = amount;
  }

  private resetBet(): number {
    this.currentBet = this.baseBet;
    return this.currentBet;
  }

  public roundWon(): number {
    this.deposit += this.currentBet;
    return this.resetBet();
  }

  public roundLost(): number {
    this.deposit -= this.currentBet;
    this.currentBet *= 2;
    return this.currentBet;
  }
}
