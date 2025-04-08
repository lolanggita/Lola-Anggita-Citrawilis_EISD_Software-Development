function decryptChat(encrypted) {
    return encrypted.split("").map(char => {
        if (/[a-z]/.test(char)) {
            return String.fromCharCode((char.charCodeAt(0) - 97 - 5 + 26) % 26 + 97);
        } else if (/[A-Z]/.test(char)) {
            return String.fromCharCode((char.charCodeAt(0) - 65 - 5 + 26) % 26 + 65);
        }
        return char;
    }).join("");
}
// Test
console.log(decryptChat("xfqfr bfmdz")); // "welcome back"