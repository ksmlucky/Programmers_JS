function solution(prices) {
    var answer = new Array();

    for (var i = 0; i < prices.length; i++) {
        answer.push(0);
    }

    for (var i = 0; i < prices.length; i++) {
        for (var j = i + 1; j < prices.length; j++) {
            answer[i]++;
            if (prices[i] > prices[j]) {
                break;
            }
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
