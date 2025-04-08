const menu = {
    "Ayam Goreng Krispi": { type: "Makanan", price: 15000 },
    "Ayam Puk Puk": { type: "Makanan", price: 13000 },
    "Ayam Bakar": { type: "Makanan", price: 20000 },
    "Es teh": { type: "Minuman", price: 5000 },
    "Es Jeruk": { type: "Minuman", price: 7000 },
};

function calculateBill(order) {
    let subtotal = 0;
    for (const [item, qty] of Object.entries(order)) {
        const { type, price } = menu[item];
        const tax = type === "Makanan" ? 0.05 : 0.03;
        subtotal += price * qty * (1 + tax);
    }
        return subtotal * 1.15; // Add 15% transaction tax
}

const rehanOrder = { "Ayam Bakar": 2, "Es teh": 1 };
console.log(calculateBill(rehanOrder).toFixed(2));