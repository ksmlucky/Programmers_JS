function solution(s){
    var arr = [];
    for(var i=0; i<s.length; i++){
        if(arr[arr.length-1] != s[i]){
            arr.push(s[i]);
        }else{
            arr.pop();
        }
    }

    if (arr.length > 0) {
        return 0;
    } else {
        return 1;
    }
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));