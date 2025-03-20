function maxSubarraySum(arr){
    let maxsum = -Infinity, cursum = 0;
    for(let num of arr){
        cursum = Math.max(num, cursum + num)
        maxsum = Math.max(maxsum, cursum)
    }
    return maxsum
}
function maxSubArray(arr){
    let maxsum = -Infinity, currsum= 0;
    let start =0, end = 0, tempStart =0;

    for( let i =0;i<arr.length+1;i++){
        if( arr[i]> currsum + arr[i]){
            currsum = arr[i]
            tempStart =i
        }
        else{
            currsum += arr[i]
        }

        if(currsum> maxsum){
            maxsum = currsum
            start = tempStart
            end = i;
        }
        
    }
    return arr.slice(start,end+1)
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));