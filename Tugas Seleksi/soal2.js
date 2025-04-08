function checkPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed ? "eureeka!" : "suka blyat";
}

console.log(checkPalindrome("Angsa"));
console.log(checkPalindrome("KataK"));
console.log(checkPalindrome("kasur empuk"))
console.log(checkPalindrome("Aku Suka Kamu"));
console.log(checkPalindrome("Ibu Ratna antar ubi."));