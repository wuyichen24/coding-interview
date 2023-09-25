# Longest Palindromic Substring

## Alias
- Leetcode (5): [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

## Problem
Given a string `s`, return the longest palindromic substring in `s`.

## Examples
- Example 1
   - Input
     ```
     "babad"
     ```
   - Output
     ```
     "bab"
     ```
   - Explanation
      - `"aba"` is also a valid answer.
- Example 2
   - Input
     ```
     "cbbd"
     ```
   - Output
     ```
     "bb"
     ```

## Solutions
- **Solution 1: 2 pointers**
   - Idea
      - Check each char from left to right and extend palindromic substring at each char
      - Consider both odd length substring and even length substring

  ```java
  class Solution {
      public String longestPalindrome(String s) {
          String res = "";
          for (int i = 0; i < s.length(); i++) {
              String s1 = palindrome(s, i, i);        // consider odd length: s[i] is the center of the palindrome substring
              String s2 = palindrome(s, i, i + 1);    // consider even length: s[i] and s[i+1] are the center of the palindrome substring

              res = res.length() > s1.length() ? res : s1;
              res = res.length() > s2.length() ? res : s2;
          }
          return res;
      }

      String palindrome(String s, int l, int r) {
          while (l >= 0 && r < s.length() && s.charAt(l) == s.charAt(r)) {  // extend 2 pointers to each end
              l--;
              r++;
          }

          return s.substring(l + 1, r);
      }
  }
  ```
