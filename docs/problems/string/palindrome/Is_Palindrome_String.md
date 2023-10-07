# Is Palindrome String

## Problem
- Check the input string is palindrome or not.

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Each pointer start from each end and they move toward each other.
  ```java
  boolean isPalindrome(String s) {
      int left = 0, right = s.length() - 1;
      while (left < right) {
          if (s.charAt(left) != s.charAt(right)) {
              return false;
          }
          left++;
          right--;
      }
      return true;
  }
  ```
