# Multi Dimensional Selection

## Problem
Given a 2-d array *arr of size n x m*, a selection is defined as an array of integers such that it contains at least [*m*/2] (roundup) integers from each row of *arr*. The *cost* of the selection is defined as the maximum difference between any two integers of the selection.

Suppose *k* is the minimum cost of all the possible selections for the given 2-d array. Find the maximum value of the product of *k* * the number of integers considered in the selection with the minimum cost.

**Example**

Suppose n= 3, m = 2, and arr = [[1, 2], [3, 4], [8, 9]]

Some of the possible selections are [2, 3, 8], [1, 2, 3, 9], [1, 3, 4, 8, 9] etc. The cost of these selections are 8 - 2 = 6, 9 - 1 = 8, and 8 respectively.

Here the minimum cost of all the possible selections is 6. The possible selections with the cost 6 are [2, 4, 8] and [2, 3, 4, 8]. The maximum value of the required product is obtained using the latter selection i.e. 6 * 4 = 24. Hence the answer is 24.

**Function Description**

Complete the function *getMaxProduct* in the editor below.

*getMaxProduct* has the following parameter:
  *int arr[n][m]*: the given 2-d array

**Returns**
  
  int: the maximum possible product

**Constraints**

1 <= n <= 10^3

2 <= m <= 10^3

1 <= arr[i][j] <= 10^9

## Examples
- Example 1
   - Input
     ```
     STDIN          FUNCTION
     -----          --------
     3        ->    arr[] size n = 3
     2        ->    arr[][] size m = 2
     2 3      ->    arr = [[2, 3], [1, 2], [4, 3]]
     1 2
     4 3
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - The minimum cost accross all the selections is 1. The optimal selection with cost 1 is [2, 3, 2, 3] with the product 1 * 4 = 4
- Example 2
   - Input
     ```
     STDIN          FUNCTION
     -----          --------
     2       ->    arr[] size n = 2
     3        ->   arr[][] size m = 3
     1 4 3    ->   arr = [[1, 4, 3], [3, 5, 6]]
     3 5 6
     ```
   - Output
     ```
     8
     ```
   - Explanation
      - The minimum cost accross all the selections is 2. The optimal selection with cost 2 is [4, 3, 3, 5] with the product 2 * 4 = 8

## Solutions
- Solution 1: Sliding window
   - Idea
      - Sort nums in each row, start with the first m/2 nums for each row
      - The local minimal cost is the gap between the smallest and the largest of all m/2 windows across rows
      - The m/2 window with the smallest element moves right by 1, and calculate the new local minimal cost.
      - If multiple rows' m/2 window share the same smallest num, we move the one with the smallest rightmost num after right move. e.g.
        ```
                         rows of [2,4,5], [2,3,6],  if window size==2,  
                         [2,4] and [2,3] have the same smallest num 2, 
                         we move [2,4] -->[4,5], because 6 in [3,6]>5, causing higher cost
        ```
      - Get the global minimal cost and the num ranges causing the minimal cost
    
  ```python
  def getMaxProduct(arr, n, m):
      arr = list(map(sorted, arr))  # sort each row
      w = (m - 1) // 2  # m/2 window length
      index = Counter()  # record where the begining of the m/2 window has reached for each row

      low = [(arr[i][0], arr[i][w + 1], i, 0) for i in range(n)]
      heapq.heapify(low)
      h = max(arr[i][w] for i in range(n))

      res = [float('inf'), []]  # minimal cost, &  the low and high nums causing the minimal cost.
      while True:
          while index[low[0][2]] != low[0][3]:  # remove invalid low values
              heapq.heappop(low)

          l = low[0][0]  # current low of all rows

          if res[0] == h - l:
              res[1] += [(l, h)]  # if multiple ranges have the same minimal cost, save all of them

          elif res[0] > h - l:
              res = [h - l, [(l, h)]]

          r, c = low[0][2:]
          if c + w == m - 1:  # stop the loop if a row's m/2 window can no longer move right
              break
              # m/2 window for row r moves right by 1, from [c:c+w] to [c＋1，c+1+w]
          heapq.heappush(low, (arr[r][c + 1], arr[r][min(c + 1 + w + 1, m - 1)], r, c + 1))
          h = max(h, arr[r][c + 1 + w])
          index[r] += 1

      # for all minimal cost ranges, check which one can cover more nums
      ct = max(sum(bisect.bisect_right(row, h) - bisect.bisect_left(row, l) for row in arr) for l, h in res[1])

      return ct * res[0]
  ```
## References
- [Tiktok Practice OA](https://leetcode.com/discuss/interview-question/2772039/Tiktok-Practice-OA)
