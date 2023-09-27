# Word Break

## Alias
- Leetcode (139): [Word Break](https://leetcode.com/problems/word-break/)

## Problem
Given a string `s` and a dictionary of strings `wordDict`, return `true` if `s` can be segmented into a space-separated sequence of one or more dictionary words.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

## Examples
- Example 1
   - Input
     ```
     s = "leetcode"
     wordDict = ["leet","code"]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - Return true because "leetcode" can be segmented as "leet code".
- Example 2
   - Input
     ```
     s = "applepenapple"
     wordDict = ["apple","pen"]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - Return true because "applepenapple" can be segmented as "apple pen apple".
      - Note that you are allowed to reuse a dictionary word.
- Example 3
   - Input
     ```
     s = "catsandog"
     wordDict = ["cats","dog","sand","and","cat"]
     ```
   - Output
     ```
     false
     ```

## Solutions
- **Solution 1: Backtracking**
   - Idea
       - Use index `i` to record the start index for matching the next word.
   - Complexity
       - Time complexity: *O(2<sup>N</sup> * MN)* (M is the size of dictionary `wordDict`, N is the length of string `s`)
  ```
  class Solution {
      List<String> wordDict;

      boolean found = false;                         // indicate we find the valid answer or not
      LinkedList<String> track = new LinkedList<>(); // store the word selection 

      public boolean wordBreak(String s, List<String> wordDict) {
          this.wordDict = wordDict;
          backtrack(s, 0);
          return found;
      }

      void backtrack(String s, int i) {
          if (found) {              // if we already found an valid answer 
              return;
          }
          if (i == s.length()) {    // if we build the word from dictionary
              found = true;
              return;
          }

          for (String word : wordDict) { 
              int len = word.length();
              if (i + len <= s.length() && s.substring(i, i + len).equals(word)) {  // if it is matching
                  track.addLast(word);
                  backtrack(s, i + len);
                  track.removeLast();
              }
          }
      }
  }
  ```
- **Solution 2: Recursion with memoization**
   - Idea
      - Use the recurrence relation:
        ```
        function dp(s, wordDict) {
            for (word in wordDict) {
                if (word is the prefix of s) {
                    dp(s removed prefix word, wordDict)
                }
            }
        }
        ```
      - Use `memo` array to store the intermediate results:
         - `-1` means uncalculated
         - `0` means `false`
         - `1` means `true`
   - Complexity
      - Time complexity: *O(MNK)* (M is the size of dictionary `wordDict`, N is the length of string `s`, K is the average length of words in dictionary `wordDict`)
  ```java
  class Solution {
      int[] memo;

      public boolean wordBreak(String s, List<String> wordDict) {
          memo = new int[s.length()];             // -1: uncalculated, 0: false, 1: true
          Arrays.fill(memo, -1);                  // prefill memo array as -1 (uncalculated)
          return dp(s, 0, wordDict);
      }

      boolean dp(String s, int i, List<String> wordDict) {
          // base case
          if (i == s.length()) {
              return true;
          }
          // if already calculated, don't calculated again
          if (memo[i] != -1) {
              return memo[i] == 1 ? true : false;
          }
          // try all the words to match the prefix of s
          for (String word : wordDict) {
              int len = word.length();
              if (i + len > s.length()) {
                  continue;
              }
              String subStr = s.substring(i, i + len);
              if (!subStr.equals(word)) {
                  continue;
              }
              // if match, try to match the prefix s[i+len..] with words
              if (dp(s, i + len, wordDict)) {
                  memo[i] = 1;
                  return true;
              }
          }
          // if no word can match, mark as false
          memo[i] = 0;
          return false;
      }
  }
  ```
- **Solution 3: Dynamic programming**
   - Idea
      - `dp[i]` means s[i ... len] can be segmented into the words in the dictionary.
      - State transition equation
        ```
        dp[i] = any ( s[i-word.length + 1, i] == word && dp[i-word.length] )
        ```

  ```java
  public boolean wordBreak(String s, List<String> wordDict) {
      boolean[] dp = new boolean[s.length()];
      for (int i = 0; i < s.length(); i++) {
          for (String word: wordDict) {
              // Handle out of bounds case
              if (i < word.length() - 1) {
                  continue;
              }
                
              if (i == word.length() - 1 || dp[i - word.length()]) {
                  if (s.substring(i - word.length() + 1, i + 1).equals(word)) {
                      dp[i] = true;   
                      break;
                  }
              }
          }
      }
        
      return dp[s.length() - 1];
  }
  ```
