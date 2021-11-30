function solution(n) {
    var count = 1;
    var idx = 1;

    while (idx <= n / 2) {
        if (isSolution(idx, n)) {
            count++;
        }
        idx++;
    }


    return count;
}

function isSolution(idx, n) {
    var sum = 0;

    for (var i = idx; i <= (n / 2) + 1; i++) {
        sum += i;

        if (sum == n) {
            return true;
        } else if (sum > n) {
            return false;
        }
    }

    return false;
}

console.log(solution(15))