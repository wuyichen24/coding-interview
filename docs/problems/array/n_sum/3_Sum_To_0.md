# 3 Sum to 0

## Alias
- Leetcode (15): [3Sum](https://leetcode.com/problems/3sum)

## Problem
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

## Examples
- Example 1
   - Input
     ```
     [-1,0,1,2,-1,-4]
     ```
   - Output
     ```
     [[-1,-1,2],[-1,0,1]]
     ```
   - Explanation
      - `nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0`.
      - `nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0`.
      - `nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0`.
      - The distinct triplets are `[-1,0,1]` and `[-1,-1,2]`.
    
## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Iterate through the array and 2 pointers to locate other 2 values.
      - The 2 pointers solution similar to [Two Sum of Sorted Array](Two_Sum_Of_Sorted_Array.md)
   - Steps
      - Main function:
         - Sort the array
         - Iterate through the array:
            - If the current value is greater than 0, continue, because remaining values cannot sum to zero;
            - If the current value is same as the previous value, continue, because no duplicate triplets;
            - Call the `twoSumII` function with the current index.
      - `twoSumII` function:
         - Let the `lo` pointer points to the `i+1` value, let the `hi` pointer points to the rightmost value.
         - Compare the sum of 2 pointers and the `i` value with the target value:
            - Sum < 0:
               - Move the lo pointer to next right element.
            - Sum > 0:
               - Move the hi pointer to next left element.
            - Sum = 0:
               - Add the 3 values into result list.

  ```java
  class Solution {
      public List<List<Integer>> threeSum(int[] nums) {
          Arrays.sort(nums);
          List<List<Integer>> res = new ArrayList<>();
          for (int i = 0; i < nums.length && nums[i] <= 0; ++i)
              if (i == 0 || nums[i - 1] != nums[i]) {
                  twoSumII(nums, i, res);
              }
          return res;
      }
      void twoSumII(int[] nums, int i, List<List<Integer>> res) {
          int lo = i + 1, hi = nums.length - 1;
          while (lo < hi) {
              int sum = nums[i] + nums[lo] + nums[hi];
              if (sum < 0) {
                  ++lo;
              } else if (sum > 0) {
                  --hi;
              } else {
                  res.add(Arrays.asList(nums[i], nums[lo++], nums[hi--]));
                  while (lo < hi && nums[lo] == nums[lo - 1])
                      ++lo;
              }
          }
      }
  }
  ```
