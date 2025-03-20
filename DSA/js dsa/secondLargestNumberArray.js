
function secondLargest(arr) {
    /*arr.sort((a,b)=>(b-a))
    return arr[1]*/
    if (arr<2) return null;
    let first =-Infinity, second= -Infinity

    for (let num of arr){
        if(num > first){
            second = first
            first = num
        }
        else if(num > second && num !== first) {
            second = num
        }
    }
    return second
}



console.log(secondLargest([10, 20, 4, 45, 99]));