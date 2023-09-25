# Edit Distance

## Alias
- Leetcode (72): [Edit Distance](https://leetcode.com/problems/edit-distance/)

## Problem
Given two strings `word1` and `word2`, **return the minimum number of operations required to convert `word1` to `word2`**.

You have the following three operations permitted on a word:
- Insert a character
- Delete a character
- Replace a character

## Examples
- Example 1
   - Input
     ```
     word1 = "horse"
     word2 = "ros"
     ```
   - Output
     ```
     3
     ```
   - Explanation
      - `horse -> rorse` (replace 'h' with 'r')
      - `rorse -> rose` (remove 'r')
      - `rose -> ros` (remove 'e')
- Example 2
   - Input
     ```
     word1 = "intention"
     word2 = "execution"
     ```
   - Output
     ```
     5
     ```
   - Explanation
      - `intention -> inention` (remove 't')
      - `inention -> enention` (replace 'i' with 'e')
      - `enention -> exention` (replace 'n' with 'x')
      - `exention -> exection` (replace 'n' with 'c')
      - `exection -> execution` (insert 'u')

## Solutions
- **Solution 1: Recursion**
   - Idea
      - Use 2 pointers `i` and `j` to point `s1` and `s2` respectively.
      - Compare each char from right to left.
      - Base cases:
         - If `i` finishes, it means all the chars in `s2[0 ... j]` should be deleted. So it needs `j+1` delete operations.
         - If `j` finishes, it means all the chars in `s1[0 ... i]` should be deleted. So it needs `i+1` delete operations.
      - For `s1[i]` and `s2[j]`
         - If `s1[i] = s2[j]`, no operation is needed, move `i` and `j` to the next char respectively.
         - If `s1[i] != s2[j]`, enumerate 3 possible choices, get the minimum operations from 3 choices.
   - Complexity
      - Time complexity: *O(3<sup>M</sup>)* (M is the max length between `word1` and `word2`)
  ```java
  class Solution {
      public int minDistance(String word1, String word2) {
          return recursion(word1, word2, word1.length()-1, word2.length()-1);
      }

      int recursion(String s1, String s2, int i, int j) {
          if (i == -1) return j+1;
          if (j == -1) return i+1;

          if (s1.charAt(i) == s2.charAt(j)) {
              return recursion(s1, s2, i-1, j-1);   // do nothing
          } else {
              return min(
                  recursion(s1, s2, i, j-1)+1,      // insert
                  recursion(s1, s2, i-1, j)+1,      // delete
                  recursion(s1, s2, i-1, j-1)+1     // replace
              );
          }
      }

      int min(int i1, int i2, int i3) {
          return Math.min(i1, Math.min(i2, i3));
      }
  }
  ```

- **Solution 2: Dynamic programming**
   - Idea
      - `dp[i][j]` is the edit distance between s1[0 ... i-1] and s2[0 ... j-1]
      - Base cases:
         - Initialize `dp[i][0]` as `i`
         - Initialize `dp[0][j]` as `j`
      - State transition equation
        ```
        if s1[i] == s2[j]:
            dp[i][j] = dp[i-1][j-1]
        else
            dp[i][j] = min (
               dp[i][j-1],    // delete
               dp[i-1][j],    // insert
               dp[i-1][j-1]   // replace
            )
        ```
  ```java
  class Solution {
      public int minDistance(String s1, String s2) {
          int m = s1.length(), n = s2.length();
          int[][] dp = new int[m + 1][n + 1];
  
          // base case
          for (int i = 1; i <= m; i++)
              dp[i][0] = i;
          for (int j = 1; j <= n; j++)
              dp[0][j] = j;

          // bottom-up calculation
          for (int i = 1; i <= m; i++)
              for (int j = 1; j <= n; j++)
                  if (s1.charAt(i - 1) == s2.charAt(j - 1))
                      dp[i][j] = dp[i - 1][j - 1];
                  else
                      dp[i][j] = min(
                        dp[i - 1][j] + 1,     // delete
                        dp[i][j - 1] + 1,     // insert
                        dp[i - 1][j - 1] + 1  // replace
                      );

          // final result will be the i=m and j=n
          return dp[m][n];
      }

      int min(int a, int b, int c) {
          return Math.min(a, Math.min(b, c));
      }
  }
  ```
