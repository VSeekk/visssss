arr = [13, 46, 24, 52, 20 , 9]

def recursiveInsertionSort(arr, n, i):
    if i == n:
        return
    j =i
    while j>0 and arr[j-1] > arr[j]:
        arr[j-1], arr[j] = arr[j], arr[j-1]
        j -= 1
    recursiveInsertionSort(arr, n , i+1)

recursiveInsertionSort(arr, len(arr), 0)
print(arr)