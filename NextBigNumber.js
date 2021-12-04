function solution(n){
    const count = countOne(n);
    while(1){
        if(countOne(++n) === count){
            return n;
        }
    }
}
function countOne(dec) {
    const bin = (dec >>> 0).toString(2).split("");
    let count = 0;
    for (let b of bin) {
        if (b === "1") {
            count += 1;
        }
    }
    return count;
}

console.log(solution(78));
console.log(solution(15));