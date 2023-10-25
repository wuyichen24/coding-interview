# Find All Anagrams in a String

## Alias
- Leetcode (438): [Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

## Problem 
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

## Examples
- Example 1
   - Input
     ```
     s = "cbaebabacd"
     p = "abc"
     ```
   - Output
     ```
     [0,6]
     ```
   - Explanation
      - The substring with start index = 0 is "cba", which is an anagram of "abc".
      - The substring with start index = 6 is "bac", which is an anagram of "abc".
- Example 2
   - Input
     ```
     s = "abab"
     p = "ab"
     ```
   - Output
     ```
     [0,1,2]
     ```
   - Explanation
      - The substring with start index = 0 is "ab", which is an anagram of "ab".
      - The substring with start index = 1 is "ba", which is an anagram of "ab".
      - The substring with start index = 2 is "ab", which is an anagram of "ab".

## Solutions
- **Solution 1: Sliding window**
   - Idea
      - Use 2 hashmaps (`need` and `window`) to store the frequency of each characters in the string p and the window. 
      - Use 1 variable (`valid`) to count the number of characters whose frequency are matched between string p and window.
      - Shrink the window if the length of the window is greater than the length of string p.
      - Store the index of theleft pointer if the frequencies of all the characters are matched between the window and string p1.

  ```java
  public List<Integer> findAnagrams(String s, String p) {
      HashMap<Character, Integer> need = new HashMap<>();    // store the frequency of each char in string s1
      HashMap<Character, Integer> window = new HashMap<>();  // store the frequency of each char in window

      // count the frequency of each char in string s1
      for (int i = 0; i < p.length(); i++) {
          char c = p.charAt(i);
          need.put(c, need.getOrDefault(c, 0) + 1);
      }

      int left = 0, right = 0;
      int valid = 0;  // store number of chars whose frequency are matched between string s1 and window
      List<Integer> res = new ArrayList<>();

      // increase the window
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
          while (right - left >= p.length()) {
              if (valid == need.size()) {       // if the current substring is anagram of string p
                  res.add(left);                // store the index of left pointer
              }
              
              char d = s.charAt(left);
              left++;

              // update window and valid
              if (need.containsKey(d)) {
                  if (window.get(d).equals(need.get(d)))
                      valid--;
                  window.put(d, window.getOrDefault(d, 0) - 1);
              }
          }
      }

      return res;
  }
  ```
