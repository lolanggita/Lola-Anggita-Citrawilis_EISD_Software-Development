const maxLength = 6; // Reduced to 3 for testing; 6 is too large!

function generateCombinations(fullname, maxLength) {
    const results = [];
    const used = new Set();
    const cleanName = fullname.toLowerCase().replace(/\s/g, "");

    function permute(current) {
        if (current.length > maxLength) return;
        if (current.length > 0 && !used.has(current)) {
        results.push(current);
        used.add(current);
        }
        for (let i = 0; i < cleanName.length; i++) {
        permute(current + cleanName[i]);
        }
    }

    permute('');
    return results;
}

const usernames = generateCombinations("Naip Lovyu", maxLength);
console.log(usernames); // Output: ['n', 'a', 'i', ..., 'nai', 'naa', ...]
console.log("Total:", usernames.length); // For maxLength=3: 985