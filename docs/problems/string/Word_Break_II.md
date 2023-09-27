# Word Break II

## Alias
- Leetcode (140): [Word Break II](https://leetcode.com/problems/word-break-ii/)

## Problem
Given a string `s` and a dictionary of strings `wordDict`, add spaces in `s` to construct a sentence where each word is a valid dictionary word. **Return all such possible sentences in any order**.

**Note** that the same word in the dictionary may be reused multiple times in the segmentation.

## Examples
- Example 1
   - Input
     ```
     s = "catsanddog"
     wordDict = ["cat","cats","and","sand","dog"]
     ```
   - Output
     ```
     ["cats and dog","cat sand dog"]
     ```
- Example 2
   - Input
     ```
     s = "pineapplepenapple"
     wordDict = ["apple","pen","applepen","pine","pineapple"]
     ```
   - Output
     ```
     ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
     ```
- Example 3
   - Input
     ```
     s = "catsandog"
     wordDict = ["cats","dog","sand","and","cat"]
     ```
   - Output
     ```
     []
     ```

## Solutions
- **Solution 2: Recursion with memoization**
   - Idea
      - Based on [Word Break](Word_Break.md) - Solution 2: Recursion with memoization
      - Use the recurrence relation:
        ```
        function dp(s, wordDict) {
            for (word in wordDict) {
                if (word is the prefix of s) {
                    subproblem = dp(s removed prefix word, wordDict)
                    return word + subproblem
                }
            }
        }
        ```
      - Use `memo` array to store the intermediate results:
         - memo[i]` means all the possible word break solutions for string `s[i ... len]`

  ```java
  class Solution {
      List<String>[] memo;

      public List<String> wordBreak(String s, List<String> wordDict) {
          memo = new List[s.length()];
          return dp(s, 0, wordDict);
      }

      List<String> dp(String s, int i, List<String> wordDict) {
          List<String> res = new LinkedList<>();

          // base case
          if (i == s.length()) {
              res.add("");
              return res;
          }

          // if already calculated, don't calculated again
          if (memo[i] != null) {
              return memo[i];
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
              List<String> subProblem = dp(s, i + len, wordDict);

              for (String sub : subProblem) {
                  if (sub.isEmpty()) {
                      res.add(word);
                  } else {
                      res.add(word + " " + sub);
                  }
              }
          }
          memo[i] = res;
          return res;
      }
  }
  ```
