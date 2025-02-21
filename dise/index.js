function rollDice() {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    let roll1 = Math.floor(Math.random() * 6);
    let roll2 = Math.floor(Math.random() * 6);
  
    document.getElementById("player1").textContent = diceFaces[roll1];
    document.getElementById("player2").textContent = diceFaces[roll2];
  
    if (roll1 > roll2) {
      document.getElementById("result").textContent = "Player 1 Wins!";
    } else if (roll2 > roll1) {
      document.getElementById("result").textContent = "Player 2 Wins!";
    } else {
      document.getElementById("result").textContent = "It's a Tie!";
    }
  }