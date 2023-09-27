# Palindrome Partitioning

## Alias
- Leetcode (131): [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)

## Problem
Given a string `s`, partition `s` such that every substring of the partition is a palindrome. **Return all possible palindrome partitioning of `s`**.

## Example
- Example 1
   - Input
     ```
     "aab"
     ```
   - Output
     ```
     [["a","a","b"],["aa","b"]]
     ```

## Solutions
- **Solution 1: Backtracking**
   - Idea
      - If the substring which starts at index `start` is the palindrome, continue on the string after the substring.
      - Clarify the key point: 
         - Choose: Choose the potential candidate. Here, our potential candidates are all substrings that could be generated from the given string.
         - Constraint: Define a constraint that must be satisfied by the chosen candidate. In this case, the constraint is that the string must be a palindrome.
         - Goal: We must define the goal that determines if have found the required solution and we must backtrack. Here, our goal is achieved if we have reached the end of the string.


  ```java
  class Solution {
      List<List<String>> res = new LinkedList<>();
      LinkedList<String> track = new LinkedList<>();

      public List<List<String>> partition(String s) {
          backtrack(s, 0);
          return res;
      }

      void backtrack(String s, int start) {
          if (start == s.length()) {                    // when reach the end of the string, save the result
              res.add(new ArrayList<String>(track));
          }
          for (int i = start; i < s.length(); i++) {
              if (!isPalindrome(s, start, i)) {         // if the current substring is not palindrome, ignore
                  // s[start..i] 不是回文串，不能分割
                  continue;
              }

              track.addLast(s.substring(start, i + 1)); // if the current substring is palindrome
              backtrack(s, i + 1);
              track.removeLast();
          }
      }

      // Use 2 pointers to decide a string a palindrome or not
      boolean isPalindrome(String s, int lo, int hi) {
          while (lo < hi) {
              if (s.charAt(lo) != s.charAt(hi)) {
                  return false;
              }
              lo++;
              hi--;
          }
          return true;
      }
  }
  ```
  
   
