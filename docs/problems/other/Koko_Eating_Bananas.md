# Koko Eating Bananas

## Alias
- Leetcode (875): [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)

## Problem
Koko loves to eat bananas. There are n piles of bananas, the `ith` pile has `piles[i]` bananas. The guards have gone and will come back in `h` hours.

Koko can decide her bananas-per-hour eating speed of `k`. Each hour, she chooses some pile of bananas and eats `k` bananas from that pile. If the pile has less than `k` bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

**Return the minimum integer `k` such that she can eat all the bananas within `h` hours**.

## Examples
- Example 1
   - Input
     ```
     piles = [3,6,7,11]
     h = 8
     ```
   - Output
     ```
     4
     ```
- Example 2
   - Input
     ```
     piles = [30,11,23,4,20]
     h = 5
     ```
   - Output
     ```
     30
     ```
- Example 3
   - Input
     ```
     piles = [30,11,23,4,20]
     h = 6
     ```
   - Output
     ```
     23
     ```

## Solutions
- **Solution 1: Binary search**
   - Idea
      - Use binary search to search the `x` which `f(x)` hours can eat all the bananas.
         - `f(x)` is monotonic decreasing function: When `x` increasing, `f(x)` decreasing.
         - Find minimum `x` which maximum `f(x) <= target`.

  <img width="534" alt="Screenshot 2023-10-22 at 10 34 31 PM" src="https://github.com/wuyichen24/coding-interview/assets/8989447/b08a23b0-4f49-49fb-bf9c-c8b2865ff683">

  ```java
  class Solution {
      public int minEatingSpeed(int[] piles, int h) {
          int left = 1;
          int right = Integer.MAX_VALUE;

          while (left <= right) {
              int mid = left + (right - left) / 2;
              if (f(piles, mid) <= h) {
                  right = mid - 1;
              } else {
                  left = mid + 1;
              }
          }

          return left;
      }

      int f(int[] piles, int x) {
          int hours = 0;
          for (int i = 0; i < piles.length; i++) {
              hours += piles[i] / x;
              if (piles[i] % x > 0) {
                  hours++;
              }
          }
          return hours;
      }
  }
  ```
