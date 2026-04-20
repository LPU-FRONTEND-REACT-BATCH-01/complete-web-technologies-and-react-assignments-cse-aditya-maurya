function price(amount) {
    let total;
    let message;

    if (amount >= 6000) {
        message = "DISCOUNT OF 25% APPLIED";
        total = amount * 0.75;
    } 
    else if (amount >= 2000) {
        message = "DISCOUNT OF 15% APPLIED";
        total = amount * 0.85;
    } 
    else {
        message = "NO DISCOUNT";
        total = amount;
    }
    return '' + message + '\nTotal price: ' + total;

}

console.log(price(2100));