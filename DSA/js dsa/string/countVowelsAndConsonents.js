function countVowelsAndConsonants(str){
    let vowelsCount =0, consonantsCount =0, vowels ="aeiouAEIOU"

    for(let char of str){
        if(/[a-zA-Z]/.test(char)){
            if(vowels.includes(char)) vowelsCount++
            else consonantsCount++
        }
    }
    return {"vowelsCount":vowelsCount,"consonantsCount":consonantsCount}
}


console.log(countVowelsAndConsonants("Hello World"));