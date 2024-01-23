# Generate Random Index with Weight

## Alias
- Leetcode (528): [Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
- GeeksforGeeks: [Random number generator in arbitrary probability distribution fashion](https://www.geeksforgeeks.org/random-number-generator-in-arbitrary-probability-distribution-fashion/)

## Problem
- In the input array, each element is the weight of each element.
- Randomly return an index of the input array with probability proportional to its weight

## Example
- Input array: [1, 6, 2, 1]
- The probability of return 0: 1 / (1+6+2+1) = 1 / 10
- The probability of return 1: 6 / (1+6+2+1) = 6 / 10
- The probability of return 2: 2 / (1+6+2+1) = 2 / 10
- The probability of return 3: 1 / (1+6+2+1) = 1 / 10

## Analysis
- Get a random number with proportional probability like a person throws a ball into different ranges.
- The element with large weight would occupy a broader range on the line compared to the element with small weight.
- Different ranges are separated by the offsets.
- The offsets of the ranges are actually the prefix sums from a sequence of numbers.
- So the problem can be consider as
    - Generate a random number between 0 and the total weight.
    - See the random number drop in which range based on offsets (prefix sum array).
    - Pick the index of that range.

  ![Untitled (2)](https://user-images.githubusercontent.com/8989447/115642306-f2328e80-a2d7-11eb-8816-2562c6bf77e1.png)

## Solutions
- **Solution 1: Prefix sum array + binary search**
   - Idea
      - Use prefix sum array and binary search to build a random generator.
   - Steps
      - Constructor
         - Build a prefix sum array and shift one position for `preSum[0]`
      - Generator
         - Generate a random number between `[1,preSum[n-1])`.
         - Use binary search to find minimum `i` which `preSum[i] >` target.
           
  ```java
  class Solution {
      private int[] preSum;
      private Random rand = new Random();

      public Solution(int[] w) {
          int n = w.length;
          // build prefix sum array, shift one position for preSum[0]
          preSum = new int[n + 1];
          preSum[0] = 0;
          // preSum[i] = sum(w[0..i-1])
          for (int i = 1; i <= n; i++) {
              preSum[i] = preSum[i - 1] + w[i - 1];
          }
      }
    
      public int pickIndex() {
          int n = preSum.length;
          // generate a random number between [0, n) 
          // + 1 means pick a random number between [1, preSum[n - 1]]
          int target = rand.nextInt(preSum[n - 1]) + 1;

          // get the min index which prefix(i) > target 
          return left_bound(preSum, target) - 1;
      }

      int left_bound(int[] nums, int target) {
          if (nums.length == 0) return -1;
          int left = 0, right = nums.length;
          while (left < right) {
              int mid = left + (right - left) / 2;
              if (nums[mid] == target) {
                  right = mid;
              } else if (nums[mid] < target) {
                  left = mid + 1;
              } else if (nums[mid] > target) {
                  right = mid;
              }
          }
          return left;
      }
  }
  ```

## Reference
- https://labuladong.github.io/algo/di-yi-zhan-da78c/shou-ba-sh-48c1d/dai-quan-z-585d6/
