function solution(lottos, win_nums) {
    var zeroCount = 0;
    var win = 0;
    var rank = 7;

    for (var i = 0; i < lottos.length; i++) {
        if (lottos[i] == 0) {
            zeroCount++;
        }
    }

    for (var i = 0; i < lottos.length; i++) {
        for (var j = 0; j < lottos.length; j++) {
            if (lottos[i] == win_nums[j]) {
                win++;
                break;
            }
        }
    }

    var answer = [Math.min(rank - win - zeroCount, 6), Math.min(rank - win, 6)];

    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));