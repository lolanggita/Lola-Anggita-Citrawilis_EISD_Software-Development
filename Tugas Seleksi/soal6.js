const menu = {
    "Ayam Goreng Krispi": { type: "Makanan", price: 15000 },
    "Ayam Puk Puk": { type: "Makanan", price: 13000 },
    "Ayam Bakar": { type: "Makanan", price: 20000 },
    "Es Teh": { type: "Minuman", price: 5000 },
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

const rehanOrder = { "Ayam Bakar": 2, "Es Teh": 1 };
const AmbaOrder = { "Ayam Puk Puk": 2, "Es Teh": 3 };
const FaizOrder = {
    "Ayam Goreng Krispi": 1,
    "Ayam Puk Puk": 1,
    "Ayam Bakar": 1,
    "Es Teh": 1,
    "Es Jeruk": 1
};

console.log("Total Harga Pesanan Rehan Whangsap: Rp" + calculateBill(rehanOrder).toFixed(2));
console.log("Total Harga Pesanan Amba Roni: Rp" + calculateBill(AmbaOrder).toFixed(2));
console.log("Total Harga Pesanan Faiz Ngawi: Rp" + calculateBill(FaizOrder).toFixed(2));