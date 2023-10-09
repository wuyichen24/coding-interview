# Predict the Winner

## Alias
- Leetcode (486): [Predict the Winner](https://leetcode.com/problems/predict-the-winner/)

## Problem
You are given an integer array `nums`. Two players are playing a game with this array: player 1 and player 2.

Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., `nums[0]` or `nums[nums.length - 1]`) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

Return `true` if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return `true`. You may assume that both players are playing optimally.

## Examples
- Example 1
   - Input
     ```
     [1,5,2]
     ```
   - Output
     ```
     false
     ```
   - Explanation
      - Initially, player 1 can choose between 1 and 2. 
      - If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). 
      - So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. 
      - Hence, player 1 will never be the winner and you need to return false.
- Example 2
   - Input
     ```
     [1,5,233,7]
     ```
   - Output
     ```
     true
     ```
   - Explanation
      - Player 1 first chooses 1. Then player 2 has to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.
      - Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.
    
## Solutions
- **Solution 1: Recursion**
   - Idea
      - Create a recursive function to maximize the current score difference between the two players.
    
  ```java
  class Solution {
      public boolean predictTheWinner(int[] nums) {
          int n = nums.length;
          return maxDiff(nums, 0, n - 1, n) >= 0;
      }

      // maximize the current score difference between the two players.
      private int maxDiff(int[] nums, int left, int right, int n) {
          if (left == right) {
              return nums[left];
          }
        
          int scoreByLeft = nums[left] - maxDiff(nums, left + 1, right, n);
          int scoreByRight = nums[right] - maxDiff(nums, left, right - 1, n);
        
          return Math.max(scoreByLeft, scoreByRight);
      }
  }
  ```
- **Solution 2: Dynamic programming**
   - Idea
      - This problem is very similar to [Stone Game](), so use its function directly.
      - `dp[i][j]` meanings:
         - `dp[i][j].fir = x` means the highest score `x` the first hand player can get from `piles[i...j]`.
         - `dp[i][j].sec = y` means the highest score `y` the second hand player can get from `piles[i...j]`.
      - State transition equation
        ```
        // for first player
        choose_left  = piles[i] + dp[i+1][j].sec
        choose_right = piles[j] + dp[i][j-1].sec
        dp[i][j].fir = max(choose_left, choose_right)

        // for second player
        if first player choose left:
            dp[i][j].sec = dp[i+1][j].fir
        if first player choose right:
            dp[i][j].sec = dp[i][j-1].fir
        ```
        
        ![3](https://github.com/wuyichen24/coding-interview/assets/8989447/8bff2d6d-772e-49ae-be3b-4bdd269bc8bf)

  ```java
  class Solution {
      public boolean predictTheWinner(int[] nums) {
          return stoneGame(nums) >= 0;
      }

      // maximize the current score difference between the two players.
      int stoneGame(int[] piles) {
          int n = piles.length;
        
          // initialize dp array
          Pair[][] dp = new Pair[n][n];
          for (int i = 0; i < n; i++) 
              for (int j = i; j < n; j++)
                  dp[i][j] = new Pair(0, 0);
        
          // base case
          for (int i = 0; i < n; i++) {
              dp[i][i].fir = piles[i];
              dp[i][i].sec = 0;
          }

          // traverse array downward
          for (int i = n - 2; i >= 0; i--) {
              for (int j = i + 1; j < n; j++) {
                  // first player choose left or right
                  int left = piles[i] + dp[i+1][j].sec;
                  int right = piles[j] + dp[i][j-1].sec;

                  // first player will choose the larger one, so second player change accordingly
                  if (left > right) {
                      dp[i][j].fir = left;
                      dp[i][j].sec = dp[i+1][j].fir;
                  } else {
                      dp[i][j].fir = right;
                      dp[i][j].sec = dp[i][j-1].fir;
                  }
              }
          }
          Pair res = dp[0][n-1];
          return res.fir - res.sec;
      }
  }

  class Pair {
      int fir, sec;
      Pair(int fir, int sec) {
          this.fir = fir;
          this.sec = sec;
      }
  }
  ```
