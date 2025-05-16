
document.getElementById("date").valueAsDate = new Date();

document.addEventListener("DOMContentLoaded", function () {

  document
    .getElementById("transactionForm")
    .addEventListener("submit", addTransaction);


  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const getValue = (id) => {
    return document.getElementById(id).value;
  };

  const randomId = () => {
    return Math.floor(Math.random() * 100000);
  };

  const addTransaction = (e) => {
    e.preventDefault();

    let transaction = {
      id: randomId(),
      description: getValue("description"),
      amount: getValue("amount"),
      cetegory: getValue("cetegory"),
      date: getValue("date"),
      timestamp: new Date().getDate(),
    };


    transactions.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));

    document.getElementById("transactionForm").reset();
  };
});