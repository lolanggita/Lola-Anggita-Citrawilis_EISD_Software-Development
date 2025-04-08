function findNaughtyChildren(names) {
    const countMap = {};
    names.forEach(name => {
        countMap[name] = (countMap[name] || 0) + 1;
    });

    const entries = Object.entries(countMap);
    if (entries.length === 0) return "Semua Anak Baik"; // Edge case
    // Sort by count (descending) and name (ascending)
    const sorted = entries.sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1]; // Sort by count first
        else return a[0].localeCompare(b[0]);   // Then sort alphabetically
    });

    const maxCount = sorted[0][1];
    
    // If all counts are 1 → "Semua Anak Baik"
    if (maxCount === 1) return "Semua Anak Baik";

    const maxNames = sorted.filter(e => e[1] === maxCount).map(e => e[0]);
    return maxNames.length === 1
        ? `${maxNames[0]} Nakal`
        : `${maxNames.join(' & ')} Nakal`;
}

console.log(findNaughtyChildren(["Bagas", "Dimas", "Bagas", "Bagas", "Indra", "Gilang", "Gilang", "Hana", "Fajar", "Fajar"]));
console.log(findNaughtyChildren( ["Bagas", "Dimas", "Fajar", "Bagas", "Indra", "Gilang", "Gilang", "Bagas", "Fajar", "Fajar" ]));
console.log(findNaughtyChildren(["Aisyah", "Bagas", "Dewi", "Dimas", "Eka", "Fajar", "GIlang", "Hana", "Indra", "Jihan"]));