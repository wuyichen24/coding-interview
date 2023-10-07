# Reverse Char Array

## Alias
- Leetcode (344): [Reverse String](https://leetcode.com/problems/reverse-string/)

## Problem
Write a function that reverses a string. The input string is given as an array of characters `s`.

You must do this by modifying the input array in-place with *O(1)* extra memory.

## Examples
- Example 1
   - Input
     ```
     ["h","e","l","l","o"]
     ```
   - Output
     ```
     ["o","l","l","e","h"]
     ```
- Example 2
   - Input
     ```
     ["H","a","n","n","a","h"]
     ```
   - Output
     ```
     ["h","a","n","n","a","H"]
     ```

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Each pointer start from each end and they move toward each other.

  ```java
  public void reverseString(char[] s) {
      int left = 0, right = s.length - 1;
      while (left < right) {
          char temp = s[left];
          s[left] = s[right];
          s[right] = temp;
          left++;
          right--;
      }
  }
  ```
