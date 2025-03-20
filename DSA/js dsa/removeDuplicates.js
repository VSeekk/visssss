
function removeDuplicates(arr){
    let index =0
    for(let i = 0; i<arr.length;i++){
        if(arr[i]!==arr[index]) arr[++index]=arr[i]
    }
    return arr.slice(0,index+1)

}

console.log(removeDuplicates([1, 1, 2, 2, 3]));