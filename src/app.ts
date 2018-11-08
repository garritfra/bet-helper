import BetManager from "./BetManager";

const betManager = new BetManager(100, 2);

const printInfo = () => {
  console.log("Deposit: " + betManager.getDeposit());
  console.log("Base Bet: " + betManager.getBaseBet());
  console.log("Current Bet: " + betManager.getCurrentBet());
  console.log("");
};

const hasWon = () => Math.random() >= 0.5;

printInfo();

for (let i = 0; i < 100; i++) {
  if (betManager.getDeposit() >= 0) {
    hasWon() ? betManager.roundWon() : betManager.roundLost();
    printInfo();
  } else {
    console.log("Out of money!");
  }
}
