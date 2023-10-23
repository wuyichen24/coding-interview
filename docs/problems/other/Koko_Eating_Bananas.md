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

  ```java
  class Solution {
      public int minEatingSpeed(int[] piles, int hours) {
          int left = 1;
          int right = 1000000000 + 1;

          while (left < right) {
              int mid = left + (right - left) / 2;
              if (f(piles, mid) <= hours) {         // if speed is not enough
                  right = mid;
              } else {                              // if speed is too much 
                  left = mid + 1;
              }
          }
          return left;
      }

      // input is speed, the output is the number of hours to eat all the bananas
      int f(int[] piles, int speed) {
          int hours = 0;
          for (int i = 0; i < piles.length; i++) {
              hours += piles[i] / speed;
              if (piles[i] % speed > 0) {
                  hours++;
              }
          }
          return hours;
      }
  }
  ```
