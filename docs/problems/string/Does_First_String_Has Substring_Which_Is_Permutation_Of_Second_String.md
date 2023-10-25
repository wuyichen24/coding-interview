# Does First String Has Substring Which Is Permutation Of Second String

## Alias
- Leetcode (567): [Permutation in String](https://leetcode.com/problems/permutation-in-string/)

## Problem
Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.

## Examples
- Example 1
   - Input
     ```
     s1 = "ab"
     s2 = "eidbaooo"
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - `s2` contains one permutation of `s1` (`"ba"`).
- Example 2
   - Input
     ```
     s1 = "ab"
     s2 = "eidboaoo"
     ```
   - Output
     ```
     false
     ```

## Solutions
- **Solution 1: Sliding window**
  - Idea
     - Define a sliding window which `[left, right)`.
        - Use 2 hashmaps (`need` and `window`) to store the frequency of each characters in the string s1 and the window. 
        - Use 1 variable (`valid`) to count the number of characters whose frequency are matched between string s1 and window.
        - Shrink the window if the length of the window is greater than the length of s1.

  ```java
  public boolean checkInclusion(String s1, String s2) {
      HashMap<Character, Integer> need = new HashMap<>();    // store the frequency of each char in string s1
      HashMap<Character, Integer> window = new HashMap<>();  // store the frequency of each char in window

      // count the frequency of each char in string s1
      for (int i = 0; i < s1.length(); i++) {
          char c = s1.charAt(i);
          need.put(c, need.getOrDefault(c, 0) + 1);
      }

      int left = 0, right = 0;
      int valid = 0;  // store number of chars whose frequency are matched between string s1 and window
        
      // increase the window
      while (right < s2.length()) {
          char c = s2.charAt(right);
          right++;

          // update window and valid
          if (need.containsKey(c)) {
              window.put(c, window.getOrDefault(c, 0) + 1);
              if (window.get(c).equals(need.get(c)))
                  valid++;
          }

          // shrink the window
          while (right - left >= s1.length()) {
              if (valid == need.size())         // if the current window is the permutation, return true
                  return true;
                
              char d = s2.charAt(left);
              left++;

              // update window and valid
              if (need.containsKey(d)) {
                  if (window.get(d).equals(need.get(d)))
                      valid--;
                  window.put(d, window.getOrDefault(d, 0) - 1);
              }
          }
      }

      return false;
  }
  ```
