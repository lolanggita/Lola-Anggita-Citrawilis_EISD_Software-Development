function findNaughtyChildren(names) {
    const countMap = {};
    names.forEach(name => {
        countMap[name] = (countMap[name] || 0) + 1;
    });
    
    const sorted = Object.entries(countMap).sort((a, b) => b[1] - a[1]);
    return `${sorted[0][0]} Nakal`;
}
// Test
console.log(findNaughtyChildren(["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"])); // "Bagas Nakal"