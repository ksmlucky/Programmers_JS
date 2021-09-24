// 찾아라 프로그래밍 마에스터 - 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    var result = []

    for (var i = 0; i < nums.length; i++) {
        // result 배열에 nums[i]의 값이 없으면
        if (result.indexOf(nums[i]) === -1) {
            // result에 nums[i]를 추가해준다.
            result.push(nums[i]);
        }
        if (result.length >= nums.length / 2) {
            return result.length;
        }
    }

    return result.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));