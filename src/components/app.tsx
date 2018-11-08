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
      currentBet: this.betManager.getCurrentBet()
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

  update() {
    this.setState({
      deposit: this.betManager.getDeposit(),
      currentBet: this.betManager.getCurrentBet()
    });
  }

  render() {
    return (
      <div>
        <h1>Deposit: {this.state.deposit}</h1>
        <h1>Current Bet: {this.state.currentBet}</h1>
        <button onClick={this.handleWon.bind(this)}>Round Won</button>
        <button onClick={this.handleLost.bind(this)}>Round Lost</button>
      </div>
    );
  }
}
