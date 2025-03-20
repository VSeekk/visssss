arr = [13, 46, 24, 52, 20, 9, 7, 43, 12, 34]

def partition(arr, low, high):
    pivot = arr[low]
    i = low + 1
    j = high

    while True:
        while i <= j and arr[i] <= pivot:
            i += 1
        while i <= j and arr[j] >= pivot:
            j -= 1
        if i <= j:
            arr[i], arr[j] = arr[j], arr[i]
        else:
            break

    arr[low], arr[j] = arr[j], arr[low]
    return j

def quickSort(arr, low, high):
    if low < high:
        pIndex = partition(arr, low, high)
        quickSort(arr, low, pIndex - 1)
        quickSort(arr, pIndex + 1, high)

quickSort(arr, 0, len(arr) - 1)
print(arr)