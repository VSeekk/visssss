function findMissingNumber(arr, n){
    let expectedSum = (n*(n+1))/2
    let actualSum = arr.reduce((sum,num)=> sum + num)

    return expectedSum- actualSum
}


console.log(findMissingNumber([1, 2, 3, 4, 5, 7], 7)); 