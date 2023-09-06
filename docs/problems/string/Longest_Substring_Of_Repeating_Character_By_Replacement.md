# Longest Substring of Repeating Character by Replacement

## Alias
- Leetcode (424): [Longest Repeating Character Replacement](https://leetcode.com/problems/longest-repeating-character-replacement/)

## Problem
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

**Return the length of the longest substring containing the same letter you can get** after performing the above operations.

## Examples
- Example 1
   - Input
     ```
     s = "ABAB"
     k = 2
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - Replace the two `'A'`s with two `'B'`s or vice versa.
- Example 2
   - Input
     ```
     s = "AABABBA"
     k = 1
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - Replace the one 'A' in the middle with 'B' and form "AABBBBA".
      - The substring "BBBB" has the longest repeating letters, which is 4.
      - There may exists other ways to achive this answer too.
    
## Solutions
- Solution 1: Sliding Window
  ```java
  class Solution {
      public int characterReplacement(String s, int k) {
          HashSet<Character> allLetters = new HashSet();

          // collect all unique letters
          for (int i = 0; i < s.length(); i++) {
              allLetters.add(s.charAt(i));
          }

          int maxLength = 0;
          for (Character letter : allLetters) {
              int start = 0;
              int count = 0;
              // initialize a sliding window for each unique letter
              for (int end = 0; end < s.length(); end += 1) {
                  if (s.charAt(end) == letter) {
                      // if the letter matches, increase the count
                      count += 1;
                  }
                  // bring start forward until the window is valid again
                  while (!isWindowValid(start, end, count, k)) {
                      if (s.charAt(start) == letter) {
                          // if the letter matches, decrease the count
                          count -= 1;
                      }
                      start += 1;
                  }
                  // at this point the window is valid, update maxLength
                  maxLength = Math.max(maxLength, end + 1 - start);
              }
          }
          return maxLength;
      }

      private Boolean isWindowValid(int start, int end, int count, int k) {
          return end + 1 - start - count <= k;
      }
  }
  ```
