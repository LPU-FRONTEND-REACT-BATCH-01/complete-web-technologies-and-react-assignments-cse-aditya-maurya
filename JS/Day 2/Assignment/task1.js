function price(amount) {
    let total;

    if (amount >= 6000) {
        console.log("DISCOUNT OF 25% APPLIED", "price is "+amount);
        total=amount*0.75;
    } 
    else if (amount >= 2000) {
        console.log("DISCOUNT OF 15% APPLIED", "price is "+amount);
        total=amount*0.85;
    } 
    else {
        console.log("NO DISCOUNT", "price is "+amount);
        total=amount;
    }

    console.log("Total price is "+total);
}

price(2100);