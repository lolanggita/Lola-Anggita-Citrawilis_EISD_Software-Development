function calculateChange(totalPaid, totalPrice) {
    const denominations = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let change = totalPaid - totalPrice;
    const result = {};
    
    denominations.forEach(denom => {
        if (change >= denom) {
            const count = Math.floor(change / denom);
            result[denom] = count;
            change -= count * denom;
        }
    });
    
    return result;
}

console.log(calculateChange(10000, 7500));