function solution(A, B) {
    var answer = 0;

    A.sort();
    B.sort();

    for (var i = 0; i < A.length; i++) {
        answer += A[i] * B[(B.length - 1) - i];
    }

    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));