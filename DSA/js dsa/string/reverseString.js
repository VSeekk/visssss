function reverseWords(str){
    str1 = str.trim().split(" ").reverse().join(" ")
    return str1;
}

console.log(reverseWords("Hello World!")); // Output: "World! Hello"
console.log(reverseWords("  JavaScript is great  "));