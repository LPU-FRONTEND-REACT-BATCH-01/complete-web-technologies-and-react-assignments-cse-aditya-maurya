let amount = 0;
let transactions=[];

function deposit(depositAmount) {
    if (depositAmount > 0) {
        amount += depositAmount;
        console.log("Deposited Amount: "+depositAmount);
        transactions.push("Deposited: ₹"+depositAmount);
    }
}

function withdraw(withdrawAmount) {
    if(withdrawAmount<=0) {
        console.log("Enter a valid amount.");
    } 
    else if(withdrawAmount>10000) {
        console.log("Withdraw failed Max limit is ₹10,000.");
    } 
    else if(withdrawAmount>amount) {
        console.log("Insufficient balance.");
    } 
    else if(amount-withdrawAmount < 500) {
        console.log("Minimum ₹500 balance required.");
    } 
    else {
        amount -= withdrawAmount;
        transactions.push("Withdraw: ₹" + withdrawAmount);
    }
}

function getBalance() {
    console.log("Balance: ₹",amount);
}

function getTransaction() {
    console.log("Transactions:");
    for (let i = 0; i < transactions.length; i++) {
        console.log(transactions[i]);
    }
}

deposit(2000);
withdraw(2500); 
deposit(1000);

getBalance();
getTransaction();






