# Two Sum

## Alias
- Leetcode (1): [Two Sum](https://leetcode.com/problems/two-sum/)

## Problem
Given an array of integers `nums` and an integer `target`, **return indices of the two numbers such that they add up to target**.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

**You cannot sort the array**.

You can return the answer in any order.

## Examples
- Example 1
   - Input
     ```
     nums = [2,7,11,15]
     target = 9
     ```
   - Output
     ```
     [0,1]
     ```
- Example 2
   - Input
     ```
     nums = [3,2,4]
     target = 6
     ```
   - Output
     ```
     [1,2]
     ```
- Example 3
   - Input
     ```
     nums = [3,3]
     target = 6
     ```
   - Output
     ```
     [0,1]
     ```

## Solutions
- **Solution 1: Hashmap + 1 pass**
   - Idea
      - For each element `nums[i]`, you want to know is there another element `nums[j]` which is `nums[j] = target = nums[i]`.
      - Use hashmap to store the mapping between value to its index (Array is a mapping from index to value, hashmap is a mapping from value to index).

  ```java
  public int[] twoSum(int[] nums, int target) {
      HashMap<Integer, Integer> valToIndex = new HashMap<>();
      for (int i = 0; i < nums.length; i++) {
          int need = target - nums[i];
          if (valToIndex.containsKey(need)) {
              return new int[]{valToIndex.get(need), i};
          }
          valToIndex.put(nums[i], i);
      }
      return null;
  }
  ```
