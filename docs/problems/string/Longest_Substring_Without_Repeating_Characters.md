# Longest Substring Without Repeating Characters

## Alias
- Leetcode (3): [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Problem

## Examples
- Example 1
   - Input
     ```
     "abcabcbb"
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - The answer is "abc", with the length of 3.
- Example 2
   - Input
     ```
     "bbbbb"
     ```
   - Output
     ```
     1
     ```
   - Explanation
      - The answer is "b", with the length of 1.
- Example 3
   - Input
     ```
     "pwwkew"
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - The answer is "wke", with the length of 3.
      - Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

## Solutions
- **Solution 1: Sliding window**
   - Idea
      - Use 1 hashmap (`window`) to store the frequency of each characters in the window.
      - Shrink the window if there is a char occurring more than once.
   - Complexity
      - Time complexity: *O(n)*

  ```java
  int lengthOfLongestSubstring(String s) {
      Map<Character, Integer> window = new HashMap<>();  // store frequencies of each char in window

      int left = 0, right = 0;
      int res = 0;

      // increase the window
      while (right < s.length()) {
          char c = s.charAt(right);
          right++;
  
          window.put(c, window.getOrDefault(c, 0) + 1);

          // shrink the window
          while (window.get(c) > 1) {
              char d = s.charAt(left);
              left++;
            
              window.put(d, window.get(d) - 1);
          }
        
          res = Math.max(res, right - left);
      }
      return res;
  }
  ```
- Solution 2: My solution
  ```java
  class Solution {
      public int lengthOfLongestSubstring(String s) {
          if (s.isEmpty()) {
              return 0;
          }
        
          char[] chars = s.toCharArray();
          int start         = 0;
          int end           = 0;
          int maxLength     = 1;
          int currentLength = 0;
        
          while (end < chars.length) {
              if (start == end) {
                  currentLength = 1;
                  end++;
              } else {
                  if (hasChar(chars, start, end-1, chars[end])) {
                      start = start + 1;
                      end = start;
                      currentLength = 0;
                  } else {
                      currentLength++;
                      if (currentLength > maxLength) {
                          maxLength = currentLength;
                      }
                      end++;
                  }
              }
          }
        
          return maxLength;
      }
    
      public boolean hasChar(char[] chars, int start, int end, char target) {
          for (int i = start; i <= end; i++) {
              if (chars[i] == target) {
                  return true;
              }
          }
          return false;
      }
  }
  ```
