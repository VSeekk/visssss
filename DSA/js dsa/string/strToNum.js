function stringToInt(str){
    //return Number(str)
    //return parseInt(str)
    let num =0, sign = 1, i=0
    if(str[i]=="-"){
        sign =-1
        i++;
    }
    while( i< str.length && str[i]>="0" && str[i]<="9"){
        num = num * 10+ (str[i].charCodeAt(0) - "0".charCodeAt())
        i++

    }
    return sign*num
}

console.log(stringToInt("-123")); // Output: -123
console.log(stringToInt("456")); 