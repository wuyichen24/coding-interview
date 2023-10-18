# Peak Number

## Problem
A k-Spike is an element that satisfies both the following conditions:
- There are at least k elements from indices (0, i-1) that are less than prices[i].
- There are at least k elements from indices (i+1, n-1) that are less than prices[i].

Count the number of k-Spikes in the given array.

### Example

prices = [1, 2, 8, 5, 3, 4], k = 2

There are 2 k-Spikes:
- 8 at index 2 has (1, 2) to the left and (5, 3, 4) to the right that are less than 8.
- 5 at index 3 has (1, 2) to the left and (3, 4) to the right that are less than 5.

The answer is 2.

### Function Description

Complete the function **countkSpikes**

**countkSpikes** has the following parameters:
- int prices[n]:  stock prices over time
- int k: the required number of lesser elements left and right of an index to form a k-Spike
Returns

### Returns
int: the number of k-Spikes.

## Examples
- Example 1
   - Input
     ```
     prices = [1, 3, 2, 5, 4]
     k = 2
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The value 3 is a k-Spike based on 1 to the left and 2 to the right.
      - The value 5 is also a k-Spike based on (1, 3, 2) to the left and (4) to the right.
- Example 2
   - Input
     ```
     prices = [1, 2, 8, 3, 7, 5, 4]
     k = 2
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - 8 is a k-Spike, left = (1, 2), right = (3, 7, 5, 4).
      - 7 is a k-Spike, left = (1, 2, 3), right = ( 5, 4).
- Example 3
   - Input
     ```
     prices = [1, 2, 8, 3, 7, 4, 6, 5]
     k = 3
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - 7 is a k-Spike, left = [1, 2, 3] and right = [4, 6, 5]

## Solutions
- Solution 1: Priority queue
   - Idea
      - We could maintain a max heap whose maximum length is K.
      - Then we iterate the list from left to right,  
         - if  len(heapq)<k, we insert the current number into heapq.
         - If len(heapq)==k and heapq[0]<current number, it means that there are at least K numbers in the left of the current number and smaller than the current number.
         - If len(heapq)==k and heapq[0]<current number, we pop from the heapq and then insert the current number.
         - Then we iterate the array from right to left.
         - time complexity is O(n)+O(klogk)

  **Python**
  ```python
  import heapq
  def CheckPeakNum(array, k):
      # left to right
      left_flag = [False] * len(array)
      heap = []
      for i, num in enumerate(array):
      if len(heap)<k:
          heapq.heappush(heap, -1*num)
      else:
          # if cur<max
          if (-1*num)>heap[0]:
              heapq.heappop(heap)
              heapq.heappush(heap, -1*num)
          elif (-1*num)<heap[0]:
              left_flag[i] = True
     
      # right to left
      right_flag = [False] * len(array)
      heap = []
      for i in range(len(array)-1, -1, -1):
      num = array[i]
      if len(heap)<k:
          heapq.heappush(heap, -1*num)
      else:
          # cur<max
          if (-1*num)>heap[0]:
              heapq.heappop(heap)
              heapq.heappush(heap, -1*num)
          elif (-1*num)<heap[0]:
              right_flag[i] = True
     
      result = 0
      for i in range(len(array)):
      if left_flag[i] and right_flag[i]:
          result += 1
      return result
  ```
## Reference
- Same question: https://leetcode.com/problems/count-the-number-of-k-big-indices/
- https://leetcode.com/discuss/interview-question/4061311/Spike-and-datacenters-OA-amazon

- 就是 有一串 array int[] 和 一个 K 作为参数 传进来， 让 你找符合以下条件 peak number 的个数
- peak number 就是 以它为中心 它俩边至少有k 个数比它小 左边有至少 k 右边 有至少k个
- 上个例子：
- input： 【1,2,8,5,3,4】 k = 2   
- 输出： 2 （因为 有8 和 5 满足条件）

- Count the number of k-Spikes in the given array.
- Example
- prices = [1, 2, 8, 5, 3, 4]
- k= 2
- There are 2 k-Spikes:
﻿﻿- 8 at index 2 has (1, 2) to the left and (5, 3, 4) to the right that are less than 8.
﻿﻿- 5 at index 3 has (1, 2) to the left and (3, 4) to the right that are less than 5.
