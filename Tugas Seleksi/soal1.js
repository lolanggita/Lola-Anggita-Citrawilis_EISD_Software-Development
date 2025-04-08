// soal1.js
function reviewStats(ratings) {
    const min = Math.min(...ratings);
    const max = Math.max(...ratings);
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return [min, max, Number(avg.toFixed(1))];
}

console.log(reviewStats([4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0]));
console.log(reviewStats([5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5]));
