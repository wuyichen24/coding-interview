# Find Element Only Appear Once.md

## Alias
- Leetcode (136): [Single Number](https://leetcode.com/problems/single-number/)

## Problem
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

## Examples
- Example 1
   - Input
     ```
     [2,2,1]
     ```
   - Output
     ```
     1
     ```
- Example 2
   - Input
     ```
     [4,1,2,1,2]
     ```
   - Output
     ```
     4
     ```

## Solutions
- Solution 1: Bit manipulation
   - Idea
      - If we take XOR of zero and some bit, it will return that bit
         - `a ⊕ 0 = a`
      - If we take XOR of two same bits, it will return 0
         - `a ⊕ a = 0`
      - `a ⊕ b ⊕ a= (a ⊕ a) ⊕ b = 0 ⊕ b = b`
   - Complexity
      - Time complexity: *O(n)*
      - Space complexity: *O(1)*

  ```java
  public int singleNumber(int[] nums) {
      int a = 0;
      for (int i : nums) {
          a ^= i;
      }
      return a;
  }
  ```
