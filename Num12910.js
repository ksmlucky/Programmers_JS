// 코딩테스트 연습 - 연습문제 - 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    answer.sort((a, b) => a - b);

    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}