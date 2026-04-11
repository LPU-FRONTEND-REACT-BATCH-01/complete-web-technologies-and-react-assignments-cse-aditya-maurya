let amount = 1000;
let transactions = [];

function deposit(depositAmount) {
    if (depositAmount > 0) {
        amount += depositAmount;
        transactions.push("Deposited: "+depositAmount);
    }
}

function withdraw(withdrawAmount) {
    if (withdrawAmount <= amount && amount - withdrawAmount >= 500) {
        amount -= withdrawAmount;
        transactions.push("WithDraw: "+withdrawAmount);
    }
}

function getBalance() {
    console.log("Balance:", amount);
}

function getTransaction() {
    console.log("Transaction");
   for(let i=0;i<transactions.length;i++){
     console.log(transactions[i]);
   }
}

deposit(2000);
withdraw(500);
deposit(1000);

getBalance();
getTransaction();