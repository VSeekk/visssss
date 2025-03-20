function firstUniqueChar(str){
    let freq ={}

    for( let char of str) freq[char] = (freq[char] || 0)+1

    for(let i=0; i<str.length;i++){
        if(freq[str[i]]===1) return i
    }

    return -1

}


console.log(firstUniqueChar("lleetcode")); 
console.log(firstUniqueChar("aabb"));  