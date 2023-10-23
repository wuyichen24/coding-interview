# Capacity To Ship Packages Within D Days

## Alias
- Leetcode (1011): [Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)

## Problem
A conveyor belt has packages that must be shipped from one port to another within `days` days.

The `ith` package on the conveyor belt has a weight of `weights[i]`. Each day, we load the ship with packages on the conveyor belt (in the order given by `weights`). We may not load more weight than the maximum weight capacity of the ship.

Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within `days` days.

## Examples
- Example 1
   - Input
     ```
     weights = [1,2,3,4,5,6,7,8,9,10]
     days = 5
     ```
   - Output
     ```
     15
     ```
   - Explanation
      - A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
         - 1st day: 1, 2, 3, 4, 5
         - 2nd day: 6, 7
         - 3rd day: 8
         - 4th day: 9
         - 5th day: 10
      - Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
- Example 2
   - Input
     ```
     weights = [3,2,2,4,1,4]
     days = 3
     ```
   - Output
     ```
     6
     ```
   - Explanation
      - A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
         - 1st day: 3, 2
         - 2nd day: 2, 4
         - 3rd day: 1, 4
- Example 3
   - Input
     ```
     weights = [1,2,3,1,1]
     days = 4
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - 1st day: 1
      - 2nd day: 2
      - 3rd day: 3
      - 4th day: 1, 1

## Solutions
- **Solution 1: Binary search**
   - Idea
      - Use binary search to search the x weight capacity which f(x) days can ship all the packages.
         - f(x) is monotonic decreasing function: When x increasing, f(x) decreasing.
         - Find minimum x which maximum f(x) <= target.
       
  ```java
  class Solution {
      public int shipWithinDays(int[] weights, int days) {
          int left = 0;
          int right = 0;
          for (int w : weights) {
              left = Math.max(left, w);   // max among weights
              right += w;                 // sum of weights
          }

          while (left <= right) {
              int mid = left + (right - left) / 2;
              if (f(weights, mid) <= days) {
                  right = mid - 1;
              } else {
                  left = mid + 1;
              }
          }

          return left;
      }

      public int f(int[] weights, int x) {
          int days = 0;
          for (int i = 0; i < weights.length; ) {
              int cap = x;
              while (i < weights.length) {
                  if (cap < weights[i]) break;
                  else cap -= weights[i];
                  i++;
              }
              days++;
          }
          return days;
      }
  }
  ```
