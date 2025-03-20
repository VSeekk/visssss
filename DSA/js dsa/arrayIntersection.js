function arrayIntersection(arr1, arr2){
    let set1 = new Set(arr1), result = []

    for( let num of arr2){
        if(set1.has(num)){
            result.push(num)
            set1.delete(num)
        }
    }
    return result;
}


console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5]));