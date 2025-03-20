arr = [13, 46, 24, 52, 20 , 9]

def recursiveBubbleSort(arr, n):
    if n<=1:
        return
    for j in range(0, n-1):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]

    recursiveBubbleSort(arr, n-1)

recursiveBubbleSort(arr, len(arr))
print(arr)