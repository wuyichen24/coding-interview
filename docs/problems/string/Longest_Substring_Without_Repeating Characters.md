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
- Solution 1
   - Idea
       - Use a hashmap which stores the characters in string as keys and their positions as values.
       - Keep two pointers which define the max substring.
       - Move the right pointer to scan through the string, and meanwhile update the hashmap.
       - If the right pointer's character is already in the hashmap, then move the left pointer to the right of the same character last found.

  ```java
  public int lengthOfLongestSubstring(String s) {
      if (s.length()==0) return 0;

      HashMap<Character, Integer> map = new HashMap<Character, Integer>();
      int max=0;
      for (int left=0, right=0; right < s.length(); ++right){       // Move right pointer to scan the string
          if (map.containsKey(s.charAt(right))){                    // If the right pointer's character is already in the hashmap, then move the left pointer to the right of the same character last found.
              left = Math.max(left , map.get(s.charAt(right))+1);
          }
          map.put(s.charAt(right) , right);
          max = Math.max(max , right-left+1);
      }
      return max;
  }
  ```
