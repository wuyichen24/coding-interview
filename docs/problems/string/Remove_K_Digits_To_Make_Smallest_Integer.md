# Remove K Digits

## Alias
- Leetcode (402): [Remove K Digits](https://leetcode.com/problems/remove-k-digits/)

## Problem
Given string num representing a non-negative integer `num`, and an integer `k`, return the **smallest possible integer** after removing `k` digits from `num`.

## Examples
- Example 1
   - Input
     ```
     num = "1432219"
     k = 3
     ```
   - Output
     ```
     "1219"
     ```
   - Explanation
      - Remove the three digits `4`, `3`, and `2` to form the new number `1219` which is the smallest.
- Example 2
   - Input
     ```
     num = "10200"
     k = 1
     ```
   - Output
     ```
     "200"
     ```
   - Explanation
      - Remove the leading `1` and the number is `200`. Note that the output must not contain leading zeroes.
- Example 3
   - Input
     ```
     num = "10"
     k = 2
     ```
   - Output
     ```
     "0"
     ```
   - Explanation
      - Remove all the digits from the number and it is left with nothing which is `0`.
    
## Solutions
- Solution 1: Greedy with Stack
   - Idea
      - The **leftmost distinct** digits that determine the superior of the two numbers.
      - Rule:
         - Given a sequence of digits [D1,D2,D3, ... ,Dn], if the digit D2 is less than its left neighbor D1, then we should remove the left neighbor (D1) in order to obtain the minimum result.

  ```java
  ```
