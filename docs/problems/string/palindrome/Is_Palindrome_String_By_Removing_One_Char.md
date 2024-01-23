# Is Palindrome String by Removing One Char

## Alias
- Leetcode (680): [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

## Problem
- Check the input string is palindrome or not.
- You can delete at most one character.

## Solutions
- Solution 1: 2 pointers (meet pointers)
   - Idea
      - Compare the character of the left pointer and the character of the right pointer.
         - If same, continue.
         - If not same, consider remove the character of theleft pointer or remove the character of the right pointer.

  ```java
  class Solution {
      public boolean validPalindrome(String s) {
          int i = 0;
          int j = s.length() - 1;
        
          while (i < j) {
              // Found a mismatched pair - try both deletions
              if (s.charAt(i) != s.charAt(j)) {
                  return (isPalindrome(s, i, j - 1) || isPalindrome(s, i + 1, j));
              }
            
              i++;
              j--;
          }
        
          return true;
      }

      boolean isPalindrome(String s, int left, int right) {
          while (left < right) {
              if (s.charAt(left) != s.charAt(right)) {
                  return false;
              }
              left++;
              right--;
          }
          return true;
      }
  }
  ```
