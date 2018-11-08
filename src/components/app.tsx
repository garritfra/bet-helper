import * as React from "react";
import BetManager from "../core/BetManager";

export default class App extends React.Component<any, any> {
  props: any;
  state: any;
  betManager: BetManager;

  constructor(props: any) {
    super(props);
    this.props = props;
    this.betManager = new BetManager(100, 2);
    this.state = {
      deposit: this.betManager.getDeposit(),
      currentBet: this.betManager.getCurrentBet(),
      baseBet: this.betManager.getBaseBet()
    };
  }

  handleWon(event: Event) {
    this.betManager.roundWon();
    this.update();
  }

  handleLost() {
    this.betManager.roundLost();
    this.update();
  }

  handleDepositChanged(event: Event) {
    const newDeposit = Number.parseInt(
      (event.target as HTMLInputElement).value
    );
    this.betManager.setDeposit(newDeposit);
    this.update();
  }

  handleBaseBetChanged(event: Event) {
    const newBaseBet = Number.parseInt(
      (event.target as HTMLInputElement).value
    );
    this.betManager.setBaseBet(newBaseBet);
    this.update();
  }

  update() {
    this.setState({
      deposit: this.betManager.getDeposit(),
      currentBet: this.betManager.getCurrentBet(),
      baseBet: this.betManager.getBaseBet()
    });
  }

  render() {
    return (
      <div>
        <div>
          Deposit:
          <input
            type="number"
            value={this.state.deposit}
            onChange={this.handleDepositChanged.bind(this)}
          />
        </div>

        <div>
          Base Bet:
          <input
            type="number"
            value={this.state.baseBet}
            onChange={this.handleBaseBetChanged.bind(this)}
          />
        </div>
        <p>Suggested Bet: {this.state.currentBet}</p>
        <button onClick={this.handleWon.bind(this)}>Round Won</button>
        <button onClick={this.handleLost.bind(this)}>Round Lost</button>
      </div>
    );
  }
}
