# Basic algorithm to find smallest integer

import time
from random import randrange


def find_smaller_num(our_list):
    # pick first value as initial small number
    smallest_num = our_list[0]  # O(1)

    for i in range(0, len(our_list)):  # O(n)
        for j in range(0, len(our_list)):  # O(n)
            if our_list[i] < smallest_num:  # O(1)
                smallest_num = our_list[i]  # O(1)
    # T(n) = 1 + n * n + 1 + 1 => 3n + n^2 => O(n^2)

    return smallest_num


def find_min(our_list):
    min_so_far = our_list[0]  # O(1)

    for i in range(len(our_list)):  # O(n)
        if min_so_far > our_list[i]:  # (1)
            min_so_far = our_list[i]  # O(1)

    # T(n) = 1 + n + 1 + 1 => 3n + n => O(n) Linear time
    return min_so_far


# Calculate runtime using time module
for listSize in range(1000, 10001, 1000):
    aList = [randrange(100000) for x in range(listSize)]
    start = time.time()
    print(find_min(aList))
    end = time.time()

    print("Size: %d time: %f" % (listSize, end - start))


print(list(range(20, 10, -2)))
print(find_smaller_num(list(range(20, 10, -2))))
