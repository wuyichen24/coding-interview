# Longest Valid Parentheses Substring

## Alias
- Leetcode (32): [Longest Valid Parentheses](https://leetcode.com/problems/longest-valid-parentheses/)

# Problem
Given a string containing just the characters `'('` and `')'`, **return the length of the longest valid (well-formed) parentheses substring**.

## Examples
- Example 1
   - Input
     ```
     "(()"
     ```
   - Output
     ```
     2
     ```
   - Explanation
      - The longest valid parentheses substring is `"()"`
- Example 2
   - Input
     ```
     ")()())"
     ```
   - Output
     ```
     4
     ```
   - Explanation
      - The longest valid parentheses substring is `"()()"`
    
## Solution
- **Solution 1: Dynamic programming + Stack**
   - Idea
      - `dp[i]` means the max length of valid parentheses substring ended with `s[i-1]` (the current `)`)
      - State transition equation
        ```
        dp[i+1] = length of the current parentheses substring + Max length parentheses substring before the current parentheses substring
                = (rightIndex - leftIndex + 1) + dp[leftIndex]
        ```

        ![Longest_Valid_Parentheses_Substring drawio](https://github.com/wuyichen24/coding-interview/assets/8989447/a91f00aa-3427-4f17-a922-39fda696045a)

  ```java
  public int longestValidParentheses(String s) {
      Stack<Integer> stk = new Stack<>();
      int[] dp = new int[s.length() + 1];       // max length of valid parentheses substr ended with s[i-1]
      for (int i = 0; i < s.length(); i++) {
          if (s.charAt(i) == '(') {             // when met (
              stk.push(i);
              dp[i + 1] = 0;                    // it cannot be the end of valid parentheses substr, so set as 0
          } else {                              // when met )
              if (!stk.isEmpty()) { 
                  int leftIndex = stk.pop();    // get index of corresponding (
                  int len = 1 + i - leftIndex + dp[leftIndex]; // calculate the new max length of valid parentheses substring ended with the current )
                  dp[i + 1] = len;
              } else {                          // if no corresponding (, se set 0
                  dp[i + 1] = 0;
              }
          }
      }
        
      // iterate dp array and get the max length
      int res = 0;
      for (int i = 0; i < dp.length; i++) {
          res = Math.max(res, dp[i]);
      }
      return res;
  }
  ```
