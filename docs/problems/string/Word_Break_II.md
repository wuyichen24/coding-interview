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
- **Solution 1: Backtracking**
   - Idea
      - For the string, it can be separated as: string = word + postfix.
      - We can use the same pattern on the postfix recursively.
   - Steps
      - Use each word of the dictionary to match the prefix of the string.
         - For each word can match the prefix
            - Recurse on the postfix.
            - Add the word into the current combination.
      - When reach the end of the string
         - Add the current combination into the result list.
   - Backtracking analysis:
      - Element: Each slot for one word (in the combination).
      - Choices: All the words in the dictionary.
      - Constraints: Prefix need to match one of the words from the dictionary.
  ```java
  class Solution {
      Set<String> wordSet     = new HashSet();                   // Store each words
      Set<Integer> wordLenSet = new HashSet();                   // Store each unique word length
      List<String> resultList = new ArrayList();
      int stringLength;
        
      public List<String> wordBreak(String s, List<String> wordDict) {
          stringLength = s.length();
          for (String word : wordDict) {
              wordSet.add(word);
              wordLenSet.add(word.length());
          }
          backtrack(s, 0, new LinkedList<String>());
          return resultList;
      }
    
      private void backtrack(
          String s, 
          int start,                                             // start is the start index of the postfix
          LinkedList<String> words) {                            // words is a list of words for the current combination
        
          if (start == stringLength) {                           // If we have reached the end of string.
              resultList.add(String.join(" ", words));           // Join all the words by space and add the current combination into the result list
              return;
          } else {
              for (int len : wordLenSet) { 
                  int end = start + len;
                  if (end <= stringLength) {
                      String word = s.substring(start, end);     // Get the substring from start position and end position    
                      if (wordSet.contains(word)) {              // If the substring is a word, 
                          words.addLast(word);                   // add the word into the current combination,
                          backtrack(s, end, words);              // recurse on the rest of string by moving start index to end index 
                          words.removeLast();
                      }   
                  }
              }
          }
      }
  }
  ```

  ![Get_All_Word_Combinations_For_Constructing_String drawio](https://user-images.githubusercontent.com/8989447/117890302-29aab000-b272-11eb-9cb5-84dbe2616142.png)
  
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
