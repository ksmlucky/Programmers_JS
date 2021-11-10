function solution(w, h) {
    var answer = 0;
    var small = h;
    var big = w;

    if (w < h) {
        small = w;
        big = h;
    }

    var value = 1;
    while (value > 0) {
        value = big % small;
        big = small;
        small = value;
    }

    answer = w * h-(w+h-big);

    return answer;
}

console.log(solution(8, 12))