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

console.log(decryptChat("xfqfr bfmdz"));
console.log(decryptChat("gjxtp lzj rfz ifkyfw jxi snm"));
console.log(decryptChat("gwt, gjxtp qz rfz rfpfs in bfwlty lfp?"));
console.log(decryptChat("fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz"));
console.log(decryptChat("dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"));