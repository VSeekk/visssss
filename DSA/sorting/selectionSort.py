arr = [13, 46, 24, 52, 20 , 9]

for i in range(len(arr)):
    min = i
    for j in range(i+1, len(arr)):
        if arr[min] > arr[j]:
            min = j
    arr[i], arr[min] = arr[min], arr[i]

print(arr)
    