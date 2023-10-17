# Find Minimum Price

## Problem
There are n products begin sold on the Amazon Online shopping app. The price of the `ith` product is `price[i]`. The developers at Amazon decided to give special gift cards to innovative customers. A gift card will be given if any customer buys a contiguous subsegment of products and at least `2` of the products have a matching price. Find the minimum amount of money a customer needs to spend in order to get the gift card. If is is not possible for any customer to get a gift card, return `-1`.

### Constraints
- 1 <= n <= 5 . 10 ^ 5
- 1 <= price[i] <= 10 ^ 6, 0 <= i < n

### Examples
- assert(findMinimumPrice([1, 2, 3, 1, 2, 1]) == 4)
- assert(findMinimumPrice([1, 2, 1, 2]) == 4)
- assert(findMinimumPrice([1, 100, 1, 7, 7]) == 14)

## Solutions
```python
def findMinimumPrice(price):
    n = len(price)
    prefix_sum = [0] * n
    for i in range(n):
        if i - 1 >= 0:
            prefix_sum[i] += prefix_sum[i - 1]
        prefix_sum[i] += price[i]

    from collections import defaultdict
    
    idxs = defaultdict(list)
    for i in range(n):
        idxs[price[i]].append(i)

    INF = 10 ** 18
    res = INF
    for key, value in idxs.items():
        m = len(value)
        for i in range(m):
            if i + 1 < m:
                left_index, right_index = value[i], value[i + 1]
                res = min(res, prefix_sum[right_index] - (prefix_sum[left_index - 1] if left_index - 1 >= 0 else 0))

    return -1 if res == INF else res
```

## References
- https://leetcode.com/discuss/interview-question/4153220/Amazon-OA-oror-Intern-2024-oror-Solutions
