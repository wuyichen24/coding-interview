# Is Palinedrome Integer

## Alias
- Leetcode (9): [Palindrome Number](https://leetcode.com/problems/palindrome-number/)

## Problem
Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.
You cannot convert integer to string.

## Examples
- Example 1
   - Input
     ```
     121
     ```
   - Output
     ```
     true
     ```
- Example 2
   - Input
     ```
     -121
     ```
   - Output
     ```
     false
     ```
   - Explanation
      - From left to right, it reads `-121`. From right to left, it becomes `121-`. Therefore it is not a palindrome.
- Example 3
   - Input
     ```
     10
     ```
   - Output
     ```
     false
     ```
   - Explanation
      - Reads `01` from right to left. Therefore it is not a palindrome.
    
## Solutions
- **Solution 1: Revert number and compare**
   - Idea
      - Revert the original number and compare the reverted number with the original number
      - Use `num % 10` to get the last digit.
   - Steps
      - Ignore some edge cases
         - Negative number
         - Number can be divided by 10
      - Get the last digit of original number
         - `1221 % 10 = 1`, `1` is the last digit
         - For removing the last digit, do `1221 / 10 = 122`
         - Use the same `122 % 10 = 2`, 2 is the second last digit.
      - Compare the reverted number with the original number, consider 2 cases
         - Length is even: `num == rev_num`
         - Length is odd: `num == rev_num / 10`
       
  ```java
  public bool IsPalindrome(int x) {
      // ignore some edge cases
      if(x < 0 || (x % 10 == 0 && x != 0)) {
          return false;
      }

      int revertedNumber = 0;
      while(x > revertedNumber) {
          revertedNumber = revertedNumber * 10 + x % 10;
          x /= 10;
      }

      // compare reverted number with original number, consider length is odd or even
      return x == revertedNumber || x == revertedNumber/10;
  }
  ```
