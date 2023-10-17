# Find Balanced Subsegments

## Problem
Amazon Web services has n servers lined up in a row. the `ith` server has the capacity of capacity[i]. Any application can be deployed on a balanced contiguous subsegment of 3 or more servers.

A contiguous segement, `[l, r]` of servers is said to be balanced if `capacity[l] = capacity[r] = sum[capacity[l + 1]...capacity[r - 1]]` i.e. the capacity of the servers at the endpoints of the segment should be equal to the sum of the capacity of all the interior servers.

Given the capacity of each server in a row, find the number of balanced subsegements in it.

### Constraints
- 1 <= n <= 10 ^ 5
- 1 <= capacity[i] <= 10 ^ 9

### Example
assert(findBalancedSubsegments([9, 3, 3, 3, 9]) == 2)
assert(findBalancedSubsegments([9, 3, 1, 2, 3, 9, 10]) == 2)
assert(findBalancedSubsegments([6, 1, 2, 3, 6]) == 1)

## Solutions
```python
def findBalancedSubsegments(capacity):
    n = len(capacity)
    prefix_sum = [0] * n
    for i in range(n):
        if i - 1 >= 0:
            prefix_sum[i] += prefix_sum[i - 1]
        prefix_sum[i] += capacity[i]

    from collections import defaultdict
    
    idxs = defaultdict(list)
    for i in range(n):
        idxs[capacity[i]].append(i)

    res = 0

    for key, value in idxs.items():
        m = len(value)
        for i in range(m):
            if i + 1 < m:
                left_index, right_index = value[i], value[i + 1]
                if prefix_sum[right_index - 1] - prefix_sum[left_index] == key:
                    res += 1
            if i + 2 < m:
                left_index, right_index = value[i], value[i + 2]
                if prefix_sum[right_index - 1] - prefix_sum[left_index] == key:
                    res += 1
    
    return res
```
