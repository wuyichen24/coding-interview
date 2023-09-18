# Longest Consecutive Sequence

## Alias
- Leetcode (128): [Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)

## Problem
Given an unsorted array of integers `nums`, **return the length of the longest consecutive elements sequence**.

You must write an algorithm that runs in `O(n)` time.

## Examples
- Example 1
   - Input
     ```
     [100,4,200,1,3,2]
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
- Example 2
   - Input
     ```
     [0,3,7,2,5,8,4,6,0,1]
     ```
   - Output
     ```
     9
     ```
   - Explanation
      - The longest consecutive elements sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8]. Therefore its length is 9.
    
## Solutions
- **Solution 1: Hashset**
   - Idea
      - Use hashset to store all the unique numbers and allow *O(1)*.
      - Iterate each number to locate the first number in the sequence and then check the next +1 number is existing or not.
    
  ```java
  public int longestConsecutive(int[] nums) {
      // Add all the number to hashset
      HashSet<Integer> set = new HashSet<Integer>();
      for (int num : nums) {
          set.add(num);
      }

      int res = 0;

      for (int num : set) {
          if (set.contains(num - 1)) {       // if num is not the first number in the consecutive sequence, continue
              continue;
          }
                                             // if num is the first number in the consecutive sequence
          int curNum = num;
          int curLen = 1;

          while (set.contains(curNum + 1)) { // continue increase by 1 to see the next number is existing or not.
              curNum += 1;
              curLen += 1;
          }

          res = Math.max(res, curLen);       // if the consecutive sequence finished, update the max length if possible
      }

      return res;
  }
  ```
