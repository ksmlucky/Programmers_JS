function solution(m, musicinfos) {
    var answer = []
    var obj = {}
    for (var i = 0; i < musicinfos.length; i++) {
        var arr = musicinfos[i].split(',')
        var a = arr[0].split(':')
        var b = arr[1].split(':')
        var length = (b[0] - a[0]) * 60 + (b[1] - a[1])
        var str = ''
        // 포인트1 : 정규표현식으로 C# 이런 두개의 문자를 한개의 문자로 변환
        arr[3] = arr[3]
            .replace(/(C#)/g, 'c')
            .replace(/(D#)/g, 'd')
            .replace(/(F#)/g, 'f')
            .replace(/(G#)/g, 'g')
            .replace(/(A#)/g, 'a')
        m = m
            .replace(/(C#)/g, 'c')
            .replace(/(D#)/g, 'd')
            .replace(/(F#)/g, 'f')
            .replace(/(G#)/g, 'g')
            .replace(/(A#)/g, 'a')

        for (var j = 0; j < length; j++) {
            str += arr[3][j % arr[3].length]
        }
        obj[arr[2]] = str
    }
    // 포인트2 : obj객체의 모든 프로퍼티 탐색
    for (var key in obj) {
        if (obj[key].indexOf(m) >= 0) {
            // 포인트3 : 조건이 만족하는 프로퍼티가 여러개일 경우 해결해주는 조건식
            if (answer.length === 0) {
                answer = [key, obj[key].length]
            }
            if (obj[key].length > answer[1]) {
                answer = [key, obj[key].length]
            }
        }
    }
    if (answer.length > 0) {
        return answer[0]
    }
    return '(None)'
}

console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))
console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]))
console.log(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]))