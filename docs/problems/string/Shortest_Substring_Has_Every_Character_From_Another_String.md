# Shortest Substring Has Every Character From Another String

## Alias
- Leetcode (79): [Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

## Problem
Given two strings `s` and `t` of lengths `m` and `n` respectively, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

## Exsmples
- Example 1
   - Input
     ```
     s = "ADOBECODEBANC"
     t = "ABC"
     ```
   - Output
     ```
     "BANC"
     ```
   - Explanation
      - The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
- Example 1
   - Input
     ```
     s = "a"
     t = "a"
     ```
   - Output
     ```
     "a"
     ```
   - Explanation
      - The entire string s is the minimum window.
- Example 1
   - Input
     ```
     s = "a"
     t = "aa"
     ```
   - Output
     ```
     ""
     ```
   - Explanation
      - Both 'a's from t must be included in the window.
      - Since the largest window of s only has one 'a', return empty string.

## Solutions
- **Solution 1: Sliding window**
   - Idea
      - Define a sliding window which `[left, right)`.
      - Use 2 hashmaps (`need` and `window`) to store the frequency of each characters in the string t and the window. 
      - Use 1 variable (`valid`) to count the number of characters whose frequency are matched between string t and window.
      - Shrink the window if all the characters in window are matched the frequencies in string t.

  ```java
  public String minWindow(String s, String t) {    
      Map<Character, Integer> need = new HashMap<>();     // store the frequency of each char in string t
      Map<Character, Integer> window = new HashMap<>();   // store the frequency of each char in window

      // count the frequency of each char in string t 
      for (char c : t.toCharArray()) {
          need.put(c, need.getOrDefault(c, 0) + 1);
      }

      int left = 0, right = 0;
      int valid = 0;                // store number of chars whose frequency are matched between string t and window
      int start = 0;                // store the start index of the shortest substring
      int len = Integer.MAX_VALUE;  // store the length of the shortest substring

      // expend the window
      while (right < s.length()) {
          char c = s.charAt(right);
          right++;

          // update window and valid
          if (need.containsKey(c)) {
              window.put(c, window.getOrDefault(c, 0) + 1);
              if (window.get(c).equals(need.get(c)))
                  valid++;
          }

          // shrink the window
          while (valid == need.size()) {    // if all the chars in window are matched the frequencies in string t 
              if (right - left < len) {     // update the start and len
                  start = left;
                  len = right - left;
              }

              char d = s.charAt(left);
              left++;
                
              // update window and valid
              if (need.containsKey(d)) {
                  if (window.get(d).equals(need.get(d)))
                       valid--;
                  window.put(d, window.get(d) - 1);
              }
          }
      }

      return len == Integer.MAX_VALUE ? "" : s.substring(start, start + len);
  }
  ```
