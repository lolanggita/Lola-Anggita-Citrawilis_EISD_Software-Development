function findThief() {
    const entryOrder = ["Ningguang", "Hutao", "Xiao", "Childe"];
    const xiaoIndex = entryOrder.indexOf("Xiao"); // Xiao is at index 2
    // Cake was there when Xiao entered (photo proof). Thief must be AFTER Xiao.
    const possibleThieves = entryOrder.slice(xiaoIndex + 1); // ["Childe"]
    // Xiao's photo shows the cake was present → Childe is the only suspect after Xiao.
    return possibleThieves[0];
}

console.log(findThief()); // Output: "Childe"