function mergeSortedArrays(arr1, arr2){
    let merged= [], i=0, j=0;
    
    while( i < arr1.length && j <arr2.length){
        if (arr1[i]<arr2[j]) merged.push(arr1[i++])
        else merged.push(arr2[j++])
    }
    return [...merged, ...arr1.slice(i), ...arr2.slice(j)]
}

console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6,8]));