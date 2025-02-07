arr = [3, 4, 5, 2, 4, 1, 2, 1, 1, 3, 7, 1, 2]

freq = {}

for num in arr:
    if num in freq:
        freq[num] += 1
    else:
        freq[num] = 1

print(freq)