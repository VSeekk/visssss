function longestCommonPrefix(str){
    if(!str.length) return " "
    let first = str[0], last = str[str.length-1], i=0

    while(i<first.length && first[i] === last[i]) i++

    return first.substring(0,i)
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));