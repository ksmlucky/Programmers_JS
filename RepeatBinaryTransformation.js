function solution(s) {
    var transformCount = 0;
    var zeroCount = 0;
    var length = 0;

    var check = true;

    while (check === true) {
        for (var i = 0; i < s.length; i++) {
            if (s.charAt(i) === '0') {
                zeroCount += 1;
            }
        }

        // 원래 자바스크립트에서 replace()함수는 처음 한 문자만 치환해줌
        // 정규표현식을 사용하면 ex) s = s.replace(/0/gi, "");
        // 모든 0을 ""로 치환할 수 있음
        s = s.replace(/0/gi, "");
        length = s.length;
        s = length.toString(2);

        transformCount += 1;
        if (s === '1') {
            check = false;
        }
    }

    var answer = [transformCount, zeroCount];
    return answer;
}

console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));