arr =[3,2,5,3,1,9,4,3,6,3,1]

def merge(arr, low, mid, high):
    temp = []
    left , right = low , mid+1
    while left <= mid and right <= high:
        if arr[left] <= arr[right]:
            temp.append(arr[left])
            left += 1
        else:
            temp.append(arr[right])
            right += 1
    while left <= mid:
        temp.append(arr[left])
        left += 1

    while right <= high:
        temp.append(arr[right])
        right += 1

    for i in range(low, high + 1):
        arr[i] = temp[i - low]

def mergesort(arr, low, high):
    if high > low: 
        mid = (high + low)//2
        mergesort(arr,low, mid)
        mergesort(arr, mid+1, high)
        merge(arr, low , mid, high)
    return arr

    

print(mergesort(arr, 0 , len(arr)-1))
