# Distinct Subsequences

## Alias
- Leetcode (115): [Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)

## Problem
Given two strings `s` and `t`, return the number of distinct subsequences of `s` which equals `t`.

## Examples
- Example 1
   - Input
     ```
     s = "rabbbit"
     t = "rabbit"
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - There are 3 ways you can generate "rabbit" from `s`:
         - **ra***b***bbit**
         - **rab***b***bit**
         - **rabb***b***it**

## Solutions
- Solution 1: Dynamic programming
   - Idea
      - Initialize a 2D array `dp` of size `M × N` where M represents the length of string S while `N` represents the length of string `T`.
   - Steps
      - Initialize a 2D array `dp` of size `M × N`.
      - Initialize the base cases:
         - `dp[i][N] = 1`: An every string has an empty subsequence.
         - `dp[M][j] = 0`: We have an empty substring left in the string S while we still have `T[j..N-1]` left. That means there is no possibility of a match.
      - For each cell in the `dp`
         - Move to the next character in the S: `dp[i][j] = dp[i+1][j]`
         - If the characters matched, we add the result of the next recursion call `dp[i][j] += dp[i + 1][j + 1]`.
       
  ```java
  public int numDistinct(String s, String t) {
      int M = s.length();
      int N = t.length();
        
      int[][] dp = new int[M + 1][N + 1];
        
      // Base case initialization
      for (int j = 0; j <= N; j++) {
          dp[M][j] = 0;
      }
        
      // Base case initialization
      for (int i = 0; i <= M; i++) {
          dp[i][N] = 1;
      }
        
      // Iterate over the strings in reverse so as to
      // satisfy the way we've modeled our recursive solution
      for (int i = M - 1; i >= 0; i--) {
          for (int j = N - 1; j >= 0; j--) {
                
              // Remember, we always need this result
              dp[i][j] = dp[i + 1][j];

              // If the characters match, we add the
              // result of the next recursion call (in this
              // case, the value of a cell in the dp table
              if (s.charAt(i) == t.charAt(j)) {
                  dp[i][j] += dp[i + 1][j + 1];
              }
          }
      }
        
      return dp[0][0];
  }
  ```
           
