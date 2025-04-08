const products = [
    { name: "TV", category: "elektronik", price: 1000 },
    { name: "headphone", category: "elektronik", price: 200 },
    { name: "baju", category: "fashion", price: 50 },
    { name: "gitar", category: "musik", price: 300 },
    { name: "sepatu", category: "olahraga", price: 80 },
    { name: "kamera", category: "elektronik", price: 600 },
];

const customers = {
    Rina: { interests: ["elektronik", "musik"], bought: ["TV", "headphone"] },
    Budi: { interests: ["fashion", "musik"], bought: ["baju", "gitar"] },
    Hartono: { interests: ["olahraga", "elektronik"], bought: ["sepatu", "kamera"] },
};

function recommendProducts(name) {
    const { interests, bought } = customers[name];
    return products
        .filter(p => interests.includes(p.category))
        .filter(p => !bought.includes(p.name))
        .map(p => p.name);
}
// Test
console.log(recommendProducts("Rina")); // ["gitar", "kamera"]