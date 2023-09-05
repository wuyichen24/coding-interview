# Find Element Only Appear Once II.md

## Alias
- Leetcode (137): [Single Number II](https://leetcode.com/problems/single-number-ii/)

## Problem
Given an integer array `nums` where every element appears **three times** except for one, which appears **exactly once**. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Examples
- Example 1
   - Input
     ```
     [2,2,3,2]
     ```
   - Output
     ```
     3
     ```
- Example 2
   - Input
     ```
     [0,1,0,1,0,1,99]
     ```
   - Output
     ```
     99
     ```

## Solutions
- Solution 1: Bit manipulation

  ```java
  public int singleNumber(int[] nums) {
      // Loner
      int loner = 0;

      // Iterate over all bits
      for (int shift = 0; shift < 32; shift++) {
          int bitSum = 0;

          // For this bit, iterate over all integers
          for (int num : nums) {
              // Compute the bit of num, and add it to bitSum
              bitSum += (num >> shift) & 1;
          }

          // Compute the bit of loner and place it
          int lonerBit = bitSum % 3;
          loner = loner | (lonerBit << shift);
      }
      return loner;
  }
  ```
